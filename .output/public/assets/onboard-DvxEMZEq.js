import{c as e,l as t,n,r,s as i}from"./index-mLgPX7Ua.js";import{t as a}from"./api-CsN8sKBL.js";var o=t(e()),s=i(),c={po:`🗳️`,apo:`📋`,spo:`🏢`,co:`📊`,ro:`⚖️`,auditor:`🔍`,media:`📰`,observer:`👁️`};function l(){let e=r(),t=new URLSearchParams(window.location.search).get(`token`)||``,[i,l]=(0,o.useState)(`validating`),[u,d]=(0,o.useState)(null),[f,p]=(0,o.useState)(``),[m,h]=(0,o.useState)(``),[g,_]=(0,o.useState)(``),[v,y]=(0,o.useState)(``),[b,x]=(0,o.useState)(!1),[S,C]=(0,o.useState)(!1),[w,T]=(0,o.useState)(``),[E,D]=(0,o.useState)(``),[O,k]=(0,o.useState)(null);(0,o.useEffect)(()=>{if(!t){l(`error`),p(`No invitation token found. Please use the link from your email.`);return}(async()=>{try{let e=await a(`/onboarding/accept/${t}/`,`GET`);d(e),l(`form`)}catch(e){l(`error`),p(e?.message||`This invitation is invalid, expired, or has already been used.`)}})()},[t]);let A=e=>e?/^\d{11}$/.test(e)?``:`NIN must be exactly 11 digits`:`NIN is required`,j=(e,t)=>e?e.length<6?`Password must be at least 6 characters`:t&&e!==t?`Passwords do not match`:``:`Password is required`;return(0,s.jsxs)(`div`,{className:`onboard-page`,children:[(0,s.jsxs)(`div`,{className:`onboard-card`,children:[(0,s.jsxs)(`div`,{className:`onboard-logo`,children:[(0,s.jsx)(`div`,{className:`onboard-logo-icon`,children:`⚡`}),(0,s.jsx)(`span`,{children:`RemoteVote NG`})]}),i===`validating`&&(0,s.jsxs)(`div`,{className:`onboard-loading`,children:[(0,s.jsx)(`div`,{className:`spinner-lg`}),(0,s.jsx)(`p`,{children:`Validating your invitation…`})]}),i===`error`&&(0,s.jsxs)(`div`,{className:`onboard-error-state`,children:[(0,s.jsx)(`div`,{className:`onboard-error-icon`,children:`🔒`}),(0,s.jsx)(`h1`,{children:`Invitation Invalid`}),(0,s.jsx)(`p`,{children:f}),(0,s.jsx)(n,{to:`/`,className:`btn-primary-full`,children:`Return to Home`})]}),i===`form`&&u&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(`div`,{className:`onboard-header`,children:[(0,s.jsxs)(`div`,{className:`role-badge-large`,children:[(0,s.jsx)(`span`,{children:c[u.role]||`🏛️`}),(0,s.jsx)(`strong`,{children:u.role_display})]}),(0,s.jsx)(`h1`,{children:`Activate Your INEC Account`}),(0,s.jsxs)(`p`,{children:[`You have been invited to join RemoteVote NG as a `,(0,s.jsx)(`strong`,{children:u.role_display}),`. Complete the form below to set up your secure account.`]})]}),(0,s.jsxs)(`div`,{className:`invitation-details`,children:[(0,s.jsxs)(`div`,{className:`inv-row`,children:[(0,s.jsx)(`span`,{className:`inv-label`,children:`📧 Email`}),(0,s.jsx)(`span`,{className:`inv-val`,children:u.email})]}),(0,s.jsxs)(`div`,{className:`inv-row`,children:[(0,s.jsx)(`span`,{className:`inv-label`,children:`🪪 Staff ID`}),(0,s.jsx)(`span`,{className:`inv-val`,children:u.staff_number})]}),(0,s.jsxs)(`div`,{className:`inv-row`,children:[(0,s.jsx)(`span`,{className:`inv-label`,children:`⏰ Expires`}),(0,s.jsx)(`span`,{className:`inv-val`,children:new Date(u.expires_at).toLocaleDateString()})]})]}),(0,s.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault();let n=A(m),r=j(g,v);if(T(n),D(r),!(n||r)){C(!0);try{let e=await a(`/onboarding/accept/${t}/`,`POST`,{nin:m,password:g});k({name:e.voter.full_name,role:e.voter.role}),l(`success`)}catch(e){D(e?.message||`Account activation failed. Please contact INEC ICT Support.`)}finally{C(!1)}}},className:`onboard-form`,children:[(0,s.jsxs)(`div`,{className:`form-group`,children:[(0,s.jsx)(`label`,{htmlFor:`onboard-nin`,children:`National Identification Number (NIN)`}),(0,s.jsx)(`input`,{id:`onboard-nin`,type:`text`,inputMode:`numeric`,maxLength:11,placeholder:`Enter your 11-digit NIN`,value:m,onChange:e=>{h(e.target.value),T(``)},className:w?`input-error`:``}),w&&(0,s.jsx)(`span`,{className:`field-error`,children:w}),(0,s.jsx)(`small`,{children:`Your NIN will be cross-checked with the NIMC national identity database.`})]}),(0,s.jsxs)(`div`,{className:`form-group`,children:[(0,s.jsx)(`label`,{htmlFor:`onboard-pass`,children:`Create Password`}),(0,s.jsxs)(`div`,{className:`password-wrap`,children:[(0,s.jsx)(`input`,{id:`onboard-pass`,type:b?`text`:`password`,placeholder:`Minimum 6 characters`,value:g,onChange:e=>{_(e.target.value),D(``)},className:E?`input-error`:``}),(0,s.jsx)(`button`,{type:`button`,className:`toggle-pass`,onClick:()=>x(!b),children:b?`Hide`:`Show`})]})]}),(0,s.jsxs)(`div`,{className:`form-group`,children:[(0,s.jsx)(`label`,{htmlFor:`onboard-confirm`,children:`Confirm Password`}),(0,s.jsx)(`input`,{id:`onboard-confirm`,type:b?`text`:`password`,placeholder:`Repeat your password`,value:v,onChange:e=>{y(e.target.value),D(``)}}),E&&(0,s.jsx)(`span`,{className:`field-error`,children:E})]}),(0,s.jsx)(`button`,{type:`submit`,disabled:S,className:`btn-activate`,children:S?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`span`,{className:`spinner-sm`}),` Activating Account…`]}):`🔓 Activate My Account`})]}),(0,s.jsxs)(`p`,{className:`onboard-footer`,children:[`Need help? Contact `,(0,s.jsx)(`strong`,{children:`INEC ICT Support`}),` with your staff number: `,(0,s.jsx)(`code`,{children:u.staff_number})]})]}),i===`success`&&O&&(0,s.jsxs)(`div`,{className:`onboard-success`,children:[(0,s.jsx)(`div`,{className:`success-icon-big`,children:`✅`}),(0,s.jsx)(`h1`,{children:`Account Activated!`}),(0,s.jsxs)(`p`,{children:[`Welcome, `,(0,s.jsx)(`strong`,{children:O.name}),`. Your INEC electoral account has been successfully created. You can now log in to the RemoteVote NG portal with your Staff Number and password.`]}),(0,s.jsxs)(`div`,{className:`success-role-badge`,children:[(0,s.jsx)(`span`,{children:c[O.role]||`🏛️`}),(0,s.jsxs)(`strong`,{children:[`Assigned Role: `,O.role.toUpperCase()]})]}),(0,s.jsx)(`button`,{onClick:()=>e({to:`/`}),className:`btn-activate`,children:`🔐 Go to Login`})]})]}),(0,s.jsx)(`style`,{children:`
        .onboard-page {
          min-height: 100vh;
          background: radial-gradient(ellipse at top left, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          font-family: 'Inter', sans-serif;
        }

        .onboard-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1.5rem;
          padding: 2.5rem;
          width: 100%;
          max-width: 480px;
          backdrop-filter: blur(20px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.5);
        }

        .onboard-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          color: #c7d2fe;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .onboard-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
        }

        .onboard-loading {
          text-align: center;
          padding: 3rem 0;
          color: #a5b4fc;
        }

        .onboard-loading p { margin-top: 1.5rem; font-size: 0.95rem; }

        .spinner-lg {
          width: 48px; height: 48px;
          border: 4px solid rgba(99,102,241,0.3);
          border-top-color: #6366f1;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto;
        }

        .spinner-sm {
          display: inline-block;
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin-right: 6px;
          vertical-align: middle;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .onboard-error-state, .onboard-success {
          text-align: center;
          padding: 1rem 0;
        }

        .onboard-error-icon, .success-icon-big {
          font-size: 3.5rem;
          margin-bottom: 1.25rem;
        }

        .onboard-error-state h1, .onboard-success h1 {
          color: #e2e8f0;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .onboard-error-state p, .onboard-success p {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .onboard-header h1 {
          color: #e2e8f0;
          font-size: 1.4rem;
          font-weight: 700;
          margin: 1rem 0 0.5rem;
        }

        .onboard-header p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .role-badge-large {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2));
          border: 1px solid rgba(99,102,241,0.4);
          border-radius: 50px;
          padding: 0.5rem 1.25rem;
          color: #c7d2fe;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .invitation-details {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 0.75rem;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .inv-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .inv-row:last-child { border-bottom: none; }

        .inv-label { color: #64748b; font-size: 0.82rem; }
        .inv-val { color: #c7d2fe; font-size: 0.85rem; font-weight: 500; }

        .onboard-form { display: flex; flex-direction: column; gap: 1.25rem; }

        .form-group { display: flex; flex-direction: column; gap: 0.4rem; }

        .form-group label {
          color: #94a3b8;
          font-size: 0.82rem;
          font-weight: 500;
        }

        .form-group input {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 0.6rem;
          padding: 0.75rem 1rem;
          color: #e2e8f0;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
          box-sizing: border-box;
        }

        .form-group input:focus { border-color: #6366f1; }
        .form-group input.input-error { border-color: #ef4444; }

        .form-group small { color: #64748b; font-size: 0.77rem; }

        .field-error { color: #f87171; font-size: 0.8rem; }

        .password-wrap {
          position: relative;
          display: flex;
        }

        .password-wrap input { padding-right: 4.5rem; }

        .toggle-pass {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #6366f1;
          font-size: 0.8rem;
          cursor: pointer;
          font-weight: 600;
        }

        .btn-activate, .btn-primary-full {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 0.75rem;
          padding: 0.9rem 1.5rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.1s;
          margin-top: 0.5rem;
        }

        .btn-activate:hover, .btn-primary-full:hover { opacity: 0.9; }
        .btn-activate:active { transform: scale(0.98); }
        .btn-activate:disabled { opacity: 0.5; cursor: not-allowed; }

        .onboard-footer {
          text-align: center;
          color: #475569;
          font-size: 0.78rem;
          margin-top: 1.25rem;
        }

        .onboard-footer strong { color: #64748b; }
        .onboard-footer code {
          background: rgba(99,102,241,0.15);
          color: #a5b4fc;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
          font-family: monospace;
        }

        .success-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16,185,129,0.15);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 50px;
          padding: 0.5rem 1.25rem;
          color: #34d399;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
      `})]})}export{l as component};