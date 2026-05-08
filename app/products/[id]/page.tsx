import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const product = getProductBySlug(id);
  if (!product) return {};
  return {
    title: `${product.shortName} | Virgin Megastore UAE`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductBySlug(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "32px 24px" }}>
      {/* Back link */}
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "#888",
          textDecoration: "none",
          fontSize: "13px",
          marginBottom: "32px",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Gaming Desktops
      </Link>

      {/* Product detail layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "64px" }}>
        {/* Left: Images */}
        <div>
          {/* Main image */}
          <div style={{
            background: "#0d0d0d",
            border: "1px solid #1e1e1e",
            borderRadius: "12px",
            overflow: "hidden",
            aspectRatio: "4/3",
            marginBottom: "16px",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.images[0]}
              alt={product.shortName}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Thumbnail row */}
          <div style={{ display: "flex", gap: "12px" }}>
            {product.images.map((img, i) => (
              <div
                key={i}
                style={{
                  background: "#0d0d0d",
                  border: `2px solid ${i === 0 ? "#e4002b" : "#1e1e1e"}`,
                  borderRadius: "8px",
                  overflow: "hidden",
                  width: "80px",
                  height: "60px",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`View ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product info */}
        <div>
          {/* Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            {product.badge && (
              <span style={{
                background: product.badge === "Sale" ? "#ff6b00" : "#e4002b",
                color: "#fff",
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "4px",
                letterSpacing: "0.06em",
              }}>
                {product.badge}
              </span>
            )}
            <span style={{
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              color: "#888",
              fontSize: "11px",
              padding: "3px 10px",
              borderRadius: "4px",
            }}>
              ANIGMA COMPUTERS
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "22px", fontWeight: 800, color: "#fff", lineHeight: 1.35, marginBottom: "16px" }}>
            {product.name}
          </h1>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <div style={{ display: "flex", gap: "3px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 24 24"
                  fill={star <= Math.round(product.rating) ? "#fbbf24" : "none"}
                  stroke="#fbbf24" strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{ color: "#fbbf24", fontWeight: 700, fontSize: "14px" }}>{product.rating}</span>
            <span style={{ color: "#666", fontSize: "13px" }}>({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div style={{ marginBottom: "28px", padding: "20px", background: "#0d0d0d", border: "1px solid #1e1e1e", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "6px" }}>
              <span style={{ fontSize: "32px", fontWeight: 900, color: "#fff" }}>
                AED {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: "18px", color: "#555", textDecoration: "line-through" }}>
                  AED {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <div style={{ color: "#ff6b00", fontWeight: 600, fontSize: "14px", marginBottom: "8px" }}>
                You save AED {(product.originalPrice - product.price).toLocaleString()}
              </div>
            )}
            <div style={{ color: "#666", fontSize: "13px" }}>
              or <strong style={{ color: "#aaa" }}>AED {Math.round(product.price / 12).toLocaleString()}/month</strong> with 0% Interest Plan
            </div>

            {/* Benefits */}
            <div style={{ display: "flex", gap: "20px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #1e1e1e" }}>
              {[
                { icon: "🚚", text: "Free Delivery" },
                { icon: "🛡️", text: "1 Year Warranty" },
                { icon: "↩️", text: "Easy Returns" },
              ].map((b) => (
                <div key={b.text} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "16px" }}>{b.icon}</span>
                  <span style={{ color: "#aaa", fontSize: "12px" }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
            <button style={{
              flex: 1,
              background: "#e4002b",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "16px",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.02em",
            }}>
              Add to Cart
            </button>
            <button style={{
              background: "#1a1a1a",
              border: "1px solid #2a2a2a",
              borderRadius: "8px",
              padding: "16px",
              cursor: "pointer",
              color: "#888",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          {/* Stock status */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%" }} />
            <span style={{ color: "#22c55e", fontSize: "13px", fontWeight: 600 }}>In Stock — Ready to Ship</span>
          </div>

          {/* Key specs grid */}
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: "14px", letterSpacing: "0.02em" }}>
              Key Specifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#1e1e1e", borderRadius: "8px", overflow: "hidden" }}>
              {[
                { label: "CPU", value: product.cpu },
                { label: "GPU", value: product.gpu },
                { label: "RAM", value: product.ram },
                { label: "Storage", value: product.storage },
                { label: "Motherboard", value: product.motherboard },
                { label: "CPU Cooler", value: product.cooler },
                { label: "PSU", value: product.psu },
                { label: "Case", value: product.case },
                { label: "Operating System", value: product.os },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    background: "#111",
                    padding: "12px 16px",
                    gap: "16px",
                  }}
                >
                  <span style={{ color: "#555", fontSize: "13px", width: "140px", flexShrink: 0, fontWeight: 600 }}>
                    {label}
                  </span>
                  <span style={{ color: "#ccc", fontSize: "13px" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description & Highlights */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "40px", marginBottom: "64px" }}>
        {/* Description */}
        <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "12px", padding: "32px" }}>
          <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "20px", marginBottom: "16px" }}>
            About This Build
          </h2>
          <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.8" }}>{product.description}</p>

          <div style={{ marginTop: "24px", padding: "20px", background: "#0d0d0d", borderRadius: "8px", border: "1px solid #1e1e1e" }}>
            <p style={{ color: "#888", fontSize: "13px", lineHeight: "1.7", margin: 0 }}>
              All ANIGMA systems are individually built and tested in the UAE. Each machine undergoes a full stress test
              before dispatch. Comes with a 1-year parts and labour warranty, with easy return and exchange via Virgin Megastore.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "12px", padding: "32px" }}>
          <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "20px", marginBottom: "20px" }}>
            Highlights
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {product.highlights.map((highlight, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{
                  width: "20px",
                  height: "20px",
                  background: "rgba(228,0,43,0.15)",
                  border: "1px solid rgba(228,0,43,0.3)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "1px",
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#e4002b" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ color: "#ccc", fontSize: "13px", lineHeight: "1.5" }}>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "22px" }}>
            You Might Also Like
          </h2>
          <Link href="/" style={{ color: "#e4002b", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>
            View All Gaming Desktops →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              href={`/products/${related.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
              }}>
                <div style={{ aspectRatio: "16/9", background: "#0d0d0d", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={related.image}
                    alt={related.shortName}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ color: "#ccc", fontSize: "13px", fontWeight: 600, marginBottom: "6px", lineHeight: 1.4 }} className="line-clamp-2">
                    {related.shortName}
                  </p>
                  <p style={{ color: "#fff", fontSize: "16px", fontWeight: 800 }}>
                    AED {related.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
