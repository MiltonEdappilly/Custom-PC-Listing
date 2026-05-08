import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANIGMA Computers — Custom Gaming PCs | Virgin Megastore UAE",
  description:
    "Shop ANIGMA custom pre-built gaming desktops at Virgin Megastore UAE. RTX 5080, RTX 5070 Ti, RTX 4080 SUPER and more. Free delivery over 200 AED.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0a0a0a", color: "#ffffff" }}>
        {/* Header */}
        <header style={{ background: "#0d0d0d", borderBottom: "1px solid #1e1e1e", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1e1e1e", fontSize: "12px", color: "#888" }}>
              <span>Free Delivery over 200 AED &nbsp;|&nbsp; 0% Interest Plan &nbsp;|&nbsp; 1 Year Warranty</span>
              <span>UAE · English</span>
            </div>
            {/* Main nav */}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", padding: "16px 0" }}>
              {/* Logo */}
              <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                <div style={{
                  background: "#e4002b",
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: "20px",
                  padding: "6px 14px",
                  letterSpacing: "0.05em",
                  fontFamily: "Inter, sans-serif",
                }}>
                  VIRGIN
                </div>
                <span style={{ color: "#888", fontSize: "13px", fontWeight: 500 }}>megastore</span>
              </a>

              <nav style={{ display: "flex", gap: "24px", flex: 1 }}>
                {["Gaming", "Electronics", "Entertainment", "Lifestyle"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{
                      color: "#ccc",
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Search */}
              <div style={{
                display: "flex",
                alignItems: "center",
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: "6px",
                padding: "8px 14px",
                gap: "8px",
                width: "220px",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  style={{ background: "none", border: "none", outline: "none", color: "#fff", fontSize: "13px", width: "100%" }}
                />
              </div>

              {/* Icons */}
              <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                <button style={{ background: "none", border: "none", cursor: "pointer", color: "#ccc" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </button>
                <button style={{ background: "none", border: "none", cursor: "pointer", color: "#ccc", position: "relative" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span style={{
                    position: "absolute", top: "-6px", right: "-6px",
                    background: "#e4002b", color: "#fff", borderRadius: "50%",
                    width: "16px", height: "16px", fontSize: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700,
                  }}>0</span>
                </button>
              </div>
            </div>

            {/* Breadcrumb */}
            <div style={{ padding: "10px 0", fontSize: "12px", color: "#666", borderTop: "1px solid #1e1e1e" }}>
              <a href="/" style={{ color: "#888", textDecoration: "none" }}>Home</a>
              <span style={{ margin: "0 8px" }}>›</span>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>Gaming</a>
              <span style={{ margin: "0 8px" }}>›</span>
              <a href="#" style={{ color: "#888", textDecoration: "none" }}>PC Gaming Hardware & Accessories</a>
              <span style={{ margin: "0 8px" }}>›</span>
              <span style={{ color: "#ccc" }}>Gaming Desktops</span>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer style={{ background: "#0d0d0d", borderTop: "1px solid #1e1e1e", marginTop: "80px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "48px 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", marginBottom: "48px" }}>
              {[
                {
                  title: "SHOP",
                  links: ["Gaming", "Electronics", "Entertainment", "Lifestyle", "New Arrivals"],
                },
                {
                  title: "CUSTOMER CARE",
                  links: ["Contact Us", "Track Your Order", "Returns & Exchanges", "FAQs", "Store Locator"],
                },
                {
                  title: "ABOUT US",
                  links: ["About Virgin Megastore", "ANIGMA Computers", "Careers", "Press & Media"],
                },
                {
                  title: "BENEFITS",
                  links: ["0% Interest Plan", "Free Delivery over 200 AED", "1 Year Warranty", "Easy Returns"],
                },
              ].map((col) => (
                <div key={col.title}>
                  <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "12px", letterSpacing: "0.1em", marginBottom: "16px" }}>
                    {col.title}
                  </h4>
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{ display: "block", color: "#666", textDecoration: "none", fontSize: "13px", marginBottom: "10px" }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid #1e1e1e", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ background: "#e4002b", color: "#fff", fontWeight: 900, fontSize: "16px", padding: "4px 10px" }}>VIRGIN</div>
                <span style={{ color: "#666", fontSize: "12px" }}>megastore</span>
              </div>
              <p style={{ color: "#444", fontSize: "12px" }}>
                © 2025 Virgin Megastore UAE. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
