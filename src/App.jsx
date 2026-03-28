export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.5",
      }}
    >
      <h1>DFW HVAC Quote</h1>
      <p>
        Serving homeowners across DFW with fast, professional HVAC replacement quotes.
      </p>

      <h3>Contact</h3>
      <p>
        Phone: <a href="tel:6822074486">682-207-4486</a>
      </p>
      <p>
        Email: <a href="mailto:9xleads@gmail.com">9xleads@gmail.com</a>
      </p>
      <p>Serving approved DFW ZIP codes</p>

      <hr style={{ margin: "20px 0" }} />

      <h2>Request Your Free HVAC Quote</h2>
      <p>No pressure. Just straightforward pricing and options.</p>

      <form
        action="https://formspree.io/f/mwvwvzzv"
        method="POST"
        style={{ marginTop: "20px" }}
      >
        <input type="hidden" name="_subject" value="New HVAC Lead Submission" />
        <input type="hidden" name="_replyto" value="9xleads@gmail.com" />

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="name">Full Name</label>
          <br />
          <input
            id="name"
            name="name"
            type="text"
            required
            style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="address">Address</label>
          <br />
          <input
            id="address"
            name="address"
            type="text"
            required
            style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            required
            style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="zip">ZIP Code</label>
          <br />
          <input
            id="zip"
            name="zip"
            type="text"
            required
            style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="message">What issues are you having?</label>
          <br />
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "12px",
            width: "100%",
            backgroundColor: "#c62828",
            color: "white",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit My Information
        </button>
      </form>
    </div>
  );
}
