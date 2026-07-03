import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthLayout, FormField, inputClass, primaryBtnClass } from "@/components/AuthLayout";
import { getSession, setSession } from "@/lib/mock-store";
import { apiRequest, setAuthToken } from "@/lib/api";

export const Route = createFileRoute("/")({
  component: SignInPage,
});

function SignInPage() {
  const navigate = useNavigate();
  const [nin, setNin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const isStaff = /^[a-zA-Z]/.test(nin);
    if (!isStaff && !/^\d{11}$/.test(nin)) {
      setError("Please enter a valid 11-digit NIN or Staff Number.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);

    try {
      const res = await apiRequest("/auth/login/", "POST", {
        nin,
        password,
      });

      // Successful login
      setAuthToken(res.token);
      setSession({
        fullName: res.voter.full_name,
        nin: res.voter.username,
        email: res.voter.email,
        state: res.voter.state,
        lga: res.voter.lga,
        verified: res.voter.is_verified,
        language: res.voter.language || "English",
      });

      if (res.voter.is_verified) {
        navigate({ to: "/dashboard" });
      } else {
        navigate({ to: "/verify" });
      }
    } catch (err: any) {
      // Check if user is unverified and needs to be redirected to verification screen
      if (err.message && err.message.includes("not verified")) {
        // Find if unverified data is returned (the fetch returns error, but we want to inspect response or parameters)
        // Since apiRequest throws an error on non-200, if backend returns 403 with user email,
        // we can save session. To keep it simple, we can set temporary session using input fields
        setSession({
          fullName: "Voter", // fallback
          nin,
          state: "",
          lga: "",
          verified: false,
          language: "English",
        });
        navigate({ to: "/verify" });
      } else {
        setError(err.message || "Invalid NIN or password.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Sign in"
      subtitle="Enter your NIN and password to continue your secure session."
      footer={
        <>
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-brand hover:underline">
            Create Account
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField label="NIN or Staff Number" hint="Enter your 11-digit NIN or your INEC Staff ID.">
          <input
            placeholder="e.g. 11111111111 or STAFF-PO"
            value={nin}
            onChange={(e) => setNin(e.target.value)}
            className={inputClass}
            aria-invalid={error?.includes("NIN") || undefined}
          />
        </FormField>
        <FormField label="Password">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </FormField>

        {error && (
          <p role="alert" className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </p>
        )}

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="h-4 w-4 accent-[oklch(0.5_0.17_145)]" /> Remember me
          </label>
          <Link to="/forgot" className="font-medium text-brand hover:underline">Forgot password?</Link>
        </div>

        <button type="submit" disabled={loading} className={primaryBtnClass}>
          {loading ? "Signing in…" : "Sign in"}
        </button>

        <p className="text-center text-xs text-muted-foreground">
          By continuing you agree to our voter privacy notice — your NIN is decoupled from your ballot.
        </p>

        <div className="mt-2 border-t border-border pt-4 flex flex-col gap-2 text-center text-xs text-muted-foreground">
          <p className="font-medium text-foreground/60 uppercase tracking-wider text-[9px]">Other Portals</p>
          <div className="flex gap-2 justify-center flex-wrap">
            <Link
              to="/accreditation"
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition"
            >
              📰 Apply for Media / Observer Accreditation
            </Link>
            <Link
              to="/signup"
              className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition"
            >
              🗳️ Register as a Voter
            </Link>
          </div>
          <p className="text-[10px] text-muted-foreground/60">
            Electoral staff? Use the invitation link sent to your official email.
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}

