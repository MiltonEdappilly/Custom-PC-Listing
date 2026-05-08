import { products } from "@/lib/products";
import ProductCard from "@/app/components/ProductCard";

export default function HomePage() {
  return (
    <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 24px" }}>
      {/* ANIGMA brand banner */}
      <div style={{
        background: "linear-gradient(135deg, #0d0d0d 0%, #1a0000 50%, #0d0d0d 100%)",
        border: "1px solid #2a0000",
        borderRadius: "12px",
        padding: "40px 48px",
        marginBottom: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          position: "absolute",
          top: "-60px",
          left: "40%",
          width: "400px",
          height: "200px",
          background: "radial-gradient(ellipse, rgba(228,0,43,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <div style={{
              background: "#e4002b",
              color: "#fff",
              fontWeight: 900,
              fontSize: "13px",
              padding: "4px 10px",
              letterSpacing: "0.08em",
            }}>
              ANIGMA
            </div>
            <span style={{ color: "#666", fontSize: "13px" }}>× VIRGIN MEGASTORE UAE</span>
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            CUSTOM GAMING DESKTOPS
          </h1>
          <p style={{ color: "#888", fontSize: "15px", marginTop: "10px", maxWidth: "500px" }}>
            Pre-built by Emirati gamers, for gamers. Every machine tested, tuned, and ready to dominate.
          </p>
          <div style={{ display: "flex", gap: "24px", marginTop: "20px", flexWrap: "wrap" }}>
            {["Free Delivery 200+ AED", "0% Interest Plan", "1 Year Warranty", "Ready to Ship"].map((benefit) => (
              <div key={benefit} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "6px", height: "6px", background: "#e4002b", borderRadius: "50%", flexShrink: 0 }} />
                <span style={{ color: "#aaa", fontSize: "12px" }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1, textAlign: "right" }}>
          <div style={{ fontSize: "72px", fontWeight: 900, color: "rgba(228,0,43,0.08)", lineHeight: 1, letterSpacing: "-0.05em", userSelect: "none" }}>
            ANIGMA
          </div>
        </div>
      </div>

      {/* Filters row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <span style={{ color: "#888", fontSize: "14px" }}>
            <strong style={{ color: "#fff" }}>{products.length}</strong> Products
          </span>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["All", "RTX 5080", "RTX 5070 Ti", "RTX 4080 SUPER", "RTX 4070 Ti SUPER", "RTX 4070 Super", "RTX 5060 Ti"].map((f, i) => (
              <span
                key={f}
                style={{
                  background: i === 0 ? "#e4002b" : "#1a1a1a",
                  color: i === 0 ? "#fff" : "#888",
                  border: `1px solid ${i === 0 ? "#e4002b" : "#2a2a2a"}`,
                  borderRadius: "20px",
                  padding: "5px 14px",
                  fontSize: "12px",
                  cursor: "pointer",
                  fontWeight: i === 0 ? 600 : 400,
                  whiteSpace: "nowrap",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "#666", fontSize: "13px" }}>Sort by:</span>
          <span style={{
            background: "#1a1a1a",
            border: "1px solid #2a2a2a",
            borderRadius: "6px",
            color: "#fff",
            padding: "6px 16px",
            fontSize: "13px",
          }}>
            My Selection ▾
          </span>
        </div>
      </div>

      {/* Product Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "20px",
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Bottom info */}
      <div style={{
        marginTop: "60px",
        padding: "32px",
        background: "#111",
        borderRadius: "12px",
        border: "1px solid #1e1e1e",
      }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
          About ANIGMA Computers
        </h2>
        <p style={{ color: "#888", lineHeight: "1.7", fontSize: "14px", maxWidth: "800px" }}>
          ANIGMA is an Emirati gaming brand built by gamers, for the GCC community. Every pre-built system is assembled with precision,
          stress-tested, and shipped ready to game. With components sourced from ASUS, NVIDIA, AMD, Lian Li, DeepCool and more — you get
          a machine that performs as good as it looks. Sold exclusively through Virgin Megastore UAE with a full 1-year warranty
          and 0% interest financing options.
        </p>
      </div>
    </main>
  );
}
