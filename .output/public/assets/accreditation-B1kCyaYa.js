import{c as e,l as t,n,s as r}from"./index-DYhThW01.js";import{t as i}from"./api-DPOT9_VF.js";var a=t(e()),o=r(),s={media:{label:`Media House / Broadcaster`,icon:`📰`,desc:`Accredited journalists, TV/radio stations, and online news organizations covering the election.`,idLabel:`CAC Registration Number / Press Council ID`},observer:{label:`Domestic Observer (CSO)`,icon:`🏛️`,desc:`Nigerian civil society organizations and non-profits accredited for domestic observation.`,idLabel:`CAC Registration Number`},intl_observer:{label:`International Observer`,icon:`🌍`,desc:`Representatives of international bodies, diplomatic missions, and foreign election monitoring groups.`,idLabel:`International Body Mandate Reference / Diplomatic Note`}};function c(){let[e,t]=(0,a.useState)(null),[r,c]=(0,a.useState)(`select`),[l,u]=(0,a.useState)(!1),[d,f]=(0,a.useState)({}),[p,m]=(0,a.useState)({organization_name:``,contact_name:``,contact_email:``,contact_phone:``,organization_id:``,mandate_description:``}),[h,g]=(0,a.useState)(null),_=(e,t)=>{m(n=>({...n,[e]:t})),f(t=>({...t,[e]:``}))},v=()=>{let e={};return p.organization_name.trim()||(e.organization_name=`Organization name is required`),p.contact_name.trim()||(e.contact_name=`Contact person name is required`),p.contact_email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.contact_email)||(e.contact_email=`Invalid email address`):e.contact_email=`Email is required`,p.contact_phone.trim()||(e.contact_phone=`Phone number is required`),p.organization_id.trim()||(e.organization_id=`Organization ID is required`),p.mandate_description.trim()?p.mandate_description.trim().length<50&&(e.mandate_description=`Please provide at least 50 characters`):e.mandate_description=`Mandate description is required`,e};return(0,o.jsxs)(`div`,{className:`acc-page`,children:[(0,o.jsxs)(`div`,{className:`acc-container`,children:[(0,o.jsxs)(`div`,{className:`acc-topbar`,children:[(0,o.jsx)(n,{to:`/`,className:`acc-back`,children:`← Back to Home`}),(0,o.jsxs)(`div`,{className:`acc-brand`,children:[(0,o.jsx)(`span`,{className:`acc-brand-icon`,children:`⚡`}),`RemoteVote NG`]})]}),(0,o.jsxs)(`div`,{className:`acc-hero`,children:[(0,o.jsx)(`div`,{className:`acc-inec-badge`,children:`🏛️ INEC Accreditation Portal`}),(0,o.jsx)(`h1`,{children:`Apply for Electoral Accreditation`}),(0,o.jsx)(`p`,{children:`Media organizations, domestic civil society groups, and international observer missions may apply here to receive INEC accreditation for monitoring the election.`})]}),r===`select`&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`h2`,{className:`section-title`,children:`Select Your Organization Type`}),(0,o.jsx)(`div`,{className:`acc-type-grid`,children:Object.entries(s).map(([n,r])=>(0,o.jsxs)(`button`,{className:`acc-type-card ${e===n?`selected`:``}`,onClick:()=>t(n),children:[(0,o.jsx)(`div`,{className:`acc-type-icon`,children:r.icon}),(0,o.jsx)(`strong`,{children:r.label}),(0,o.jsx)(`p`,{children:r.desc}),e===n&&(0,o.jsx)(`div`,{className:`acc-check`,children:`✓ Selected`})]},n))}),(0,o.jsx)(`button`,{className:`btn-acc-continue`,disabled:!e,onClick:()=>c(`form`),children:`Continue to Application →`})]}),r===`form`&&e&&(0,o.jsxs)(`div`,{className:`acc-form-section`,children:[(0,o.jsxs)(`div`,{className:`acc-type-pill`,children:[s[e].icon,` `,s[e].label,(0,o.jsx)(`button`,{className:`change-type`,onClick:()=>c(`select`),children:`Change`})]}),(0,o.jsxs)(`form`,{onSubmit:async t=>{t.preventDefault();let n=v();if(Object.keys(n).length>0){f(n);return}u(!0);try{let t=await i(`/onboarding/accreditation/`,`POST`,{...p,applicant_type:e});g(t.application_id),c(`submitted`)}catch(e){f({submit:e?.message||`Submission failed. Please try again.`})}finally{u(!1)}},className:`acc-form`,children:[(0,o.jsxs)(`div`,{className:`form-row-2`,children:[(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Organization Name *`}),(0,o.jsx)(`input`,{type:`text`,placeholder:`e.g., Channels Television`,value:p.organization_name,onChange:e=>_(`organization_name`,e.target.value),className:d.organization_name?`err`:``}),d.organization_name&&(0,o.jsx)(`span`,{className:`ferr`,children:d.organization_name})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Contact Person *`}),(0,o.jsx)(`input`,{type:`text`,placeholder:`Full name of primary contact`,value:p.contact_name,onChange:e=>_(`contact_name`,e.target.value),className:d.contact_name?`err`:``}),d.contact_name&&(0,o.jsx)(`span`,{className:`ferr`,children:d.contact_name})]})]}),(0,o.jsxs)(`div`,{className:`form-row-2`,children:[(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Contact Email *`}),(0,o.jsx)(`input`,{type:`email`,placeholder:`email@organization.org`,value:p.contact_email,onChange:e=>_(`contact_email`,e.target.value),className:d.contact_email?`err`:``}),d.contact_email&&(0,o.jsx)(`span`,{className:`ferr`,children:d.contact_email})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Phone Number *`}),(0,o.jsx)(`input`,{type:`tel`,placeholder:`+234 800 000 0000`,value:p.contact_phone,onChange:e=>_(`contact_phone`,e.target.value),className:d.contact_phone?`err`:``}),d.contact_phone&&(0,o.jsx)(`span`,{className:`ferr`,children:d.contact_phone})]})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsxs)(`label`,{children:[s[e].idLabel,` *`]}),(0,o.jsx)(`input`,{type:`text`,placeholder:`Enter your organization's registration or reference number`,value:p.organization_id,onChange:e=>_(`organization_id`,e.target.value),className:d.organization_id?`err`:``}),d.organization_id&&(0,o.jsx)(`span`,{className:`ferr`,children:d.organization_id})]}),(0,o.jsxs)(`div`,{className:`form-group`,children:[(0,o.jsx)(`label`,{children:`Mandate / Coverage Description *`}),(0,o.jsx)(`textarea`,{rows:5,placeholder:`Briefly describe your organization's mandate, coverage area, and what you intend to monitor or report. (Minimum 50 characters)`,value:p.mandate_description,onChange:e=>_(`mandate_description`,e.target.value),className:d.mandate_description?`err`:``}),(0,o.jsxs)(`small`,{children:[p.mandate_description.length,` / 50 minimum characters`]}),d.mandate_description&&(0,o.jsx)(`span`,{className:`ferr`,children:d.mandate_description})]}),d.submit&&(0,o.jsxs)(`div`,{className:`acc-submit-error`,children:[`⚠️ `,d.submit]}),(0,o.jsxs)(`div`,{className:`acc-form-actions`,children:[(0,o.jsx)(`button`,{type:`button`,className:`btn-acc-back`,onClick:()=>c(`select`),children:`← Back`}),(0,o.jsx)(`button`,{type:`submit`,disabled:l,className:`btn-acc-submit`,children:l?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`span`,{className:`spinner-sm`}),` Submitting…`]}):`📨 Submit Application`})]})]}),(0,o.jsx)(`div`,{className:`acc-privacy-note`,children:`🔒 Your information is protected and will only be used for INEC accreditation verification purposes. Approved organizations will receive a portal access link via the provided email.`})]}),r===`submitted`&&(0,o.jsxs)(`div`,{className:`acc-success`,children:[(0,o.jsx)(`div`,{className:`acc-success-icon`,children:`🎉`}),(0,o.jsx)(`h2`,{children:`Application Submitted!`}),(0,o.jsx)(`p`,{children:`Thank you. Your accreditation application has been received by INEC. You will be contacted at your provided email address once the review is complete.`}),(0,o.jsxs)(`div`,{className:`acc-ref`,children:[(0,o.jsx)(`span`,{children:`Reference ID`}),(0,o.jsxs)(`strong`,{children:[`RVNG-ACC-`,String(h).padStart(5,`0`)]})]}),(0,o.jsxs)(`div`,{className:`acc-timeline`,children:[(0,o.jsxs)(`div`,{className:`timeline-step done`,children:[(0,o.jsx)(`span`,{children:`✅`}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`strong`,{children:`Application Received`}),(0,o.jsx)(`p`,{children:`Your submission is in the INEC review queue`})]})]}),(0,o.jsxs)(`div`,{className:`timeline-step`,children:[(0,o.jsx)(`span`,{children:`⏳`}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`strong`,{children:`ICT Officer Review`}),(0,o.jsx)(`p`,{children:`Typically 3–5 business days`})]})]}),(0,o.jsxs)(`div`,{className:`timeline-step`,children:[(0,o.jsx)(`span`,{children:`📧`}),(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`strong`,{children:`Portal Access Sent`}),(0,o.jsx)(`p`,{children:`Activation link emailed upon approval`})]})]})]}),(0,o.jsx)(n,{to:`/`,className:`btn-acc-home`,children:`Return to Home`})]})]}),(0,o.jsx)(`style`,{children:`
        .acc-page {
          min-height: 100vh;
          background: radial-gradient(ellipse at top, #0f172a 0%, #1a1040 50%, #0f172a 100%);
          color: #e2e8f0;
          font-family: 'Inter', sans-serif;
          padding: 2rem 1rem 4rem;
        }

        .acc-container {
          max-width: 820px;
          margin: 0 auto;
        }

        .acc-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }

        .acc-back {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.2s;
        }
        .acc-back:hover { color: #c7d2fe; }

        .acc-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          color: #c7d2fe;
        }

        .acc-brand-icon {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 6px;
          width: 28px; height: 28px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem;
        }

        .acc-hero {
          text-align: center;
          margin-bottom: 3rem;
        }

        .acc-inec-badge {
          display: inline-block;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.35);
          border-radius: 50px;
          padding: 0.35rem 1rem;
          font-size: 0.82rem;
          color: #a5b4fc;
          margin-bottom: 1rem;
        }

        .acc-hero h1 {
          font-size: clamp(1.6rem, 4vw, 2.5rem);
          font-weight: 800;
          background: linear-gradient(135deg, #e2e8f0, #a5b4fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .acc-hero p {
          color: #94a3b8;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .section-title {
          font-size: 1rem;
          color: #94a3b8;
          font-weight: 600;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .acc-type-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .acc-type-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
          color: inherit;
          position: relative;
        }

        .acc-type-card:hover {
          border-color: rgba(99,102,241,0.5);
          background: rgba(99,102,241,0.08);
          transform: translateY(-2px);
        }

        .acc-type-card.selected {
          border-color: #6366f1;
          background: rgba(99,102,241,0.15);
        }

        .acc-type-icon { font-size: 2rem; margin-bottom: 0.75rem; }

        .acc-type-card strong {
          display: block;
          color: #e2e8f0;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .acc-type-card p {
          color: #64748b;
          font-size: 0.8rem;
          line-height: 1.5;
          margin: 0;
        }

        .acc-check {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: #6366f1;
          color: white;
          font-size: 0.7rem;
          padding: 0.2rem 0.6rem;
          border-radius: 50px;
          font-weight: 600;
        }

        .btn-acc-continue {
          display: block;
          width: 100%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 0.75rem;
          padding: 0.9rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }

        .btn-acc-continue:disabled { opacity: 0.4; cursor: not-allowed; }
        .btn-acc-continue:not(:disabled):hover { opacity: 0.9; }

        .acc-type-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.35);
          border-radius: 50px;
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          color: #a5b4fc;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .change-type {
          background: none;
          border: 1px solid rgba(99,102,241,0.4);
          border-radius: 50px;
          color: #818cf8;
          font-size: 0.75rem;
          padding: 0.15rem 0.6rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .change-type:hover { background: rgba(99,102,241,0.15); }

        .acc-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 600px) { .form-row-2 { grid-template-columns: 1fr; } }

        .form-group { display: flex; flex-direction: column; gap: 0.4rem; }

        .form-group label {
          color: #94a3b8;
          font-size: 0.82rem;
          font-weight: 500;
        }

        .form-group input, .form-group textarea {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 0.6rem;
          padding: 0.75rem 1rem;
          color: #e2e8f0;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
          resize: vertical;
        }

        .form-group input:focus, .form-group textarea:focus { border-color: #6366f1; }
        .form-group input.err, .form-group textarea.err { border-color: #ef4444; }

        .form-group small { color: #475569; font-size: 0.77rem; }
        .ferr { color: #f87171; font-size: 0.8rem; }

        .acc-submit-error {
          background: rgba(239,68,68,0.12);
          border: 1px solid rgba(239,68,68,0.3);
          border-radius: 0.6rem;
          padding: 0.75rem 1rem;
          color: #fca5a5;
          font-size: 0.85rem;
        }

        .acc-form-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-acc-back {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 0.75rem;
          padding: 0.9rem 1.5rem;
          color: #94a3b8;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .btn-acc-back:hover { background: rgba(255,255,255,0.1); }

        .btn-acc-submit {
          flex: 1;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 0.75rem;
          padding: 0.9rem;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: opacity 0.2s;
        }

        .btn-acc-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .btn-acc-submit:not(:disabled):hover { opacity: 0.9; }

        .spinner-sm {
          display: inline-block;
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .acc-privacy-note {
          margin-top: 1.5rem;
          color: #475569;
          font-size: 0.8rem;
          text-align: center;
          line-height: 1.5;
          padding: 0.75rem;
          background: rgba(255,255,255,0.02);
          border-radius: 0.5rem;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .acc-success {
          text-align: center;
          padding: 2rem 0;
        }

        .acc-success-icon { font-size: 4rem; margin-bottom: 1.25rem; }

        .acc-success h2 {
          font-size: 1.75rem;
          font-weight: 800;
          color: #e2e8f0;
          margin-bottom: 0.75rem;
        }

        .acc-success p {
          color: #94a3b8;
          max-width: 480px;
          margin: 0 auto 1.5rem;
          line-height: 1.7;
        }

        .acc-ref {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: 0.75rem;
          padding: 1rem 2rem;
          margin-bottom: 2rem;
        }

        .acc-ref span { color: #6ee7b7; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; }
        .acc-ref strong { color: #34d399; font-size: 1.1rem; font-family: monospace; margin-top: 0.25rem; }

        .acc-timeline {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: left;
          max-width: 400px;
          margin: 0 auto 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 0.75rem;
          padding: 1rem 1.25rem;
        }

        .timeline-step {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .timeline-step span { font-size: 1.1rem; flex-shrink: 0; }
        .timeline-step strong { display: block; color: #c7d2fe; font-size: 0.85rem; }
        .timeline-step p { color: #64748b; font-size: 0.78rem; margin: 0.15rem 0 0; }
        .timeline-step.done strong { color: #34d399; }

        .btn-acc-home {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          text-decoration: none;
          border-radius: 0.75rem;
          padding: 0.85rem 2rem;
          font-size: 0.9rem;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .btn-acc-home:hover { opacity: 0.9; }

        .acc-form-section { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
      `})]})}export{c as component};