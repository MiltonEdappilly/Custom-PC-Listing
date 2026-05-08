import { products } from "@/lib/products";
import ProductCard from "@/app/components/ProductCard";

const GPU_FILTERS = [
  "All",
  "RTX 5080",
  "RTX 5070 Ti",
  "RTX 5070",
  "RTX 5060 Ti",
  "RTX 5060",
  "RTX 4080 Super",
  "RTX 4070 Ti Super",
  "RTX 4070 Super",
  "RTX 4060 Ti",
  "RTX 4060",
  "RTX 5050",
  "RTX 3050",
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "28px 24px" }}>

      {/* Hero banner */}
      <div style={{
        background: "linear-gradient(135deg, #F05A00 0%, #c44800 100%)",
        borderRadius: "12px",
        padding: "36px 48px",
        marginBottom: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* subtle pattern overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <div style={{
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(4px)",
              color: "#fff",
              fontWeight: 800,
              fontSize: "12px",
              padding: "3px 10px",
              borderRadius: "4px",
              letterSpacing: "0.1em",
            }}>
              AZTECH
            </div>
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>× JUMBO ELECTRONICS UAE</span>
          </div>
          <h1 style={{ fontSize: "34px", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            CUSTOM GAMING DESKTOPS
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px", marginTop: "8px", maxWidth: "480px" }}>
            Pre-built by UAE gamers, for gamers. Every machine tested, tuned, and ready to dominate from day one.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "18px" }}>
            {["Free Delivery 200+ AED", "0% Interest Plan", "1 Year Warranty", "Ships Ready"].map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "12px", fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
          <div style={{
            fontSize: "80px", fontWeight: 900, color: "rgba(255,255,255,0.1)",
            lineHeight: 1, letterSpacing: "-0.05em", userSelect: "none",
          }}>
            AZTECH
          </div>
        </div>
      </div>

      {/* Filter + sort bar */}
      <div style={{
        background: "#fff", border: "1px solid #e5e5e5", borderRadius: "8px",
        padding: "14px 20px", marginBottom: "24px",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", flexWrap: "wrap", gap: "12px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ color: "#888", fontSize: "13px", fontWeight: 500, whiteSpace: "nowrap" }}>
            <strong style={{ color: "#111" }}>{products.length}</strong> Products
          </span>
          <div style={{ width: "1px", height: "16px", background: "#e5e5e5" }} />
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {GPU_FILTERS.slice(0, 8).map((f, i) => (
              <span key={f} style={{
                background: i === 0 ? "#F05A00" : "#f5f5f5",
                color: i === 0 ? "#fff" : "#555",
                border: `1px solid ${i === 0 ? "#F05A00" : "#e5e5e5"}`,
                borderRadius: "20px", padding: "4px 12px",
                fontSize: "12px", cursor: "pointer",
                fontWeight: i === 0 ? 600 : 400,
                whiteSpace: "nowrap",
              }}>
                {f}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "#aaa", fontSize: "12px" }}>Sort by:</span>
          <span style={{
            background: "#f5f5f5", border: "1px solid #e5e5e5",
            borderRadius: "6px", color: "#333",
            padding: "5px 14px", fontSize: "12px", cursor: "pointer",
          }}>
            My Selection ▾
          </span>
        </div>
      </div>

      {/* Product Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "18px",
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* About section */}
      <div style={{
        marginTop: "56px",
        padding: "32px",
        background: "#fff",
        borderRadius: "10px",
        border: "1px solid #e5e5e5",
      }}>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111", marginBottom: "12px" }}>
          About AZTECH Computers
        </h2>
        <p style={{ color: "#777", lineHeight: "1.75", fontSize: "14px", maxWidth: "800px", margin: 0 }}>
          AZTECH is a UAE gaming brand built by gamers, for the GCC community. Every pre-built system is individually
          assembled with precision, stress-tested, and shipped ready to game. Components are sourced from ASUS, NVIDIA,
          AMD, Lian Li, DeepCool, and more — ensuring a machine that performs as good as it looks. Available exclusively
          through Jumbo Electronics UAE with a full 1-year warranty and 0% interest financing.
        </p>
      </div>
    </main>
  );
}
