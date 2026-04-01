import React, { useMemo, useState } from "react";

const phoneNumber = "9603517282";
const displayPhone = "960-351-7282";

const stepLabels = [
  "ZIP Code",
  "Quote Type",
  "Home Size",
  "System Age",
  "Financing",
  "Contact Info",
  "Estimate",
];

const choiceCard = {
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  borderRadius: 18,
  padding: 18,
  cursor: "pointer",
  textAlign: "left",
  transition: "all .18s ease",
  minHeight: 88,
  fontWeight: 700,
  fontSize: 15,
  boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
};

function money(n) {
  return `$${n.toLocaleString()}`;
}

export default function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    zip: "",
    systemType: "",
    homeSize: "",
    systemAge: "",
    financing: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const progress = useMemo(() => (step / 7) * 100, [step]);

  const estimate = useMemo(() => {
    let low = 7200;
    let high = 9800;

    const typeAdj = {
      full: [2200, 3600],
      cool: [1100, 2100],
      heatpump: [2500, 3900],
      custom: [1700, 3400],
    };

    const sizeAdj = {
      s1: [0, 600],
      s2: [700, 1400],
      s3: [1500, 2500],
      s4: [2300, 3600],
      s5: [3300, 5000],
      s6: [4800, 7200],
    };

    const ageAdj = {
      a1: [0, 300],
      a2: [250, 550],
      a3: [500, 900],
      a4: [800, 1400],
    };

    const financeAdj = {
      yes: [250, 450],
      no: [0, 0],
    };

    const a = typeAdj[form.systemType] || [0, 0];
    const b = sizeAdj[form.homeSize] || [0, 0];
    const c = ageAdj[form.systemAge] || [0, 0];
    const d = financeAdj[form.financing] || [0, 0];

    low += a[0] + b[0] + c[0] + d[0];
    high += a[1] + b[1] + c[1] + d[1];

    low = Math.round(low / 100) * 100;
    high = Math.round(high / 100) * 100;

    return `${money(low)} - ${money(high)}`;
  }, [form]);

  const setValue = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const next = () => setStep((s) => Math.min(7, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const validateStep1 = () => {
    if (!/^\d{5}$/.test(form.zip.trim())) {
      setErrors((e) => ({ ...e, zip: "Enter a valid 5-digit ZIP code." }));
      return;
    }
    next();
  };

  const validateContact = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (form.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = "Enter a valid email.";

    setErrors((prev) => ({ ...prev, ...nextErrors }));

    if (Object.keys(nextErrors).length) return;
    setStep(7);
  };

  const buttonBase = {
    border: 0,
    borderRadius: 16,
    minHeight: 54,
    padding: "14px 18px",
    fontSize: 16,
    fontWeight: 800,
    cursor: "pointer",
  };

  const primaryBtn = {
    ...buttonBase,
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    color: "white",
    boxShadow: "0 16px 28px rgba(37,99,235,0.28)",
  };

  const greenBtn = {
    ...buttonBase,
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    color: "white",
    boxShadow: "0 16px 28px rgba(34,197,94,0.24)",
  };

  const ghostBtn = {
    ...buttonBase,
    background: "rgba(255,255,255,0.08)",
    color: "white",
    border: "1px solid rgba(255,255,255,0.12)",
  };

  const inputStyle = {
    width: "100%",
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    padding: "15px 16px",
    fontSize: 16,
    outline: "none",
  };

  const selectedStyle = {
    border: "1px solid rgba(34,197,94,0.55)",
    background: "rgba(34,197,94,0.14)",
    boxShadow: "0 0 0 1px rgba(34,197,94,0.2) inset",
  };

  const Choice = ({ active, title, subtitle, onClick }) => (
    <button style={{ ...choiceCard, ...(active ? selectedStyle : {}) }} onClick={onClick}>
      <div>{title}</div>
      {subtitle ? <div style={{ marginTop: 6, color: "#aab7cf", fontSize: 12, fontWeight: 600 }}>{subtitle}</div> : null}
    </button>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(59,130,246,.18), transparent 28%), radial-gradient(circle at top right, rgba(34,197,94,.14), transparent 24%), linear-gradient(180deg, #08101d 0%, #0b1220 100%)",
        color: "white",
        fontFamily: "Inter, Arial, sans-serif",
        paddingBottom: 110,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(14px)",
          background: "rgba(8,16,29,.82)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                display: "grid",
                placeItems: "center",
                background: "linear-gradient(135deg, #2563eb, #22c55e)",
                fontSize: 19,
                boxShadow: "0 16px 30px rgba(0,0,0,0.22)",
              }}
            >
              ❄️
            </div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 18 }}>DFW HVAC Quotes</div>
              <div style={{ color: "#aab7cf", fontSize: 12, fontWeight: 600 }}>Install & replacement leads only</div>
            </div>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(34,197,94,.12)",
              border: "1px solid rgba(34,197,94,.24)",
              color: "#d8ffe6",
              fontWeight: 800,
              fontSize: 13,
            }}
          >
            <span
              style={{
                width: 9,
                height: 9,
                borderRadius: 999,
                background: "#22c55e",
                boxShadow: "0 0 0 6px rgba(34,197,94,.15)",
              }}
            />
            Fast estimate path available now
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "24px 16px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          <section
            style={{
              padding: 28,
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
              boxShadow: "0 22px 50px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 12px",
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: ".7px",
                color: "#dbeafe",
                border: "1px solid rgba(59,130,246,.24)",
                background: "rgba(59,130,246,.12)",
                marginBottom: 16,
              }}
            >
              Replacement quotes without the runaround
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(34px, 6vw, 62px)",
                lineHeight: 0.97,
                letterSpacing: -1.4,
              }}
            >
              Get an instant ballpark estimate for a new AC or HVAC system in DFW
            </h1>

            <p style={{ color: "#aab7cf", fontSize: 19, lineHeight: 1.5, marginTop: 16, marginBottom: 24 }}>
              Answer a few quick questions and get a realistic budget range in minutes. Then call or text for exact options the same day.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 12,
                marginBottom: 24,
              }}
            >
              {[
                ["⚡", "Fast estimate", "No waiting around just to get a starting number."],
                ["🏠", "Install focused", "Built for replacement and new system buyers only."],
                ["💬", "Text or call next", "Talk to a real person after your estimate."],
                ["💳", "Financing friendly", "See a range first, then review payment options."],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: 14,
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 12,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(59,130,246,.18)",
                      flexShrink: 0,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, marginBottom: 4 }}>{title}</div>
                    <div style={{ color: "#aab7cf", fontSize: 14 }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="#estimate-tool" style={{ ...primaryBtn, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                Get Instant Estimate
              </a>
              <a href={`tel:${phoneNumber}`} style={{ ...greenBtn, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                Call Now
              </a>
              <a href={`sms:${phoneNumber}`} style={{ ...ghostBtn, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                Text Now
              </a>
            </div>

            <div style={{ marginTop: 14, color: "#aab7cf", fontSize: 13 }}>
              Serving the DFW area. Ballpark estimate only. Final installed price depends on equipment, code needs, and site conditions.
            </div>
          </section>

          <section
            id="estimate-tool"
            style={{
              padding: 24,
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
              boxShadow: "0 22px 50px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ color: "#bfdbfe", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: ".8px", marginBottom: 10 }}>
              Instant estimate tool
            </div>
            <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.05 }}>See your budget range</h2>
            <p style={{ color: "#aab7cf", marginTop: 10, marginBottom: 18, fontSize: 15 }}>
              Built for replacement and install leads. Not for repair or service calls.
            </p>

            <div style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, color: "#aab7cf", fontSize: 13, marginBottom: 8 }}>
                <span>{`Step ${step} of 7`}</span>
                <span>{stepLabels[step - 1]}</span>
              </div>
              <div style={{ height: 10, background: "rgba(255,255,255,.08)", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ width: `${progress}%`, height: "100%", background: "linear-gradient(90deg, #2563eb, #22c55e)", borderRadius: 999 }} />
              </div>
            </div>

            {step === 1 && (
              <div>
                <h3 style={{ fontSize: 24, marginTop: 0, marginBottom: 8 }}>Where is the home located?</h3>
                <p style={{ color: "#aab7cf", marginTop: 0, marginBottom: 18 }}>We use this to make sure the lead is in the service area.</p>
                <input value={form.zip} onChange={(e) => setValue("zip", e.target.value)} placeholder="Example: 76179" style={inputStyle} />
                {errors.zip ? <div style={{ color: "#fecaca", fontSize: 13, marginTop: 8 }}>{errors.zip}</div> : null}
                <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
                  <button style={{ ...primaryBtn, width: "100%" }} onClick={validateStep1}>Continue</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 style={{ fontSize: 24, marginTop: 0, marginBottom: 8 }}>What kind of quote do you need?</h3>
                <p style={{ color: "#aab7cf", marginTop: 0, marginBottom: 18 }}>Choose the closest fit.</p>
                <div style={{ display: "grid", gap: 12 }}>
                  <Choice active={form.systemType === "full"} title="Complete AC and furnace replacement" subtitle="Most common full system quote" onClick={() => setValue("systemType", "full")} />
                  <Choice active={form.systemType === "cool"} title="AC condenser and coil replacement" subtitle="Cooling side only" onClick={() => setValue("systemType", "cool")} />
                  <Choice active={form.systemType === "heatpump"} title="Heat pump system replacement" subtitle="All-electric style setup" onClick={() => setValue("systemType", "heatpump")} />
                  <Choice active={form.systemType === "custom"} title="New system for home addition or changeout" subtitle="Custom install situation" onClick={() => setValue("systemType", "custom")} />
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
                  <button style={{ ...ghostBtn, flex: 1 }} onClick={back}>Back</button>
                  <button style={{ ...primaryBtn, flex: 1, opacity: form.systemType ? 1 : 0.55 }} onClick={() => form.systemType && next()}>Continue</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 style={{ fontSize: 24, marginTop: 0, marginBottom: 8 }}>About how big is the home?</h3>
                <p style={{ color: "#aab7cf", marginTop: 0, marginBottom: 18 }}>If you are unsure, pick the closest range.</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
                  <Choice active={form.homeSize === "s1"} title="Under 1,500 sq ft" onClick={() => setValue("homeSize", "s1")} />
                  <Choice active={form.homeSize === "s2"} title="1,500 to 2,000 sq ft" onClick={() => setValue("homeSize", "s2")} />
                  <Choice active={form.homeSize === "s3"} title="2,000 to 2,500 sq ft" onClick={() => setValue("homeSize", "s3")} />
                  <Choice active={form.homeSize === "s4"} title="2,500 to 3,000 sq ft" onClick={() => setValue("homeSize", "s4")} />
                  <Choice active={form.homeSize === "s5"} title="3,000 to 4,000 sq ft" onClick={() => setValue("homeSize", "s5")} />
                  <Choice active={form.homeSize === "s6"} title="Over 4,000 sq ft" onClick={() => setValue("homeSize", "s6")} />
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
                  <button style={{ ...ghostBtn, flex: 1 }} onClick={back}>Back</button>
                  <button style={{ ...primaryBtn, flex: 1, opacity: form.homeSize ? 1 : 0.55 }} onClick={() => form.homeSize && next()}>Continue</button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 style={{ fontSize: 24, marginTop: 0, marginBottom: 8 }}>How old is the current system?</h3>
                <p style={{ color: "#aab7cf", marginTop: 0, marginBottom: 18 }}>Choose the closest age.</p>
                <div style={{ display: "grid", gap: 12 }}>
                  <Choice active={form.systemAge === "a1"} title="Under 5 years" onClick={() => setValue("systemAge", "a1")} />
                  <Choice active={form.systemAge === "a2"} title="5 to 9 years" onClick={() => setValue("systemAge", "a2")} />
                  <Choice active={form.systemAge === "a3"} title="10 to 14 years" onClick={() => setValue("systemAge", "a3")} />
                  <Choice active={form.systemAge === "a4"} title="15+ years" onClick={() => setValue("systemAge", "a4")} />
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
                  <button style={{ ...ghostBtn, flex: 1 }} onClick={back}>Back</button>
                  <button style={{ ...primaryBtn, flex: 1, opacity: form.systemAge ? 1 : 0.55 }} onClick={() => form.systemAge && next()}>Continue</button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <h3 style={{ fontSize: 24, marginTop: 0, marginBottom: 8 }}>Would financing help?</h3>
                <p style={{ color: "#aab7cf", marginTop: 0, marginBottom: 18 }}>This helps guide next-step options.</p>
                <div style={{ display: "grid", gap: 12 }}>
                  <Choice active={form.financing === "yes"} title="Yes, I want payment options" onClick={() => setValue("financing", "yes")} />
                  <Choice active={form.financing === "no"} title="No, cash or card is fine" onClick={() => setValue("financing", "no")} />
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
                  <button style={{ ...ghostBtn, flex: 1 }} onClick={back}>Back</button>
                  <button style={{ ...primaryBtn, flex: 1, opacity: form.financing ? 1 : 0.55 }} onClick={() => form.financing && next()}>Continue</button>
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <h3 style={{ fontSize: 24, marginTop: 0, marginBottom: 8 }}>Where should we send your estimate?</h3>
                <p style={{ color: "#aab7cf", marginTop: 0, marginBottom: 18 }}>Enter your info and we will show your range right away.</p>
                <div style={{ display: "grid", gap: 12 }}>
                  <input value={form.name} onChange={(e) => setValue("name", e.target.value)} placeholder="Full name" style={inputStyle} />
                  {errors.name ? <div style={{ color: "#fecaca", fontSize: 13, marginTop: -4 }}>{errors.name}</div> : null}
                  <input value={form.phone} onChange={(e) => setValue("phone", e.target.value)} placeholder="Phone number" style={inputStyle} />
                  {errors.phone ? <div style={{ color: "#fecaca", fontSize: 13, marginTop: -4 }}>{errors.phone}</div> : null}
                  <input value={form.email} onChange={(e) => setValue("email", e.target.value)} placeholder="Email address" style={inputStyle} />
                  {errors.email ? <div style={{ color: "#fecaca", fontSize: 13, marginTop: -4 }}>{errors.email}</div> : null}
                  <textarea value={form.notes} onChange={(e) => setValue("notes", e.target.value)} placeholder="Anything we should know? Optional." rows={4} style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
                  <button style={{ ...ghostBtn, flex: 1 }} onClick={back}>Back</button>
                  <button style={{ ...primaryBtn, flex: 1 }} onClick={validateContact}>Show My Estimate</button>
                </div>
              </div>
            )}

            {step === 7 && (
              <div>
                <h3 style={{ fontSize: 24, marginTop: 0, marginBottom: 8 }}>Your instant estimate range</h3>
                <p style={{ color: "#aab7cf", marginTop: 0, marginBottom: 18 }}>This is a realistic budget starting point based on the answers you gave.</p>

                <div
                  style={{
                    padding: 20,
                    borderRadius: 22,
                    background: "linear-gradient(180deg, rgba(34,197,94,.12), rgba(59,130,246,.12))",
                    border: "1px solid rgba(255,255,255,.12)",
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "8px 12px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: ".7px",
                      background: "rgba(255,255,255,.12)",
                      marginBottom: 12,
                    }}
                  >
                    Ballpark installed price
                  </div>
                  <div style={{ fontSize: "clamp(36px, 6vw, 52px)", fontWeight: 900, lineHeight: 1, letterSpacing: -1.2 }}>{estimate}</div>
                  <p style={{ marginBottom: 0, color: "#e5eefb", lineHeight: 1.5 }}>
                    Final price depends on equipment match, code needs, duct or plenum changes, electrical, drain work, line set condition, and site details.
                  </p>
                </div>

                <div style={{ display: "grid", gap: 10, marginBottom: 16 }}>
                  {[
                    "Best next step: call or text now to tighten this into real options.",
                    "This page is for replacement and new install pricing only, not repair/service visits.",
                    `Fast follow-up available at ${displayPhone}.`,
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: "12px 14px",
                        borderRadius: 14,
                        background: "rgba(255,255,255,.05)",
                        border: "1px solid rgba(255,255,255,.08)",
                        color: "#eef4ff",
                        fontSize: 14,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href={`tel:${phoneNumber}`} style={{ ...greenBtn, flex: 1, minWidth: 160, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    Call Now
                  </a>
                  <a href={`sms:${phoneNumber}`} style={{ ...primaryBtn, flex: 1, minWidth: 160, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    Text Now
                  </a>
                </div>

                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                  <button
                    style={{ ...ghostBtn, width: "100%" }}
                    onClick={() => {
                      setForm({ zip: "", systemType: "", homeSize: "", systemAge: "", financing: "", name: "", phone: "", email: "", notes: "" });
                      setErrors({});
                      setStep(1);
                    }}
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 18 }}>
          {[
            ["📞", "Real human follow-up", "After the instant range, the next step is a real conversation about exact options and timing."],
            ["🧰", "Built for installs", "This page is focused on replacement leads, not repair traffic, so the message stays tighter."],
            ["🚀", "Faster buyer momentum", "People get a useful number before talking, which reduces friction and warms the lead up."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              style={{
                padding: 22,
                borderRadius: 22,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
                boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(59,130,246,.15)", display: "grid", placeItems: "center", marginBottom: 14 }}>{icon}</div>
              <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>{title}</div>
              <div style={{ color: "#aab7cf", lineHeight: 1.6 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          left: 12,
          right: 12,
          bottom: 12,
          zIndex: 30,
          display: "flex",
          gap: 10,
          padding: 10,
          borderRadius: 20,
          background: "rgba(8,16,29,.88)",
          border: "1px solid rgba(255,255,255,.1)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 18px 40px rgba(0,0,0,.28)",
        }}
      >
        <a href={`tel:${phoneNumber}`} style={{ ...greenBtn, flex: 1, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "12px 10px" }}>
          Call
        </a>
        <a href="#estimate-tool" style={{ ...primaryBtn, flex: 1, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "12px 10px" }}>
          Estimate
        </a>
        <a href={`sms:${phoneNumber}`} style={{ ...ghostBtn, flex: 1, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 52, padding: "12px 10px" }}>
          Text
        </a>
      </div>
    </div>
  );
}
