export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#eef3f9",
        color: "#0f172a",
        margin: 0,
        padding: 0,
        lineHeight: "1.4",
      }}
    >
      <section
        style={{
          background: "linear-gradient(180deg, #081225 0%, #123a9b 100%)",
          padding: "16px 14px 28px",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                padding: "8px 14px",
                borderRadius: "999px",
                fontWeight: "bold",
                fontSize: "13px",
                letterSpacing: "0.2px",
              }}
            >
              DFW HVAC Quote
            </div>
          </div>

          <h1
            style={{
              color: "white",
              fontSize: "36px",
              lineHeight: "1.05",
              margin: "0 0 10px 0",
              textAlign: "center",
              fontWeight: "800",
            }}
          >
            Need a New AC System?
            <br />
            Get a Fast DFW Quote.
          </h1>

          <p
            style={{
              color: "#dbeafe",
              fontSize: "18px",
              textAlign: "center",
              margin: "0 0 14px 0",
            }}
          >
            New AC and HVAC replacement quotes for DFW homeowners. No pressure.
            Fast response.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            {[
              "Replacement quotes only",
              "Same-day response",
              "Serving DFW homeowners",
            ].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  color: "white",
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

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
              border: "1px solid #dbeafe",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  padding: "7px 12px",
                  borderRadius: "999px",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                Free Quote Request
              </div>
            </div>

            <h2
              style={{
                textAlign: "center",
                fontSize: "34px",
                margin: "0 0 6px 0",
                fontWeight: "800",
              }}
            >
              Start Your Quote
            </h2>

            <p
              style={{
                textAlign: "center",
                color: "#475569",
                fontSize: "15px",
                margin: "0 0 14px 0",
              }}
            >
              Fill this out and we’ll reach back out fast.
            </p>

            <div
              style={{
                backgroundColor: "#fff1f2",
                border: "1px solid #fecdd3",
                color: "#be123c",
                borderRadius: "12px",
                padding: "12px",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: "14px",
              }}
            >
              Limited availability today — request your quote now
            </div>

            <form
              action="https://formspree.io/f/mwvwvzzv"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New HVAC Lead Submission" />

              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  style={{
                    width: "100%",
                    padding: "13px 14px",
                    boxSizing: "border-box",
                    borderRadius: "12px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  style={{
                    width: "100%",
                    padding: "13px 14px",
                    boxSizing: "border-box",
                    borderRadius: "12px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
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
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="zip"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  ZIP Code
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  required
                  style={{
                    width: "100%",
                    padding: "13px 14px",
                    boxSizing: "border-box",
                    borderRadius: "12px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    fontWeight: "bold",
                    fontSize: "14px",
                    marginBottom: "5px",
                  }}
                >
                  What do you need help with?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Old system, high repair cost, poor cooling, looking for replacement quote, etc."
                  style={{
                    width: "100%",
                    padding: "13px 14px",
                    boxSizing: "border-box",
                    borderRadius: "12px",
                    border: "1px solid #cbd5e1",
                    fontSize: "16px",
                    outline: "none",
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
                  marginTop: "6px",
                }}
              >
                Get My Free Quote
              </button>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "12px",
                  fontSize: "14px",
                  color: "#334155",
                  fontWeight: "bold",
                }}
              >
                Or call now{" "}
                <a
                  href="tel:6822074486"
                  style={{
                    color: "#1d4ed8",
                    textDecoration: "none",
                  }}
                >
                  682-207-4486
                </a>
              </div>

              <p
                style={{
                  fontSize: "11px",
                  color: "#64748b",
                  marginTop: "10px",
                  marginBottom: 0,
                  textAlign: "center",
                }}
              >
                By submitting this form, you agree to be contacted regarding your
                quote request.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "16px 14px 10px" }}>
        <div
          style={{
            display: "grid",
            gap: "12px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "18px",
              boxShadow: "0 10px 22px rgba(15,23,42,0.06)",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "8px",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              Why homeowners submit here
            </h3>
            <div
              style={{
                color: "#475569",
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              Fast quote process, local DFW focus, and straightforward conversation
              about replacement options.
            </div>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "18px",
              boxShadow: "0 10px 22px rgba(15,23,42,0.06)",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3
              style={{
                marginTop: 0,
                marginBottom: "10px",
                fontSize: "22px",
                textAlign: "center",
              }}
            >
              Best fit for
            </h3>

            <div
              style={{
                display: "grid",
                gap: "8px",
              }}
            >
              {[
                "Old AC systems",
                "High repair costs",
                "Poor cooling or airflow",
                "Replacement pricing requests",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "10px",
                    padding: "10px 12px",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#334155",
                    fontSize: "15px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "18px 14px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            backgroundColor: "#081225",
            color: "white",
            borderRadius: "18px",
            padding: "22px 18px",
            textAlign: "center",
            boxShadow: "0 14px 30px rgba(8,18,37,0.18)",
          }}
        >
          <h3 style={{ margin: "0 0 8px 0", fontSize: "28px" }}>
            Ready to talk about your options?
          </h3>
          <div style={{ color: "#d1d5db", marginBottom: "14px", fontSize: "15px" }}>
            Call now or submit your information for a fast quote.
          </div>

          <a
            href="tel:6822074486"
            style={{
              background: "linear-gradient(180deg, #ef4444 0%, #dc2626 100%)",
              color: "white",
              textDecoration: "none",
              padding: "14px 22px",
              borderRadius: "12px",
              fontWeight: "bold",
              display: "inline-block",
              boxShadow: "0 10px 22px rgba(220,38,38,0.25)",
            }}
          >
            Call 682-207-4486
          </a>
        </div>
      </section>
    </div>
  );
}
