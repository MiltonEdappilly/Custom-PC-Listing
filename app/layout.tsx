import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AZTECH Computers — Custom Gaming PCs | Jumbo Electronics UAE",
  description:
    "Shop AZTECH custom pre-built gaming desktops at Jumbo Electronics UAE. RTX 5080, RTX 5070 Ti, RTX 4080 SUPER and more. Free delivery over 200 AED.",
};

/** Jumbo Electronics UAE brand SVG logo (wordmark) */
function JumboLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size * 3.6}
      height={size}
      viewBox="0 0 144 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Jumbo Electronics"
    >
      {/* Orange rectangle background */}
      <rect width="144" height="40" rx="4" fill="#F05A00" />
      {/* "jumbo" wordmark in white */}
      <text
        x="72"
        y="28"
        textAnchor="middle"
        fontFamily="'Inter', Arial, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="1"
        fill="#ffffff"
      >
        jumbo
      </text>
    </svg>
  );
}

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
      <body style={{ margin: 0, padding: 0, background: "#f5f5f5", color: "#111" }}>

        {/* Top announcement bar — Jumbo orange */}
        <div style={{
          background: "#F05A00",
          color: "#fff",
          textAlign: "center",
          padding: "8px 24px",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.02em",
        }}>
          Free Delivery over AED 200 &nbsp;·&nbsp; 0% Interest Plan &nbsp;·&nbsp; 1 Year Warranty on All AZTECH PCs
        </div>

        {/* Header */}
        <header style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>

            {/* Main nav row */}
            <div style={{ display: "flex", alignItems: "center", gap: "32px", padding: "12px 0" }}>
              {/* Jumbo Logo */}
              <a href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
                <JumboLogo size={32} />
              </a>

              <nav style={{ display: "flex", gap: "28px", flex: 1 }}>
                {["Gaming", "Mobiles", "Laptops", "TVs & Audio", "Appliances"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{ color: "#333", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Search */}
              <div style={{
                display: "flex", alignItems: "center",
                background: "#f5f5f5", border: "1px solid #e0e0e0",
                borderRadius: "6px", padding: "8px 14px",
                gap: "8px", width: "220px",
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Search products..."
                  style={{ background: "none", border: "none", outline: "none", color: "#333", fontSize: "13px", width: "100%" }}
                />
              </div>

              {/* Icons */}
              <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
                <button style={{ background: "none", border: "none", cursor: "pointer", color: "#555" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </button>
                <button style={{ background: "none", border: "none", cursor: "pointer", color: "#555", position: "relative" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span style={{
                    position: "absolute", top: "-6px", right: "-6px",
                    background: "#F05A00", color: "#fff", borderRadius: "50%",
                    width: "16px", height: "16px", fontSize: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700,
                  }}>0</span>
                </button>
              </div>
            </div>

            {/* Breadcrumb */}
            <div style={{ padding: "7px 0", fontSize: "12px", color: "#999", borderTop: "1px solid #f0f0f0" }}>
              <a href="/" style={{ color: "#999", textDecoration: "none" }}>Home</a>
              <span style={{ margin: "0 6px" }}>›</span>
              <a href="#" style={{ color: "#999", textDecoration: "none" }}>Gaming</a>
              <span style={{ margin: "0 6px" }}>›</span>
              <a href="#" style={{ color: "#999", textDecoration: "none" }}>Gaming Desktops</a>
              <span style={{ margin: "0 6px" }}>›</span>
              <span style={{ color: "#333" }}>AZTECH Custom PCs</span>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer style={{ background: "#ffffff", borderTop: "1px solid #e5e5e5", marginTop: "80px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "48px 24px" }}>

            {/* Footer columns */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", marginBottom: "40px" }}>
              {[
                { title: "SHOP", links: ["Gaming", "Mobiles", "Laptops", "TVs & Audio", "Appliances"] },
                { title: "CUSTOMER CARE", links: ["Contact Us", "Track Your Order", "Returns & Exchanges", "FAQs", "Store Locator"] },
                { title: "ABOUT US", links: ["About Jumbo Electronics", "AZTECH Computers", "Careers", "Press & Media"] },
                { title: "BENEFITS", links: ["0% Interest Plan", "Free Delivery over 200 AED", "1 Year Warranty", "Easy Returns"] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 style={{ color: "#111", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", marginBottom: "14px" }}>
                    {col.title}
                  </h4>
                  {col.links.map((link) => (
                    <a key={link} href="#" style={{ display: "block", color: "#888", textDecoration: "none", fontSize: "13px", marginBottom: "9px" }}>
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <JumboLogo size={26} />
              <p style={{ color: "#ccc", fontSize: "12px", margin: 0 }}>
                © 2025 Jumbo Electronics UAE. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
