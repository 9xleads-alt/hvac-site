import { useMemo, useState } from "react";

const phoneNumber = "6822074486";
const displayPhone = "682-207-4486";
const formspreeUrl = "https://formspree.io/f/mwvwvzzv";

function money(n) {
  return `$${n.toLocaleString()}`;
}

export default function App() {
  const [systemType, setSystemType] = useState("gas");
  const [homeSize, setHomeSize] = useState("s3");
  const [systemAge, setSystemAge] = useState("a3");
  const [financing, setFinancing] = useState("no");

  const estimate = useMemo(() => {
    let low = 8000;
    let high = 10000;

    const systemAdj = {
      gas: [0, 300],
      heatpump: [200, 500],
      electric: [0, 250],
      unsure: [100, 400],
    };

    const sizeAdj = {
      s1: [0, 0],
      s2: [100, 200],
      s3: [200, 300],
      s4: [300, 500],
      s5: [400, 700],
    };

    const ageAdj = {
      a1: [0, 0],
      a2: [50, 100],
      a3: [100, 200],
      a4: [150, 300],
    };

    const financeAdj = {
      yes: [0, 150],
      no: [0, 0],
    };

    const a = systemAdj[systemType] || [0, 0];
    const b = sizeAdj[homeSize] || [0, 0];
    const c = ageAdj[systemAge] || [0, 0];
    const d = financeAdj[financing] || [0, 0];

    low += a[0] + b[0] + c[0] + d[0];
    high += a[1] + b[1] + c[1] + d[1];

    low = Math.round(low / 100) * 100;
    high = Math.round(high / 100) * 100;

    low = Math.max(8000, low);
    high = Math.min(10000, high);

    return `${money(low)} - ${money(high)}`;
  }, [systemType, homeSize, systemAge, financing]);

  const sectionCard = {
    background: "white",
    borderRadius: "22px",
    border: "1px solid #dbe7f5",
    boxShadow: "0 16px 34px rgba(15,23,42,0.08)",
    padding: "18px",
    marginBottom: "14px",
  };

  const choiceStyle = (active, bg) => ({
    width: "100%",
    padding: "14px 16px",
    borderRadius: "16px",
    border: active ? `2px solid ${bg}` : "1px solid #dbe3ef",
    background: active ? bg : "white",
    color: active ? "white" : "#0f172a",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "left",
    boxShadow: active
      ? "0 14px 26px rgba(0,0,0,0.16)"
      : "0 8px 18px rgba(15,23,42,0.05)",
    transition: "all .15s ease",
  });

  const ctaStyle = {
    textDecoration: "none",
    textAlign: "center",
    padding: "16px 14px",
    borderRadius: "16px",
    fontWeight: "bold",
    fontSize: "18px",
    display: "block",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(180deg, #eef4fb 0%, #dbeafe 100%)",
        color: "#0f172a",
        minHeight: "100vh",
        margin: 0,
      }}
    >
      <div
        id="top"
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "14px 14px 100px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(180deg, #071224 0%, #123c9b 100%)",
            borderRadius: "26px",
            padding: "18px 16px 22px",
            color: "white",
            boxShadow: "0 22px 46px rgba(15,23,42,0.20)",
            marginBottom: "14px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#ef4444",
              color: "white",
              padding: "8px 14px",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "13px",
              marginBottom: "12px",
            }}
          >
            DFW HVAC Quote
          </div>

          <h1
            style={{
              fontSize: "36px",
              lineHeight: "1.05",
              margin: "0 0 10px 0",
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            Get Your AC Replacement Price in 60 Seconds
          </h1>

          <p
            style={{
              margin: "0 0 14px 0",
              color: "#dbeafe",
              fontSize: "17px",
              textAlign: "center",
            }}
          >
            Call or text now and get a real price fast — no in-home visit needed to start.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "14px",
            }}
          >
            <a
              href={`tel:${phoneNumber}`}
              style={{
                ...ctaStyle,
                background: "linear-gradient(180deg, #ef4444 0%, #dc2626 100%)",
                color: "white",
                boxShadow: "0 12px 24px rgba(220,38,38,0.28)",
              }}
            >
              Call Now
            </a>

            <a
              href={`sms:${phoneNumber}`}
              style={{
                ...ctaStyle,
                background: "white",
                color: "#123c9b",
                border: "2px solid #bfdbfe",
              }}
            >
              Text Now
            </a>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {["Replacement only", "Fast response", "Ballpark pricing"].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "rgba(255,255,255,0.14)",
                  padding: "8px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={sectionCard}>
          <div
            style={{
              background: "linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)",
              border: "1px solid #93c5fd",
              borderRadius: "20px",
              padding: "18px",
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#1e3a8a",
                fontWeight: "bold",
                marginBottom: "6px",
                textTransform: "uppercase",
              }}
            >
              Ballpark Installed Range
            </div>
            <div
              style={{
                fontSize: "40px",
                fontWeight: "800",
                color: "#0f172a",
              }}
            >
              {estimate}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#475569",
                marginTop: "6px",
              }}
            >
              Final price depends on equipment, load, ducting, electrical, and install conditions.
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#fff1f2",
              border: "1px solid #fecdd3",
              color: "#be123c",
              borderRadius: "14px",
              padding: "12px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Want exact pricing faster? Call or text {displayPhone}
          </div>
        </div>

        <div style={sectionCard}>
          <h2
            style={{
              marginTop: 0,
              marginBottom: "12px",
              fontSize: "26px",
              textAlign: "center",
            }}
          >
            Pick Your Replacement Type
          </h2>

          <div style={{ display: "grid", gap: "10px", marginBottom: "14px" }}>
            <button
              type="button"
              style={choiceStyle(systemType === "gas", "#0f172a")}
              onClick={() => setSystemType("gas")}
            >
              Gas furnace + AC replacement
            </button>

            <button
              type="button"
              style={choiceStyle(systemType === "heatpump", "#1d4ed8")}
              onClick={() => setSystemType("heatpump")}
            >
              Electric heat pump replacement
            </button>

            <button
              type="button"
              style={choiceStyle(systemType === "electric", "#7c3aed")}
              onClick={() => setSystemType("electric")}
            >
              Straight cool electric replacement
            </button>

            <button
              type="button"
              style={choiceStyle(systemType === "unsure", "#ef4444")}
              onClick={() => setSystemType("unsure")}
            >
              Not sure, help me choose
            </button>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              Approximate Home Size
            </label>
            <select
              value={homeSize}
              onChange={(e) => setHomeSize(e.target.value)}
              style={{
                width: "100%",
                padding: "13px 14px",
                boxSizing: "border-box",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                fontSize: "16px",
                backgroundColor: "white",
              }}
            >
              <option value="s1">Under 1,200 sq ft</option>
              <option value="s2">1,200 - 1,800 sq ft</option>
              <option value="s3">1,800 - 2,400 sq ft</option>
              <option value="s4">2,400 - 3,000 sq ft</option>
              <option value="s5">Over 3,000 sq ft</option>
            </select>
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              Age of Current System
            </label>
            <select
              value={systemAge}
              onChange={(e) => setSystemAge(e.target.value)}
              style={{
                width: "100%",
                padding: "13px 14px",
                boxSizing: "border-box",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                fontSize: "16px",
                backgroundColor: "white",
              }}
            >
              <option value="a1">Under 8 years</option>
              <option value="a2">8 - 12 years</option>
              <option value="a3">12 - 16 years</option>
              <option value="a4">16+ years</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              Financing
            </label>
            <div style={{ display: "grid", gap: "8px" }}>
              <button
                type="button"
                style={choiceStyle(financing === "yes", "#059669")}
                onClick={() => setFinancing("yes")}
              >
                Yes, show financing options
              </button>

              <button
                type="button"
                style={choiceStyle(financing === "no", "#475569")}
                onClick={() => setFinancing("no")}
              >
                No financing needed
              </button>
            </div>
          </div>
        </div>

        <form
          action={formspreeUrl}
          method="POST"
          target="_blank"
          style={sectionCard}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "12px",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            Send My Info Now
          </h3>

          <input type="hidden" name="_subject" value="New HVAC Lead Submission" />
          <input type="hidden" name="systemType" value={systemType} />
          <input type="hidden" name="homeSize" value={homeSize} />
          <input type="hidden" name="systemAge" value={systemAge} />
          <input type="hidden" name="financing" value={financing} />
          <input type="hidden" name="ballparkEstimate" value={estimate} />

          <div style={{ marginBottom: "10px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "6px",
              }}
            >
              ZIP Code
            </label>
            <input
              name="zip"
              required
              placeholder="76179"
              style={{
                width: "100%",
                padding: "13px 14px",
                boxSizing: "border-box",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "6px",
              }}
            >
              Full Name
            </label>
            <input
              name="name"
              required
              style={{
                width: "100%",
                padding: "13px 14px",
                boxSizing: "border-box",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "6px",
              }}
            >
              Phone
            </label>
            <input
              name="phone"
              required
              style={{
                width: "100%",
                padding: "13px 14px",
                boxSizing: "border-box",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "6px",
              }}
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              style={{
                width: "100%",
                padding: "13px 14px",
                boxSizing: "border-box",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                fontSize: "16px",
              }}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                marginBottom: "6px",
              }}
            >
              Notes
            </label>
            <textarea
              name="notes"
              rows="3"
              placeholder="Anything you want us to know?"
              style={{
                width: "100%",
                padding: "13px 14px",
                boxSizing: "border-box",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                fontSize: "16px",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              background: "linear-gradient(180deg, #ef4444 0%, #dc2626 100%)",
              color: "white",
              border: "none",
              padding: "16px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
              boxShadow: "0 10px 22px rgba(220,38,38,0.25)",
            }}
          >
            Send My Info Now
          </button>
        </form>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          borderTop: "1px solid #dbe3ef",
          boxShadow: "0 -8px 18px rgba(15,23,42,0.08)",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "8px",
          zIndex: 999,
        }}
      >
        <a
          href={`tel:${phoneNumber}`}
          style={{
            textDecoration: "none",
            textAlign: "center",
            backgroundColor: "#0f172a",
            color: "white",
            padding: "12px 8px",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Call
        </a>

        <a
          href="#top"
          style={{
            textDecoration: "none",
            textAlign: "center",
            backgroundColor: "#ef4444",
            color: "white",
            padding: "12px 8px",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Price
        </a>

        <a
          href={`sms:${phoneNumber}`}
          style={{
            textDecoration: "none",
            textAlign: "center",
            backgroundColor: "#1d4ed8",
            color: "white",
            padding: "12px 8px",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Text
        </a>
      </div>
    </div>
  );
}
