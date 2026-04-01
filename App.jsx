import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [estimate, setEstimate] = useState("");

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const select = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const calculate = () => {
    let low = 7000;
    let high = 10000;

    if (data.homeSize === "large") {
      low += 3000;
      high += 5000;
    }

    if (data.systemType === "full") {
      low += 2000;
      high += 4000;
    }

    const result = `$${low.toLocaleString()} - $${high.toLocaleString()}`;
    setEstimate(result);
    setStep(7);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>DFW HVAC Instant Estimate</h1>

      {step === 1 && (
        <div>
          <h3>Enter Zip Code</h3>
          <input
            placeholder="76179"
            onChange={(e) => select("zip", e.target.value)}
          />
          <button onClick={next}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>System Type</h3>
          <button onClick={() => { select("systemType", "full"); next(); }}>
            Full System
          </button>
          <button onClick={() => { select("systemType", "ac"); next(); }}>
            AC Only
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Home Size</h3>
          <button onClick={() => { select("homeSize", "small"); next(); }}>
            Under 2000 sq ft
          </button>
          <button onClick={() => { select("homeSize", "large"); next(); }}>
            Over 2000 sq ft
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3>System Age</h3>
          <button onClick={() => next()}>Under 10 years</button>
          <button onClick={() => next()}>10+ years</button>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3>Financing Needed?</h3>
          <button onClick={() => next()}>Yes</button>
          <button onClick={() => next()}>No</button>
        </div>
      )}

      {step === 6 && (
        <div>
          <h3>Your Info</h3>
          <input placeholder="Name" />
          <input placeholder="Phone" />
          <input placeholder="Email" />
          <button onClick={calculate}>Get Estimate</button>
        </div>
      )}

      {step === 7 && (
        <div>
          <h2>Your Estimate:</h2>
          <h1>{estimate}</h1>
          <p>Call or text now to lock in exact pricing.</p>
          <a href="tel:9603517282">Call Now</a>
        </div>
      )}
    </div>
  );
}
