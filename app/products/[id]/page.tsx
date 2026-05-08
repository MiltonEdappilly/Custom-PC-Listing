import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import ProductImageGallery from "@/app/components/ProductImageGallery";

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
    title: `${product.shortName} | Jumbo Electronics UAE`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductBySlug(id);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "28px 24px" }}>

      {/* Back */}
      <Link href="/" style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        color: "#888", textDecoration: "none", fontSize: "13px", marginBottom: "28px",
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Gaming Desktops
      </Link>

      {/* Product detail */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "52px", marginBottom: "56px" }}>

        {/* Left: images */}
        <div>
          <ProductImageGallery images={product.images} altName={product.shortName} />
        </div>

        {/* Right: info */}
        <div>
          {/* Badges */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
            {product.badge && (
              <span style={{
                background: product.badge === "Sale" ? "#ff6b00" : "#1B4289",
                color: "#fff", fontSize: "11px", fontWeight: 700,
                padding: "3px 10px", borderRadius: "4px", letterSpacing: "0.05em",
              }}>{product.badge}</span>
            )}
            <span style={{
              background: "#f5f5f5", border: "1px solid #e5e5e5",
              color: "#777", fontSize: "11px", padding: "3px 10px", borderRadius: "4px",
            }}>AZTECH COMPUTERS</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: "20px", fontWeight: 800, color: "#111", lineHeight: 1.35, marginBottom: "14px" }}>
            {product.name}
          </h1>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <div style={{ display: "flex", gap: "3px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 24 24"
                  fill={star <= Math.round(product.rating) ? "#f59e0b" : "none"}
                  stroke="#f59e0b" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{ color: "#f59e0b", fontWeight: 700, fontSize: "14px" }}>{product.rating}</span>
            <span style={{ color: "#aaa", fontSize: "13px" }}>({product.reviewCount} reviews)</span>
          </div>

          {/* Price box */}
          <div style={{
            background: "#f8f8f8", border: "1px solid #e5e5e5",
            borderRadius: "10px", padding: "18px", marginBottom: "22px",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "4px" }}>
              <span style={{ fontSize: "30px", fontWeight: 900, color: "#111" }}>
                AED {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: "16px", color: "#bbb", textDecoration: "line-through" }}>
                  AED {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <div style={{ color: "#ff6b00", fontWeight: 600, fontSize: "13px", marginBottom: "6px" }}>
                You save AED {(product.originalPrice - product.price).toLocaleString()}
              </div>
            )}
            <div style={{ color: "#aaa", fontSize: "12px" }}>
              or <strong style={{ color: "#555" }}>AED {Math.round(product.price / 12).toLocaleString()}/month</strong> with 0% Interest Plan
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #e5e5e5" }}>
              {[{ icon: "🚚", text: "Free Delivery" }, { icon: "🛡️", text: "1 Year Warranty" }, { icon: "↩️", text: "Easy Returns" }].map((b) => (
                <div key={b.text} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span>{b.icon}</span>
                  <span style={{ color: "#777", fontSize: "12px" }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stock */}
          <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "18px" }}>
            <div style={{ width: "8px", height: "8px", background: "#22c55e", borderRadius: "50%" }} />
            <span style={{ color: "#16a34a", fontSize: "13px", fontWeight: 600 }}>In Stock — Ready to Ship</span>
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
            <button style={{
              flex: 1, background: "#1B4289", color: "#fff",
              border: "none", borderRadius: "8px",
              padding: "14px", fontSize: "15px",
              fontWeight: 700, cursor: "pointer",
            }}>
              Add to Cart
            </button>
            <button style={{
              background: "#fff", border: "1px solid #e5e5e5",
              borderRadius: "8px", padding: "14px 16px",
              cursor: "pointer", color: "#aaa",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>

          {/* Specs table */}
          <h3 style={{ color: "#111", fontWeight: 700, fontSize: "14px", marginBottom: "10px", letterSpacing: "0.02em" }}>
            Key Specifications
          </h3>
          <div style={{ border: "1px solid #e5e5e5", borderRadius: "8px", overflow: "hidden" }}>
            {[
              { label: "CPU", value: product.cpu },
              { label: "GPU", value: product.gpu },
              { label: "RAM", value: product.ram },
              { label: "Storage", value: product.storage },
              { label: "Motherboard", value: product.motherboard },
              { label: "CPU Cooler", value: product.cooler },
              { label: "PSU", value: product.psu },
              { label: "Case", value: product.case },
              { label: "OS", value: product.os },
            ].map(({ label, value }, i) => (
              <div key={label} style={{
                display: "flex", gap: "16px",
                padding: "10px 14px",
                background: i % 2 === 0 ? "#fff" : "#fafafa",
                borderBottom: i < 8 ? "1px solid #f0f0f0" : "none",
              }}>
                <span style={{ color: "#aaa", fontSize: "12px", width: "130px", flexShrink: 0, fontWeight: 600 }}>
                  {label}
                </span>
                <span style={{ color: "#333", fontSize: "12px" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description + Highlights */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px", marginBottom: "56px" }}>
        <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "10px", padding: "28px" }}>
          <h2 style={{ color: "#111", fontWeight: 800, fontSize: "18px", marginBottom: "14px" }}>
            About This Build
          </h2>
          <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.8", margin: 0 }}>{product.description}</p>
          <div style={{ marginTop: "20px", padding: "16px", background: "#f8f8f8", borderRadius: "8px", border: "1px solid #f0f0f0" }}>
            <p style={{ color: "#999", fontSize: "13px", lineHeight: "1.7", margin: 0 }}>
              All AZTECH systems are individually built and tested in the UAE. Each machine undergoes a full stress test
              before dispatch, and comes with a 1-year parts and labour warranty with easy returns via Virgin Megastore.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "10px", padding: "28px" }}>
          <h2 style={{ color: "#111", fontWeight: 800, fontSize: "18px", marginBottom: "18px" }}>
            Highlights
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            {product.highlights.map((h, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{
                  width: "18px", height: "18px", flexShrink: 0,
                  background: "#fff0f2", border: "1px solid #fecdd3",
                  borderRadius: "50%", display: "flex",
                  alignItems: "center", justifyContent: "center", marginTop: "1px",
                }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#1B4289" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span style={{ color: "#444", fontSize: "13px", lineHeight: "1.5" }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
          <h2 style={{ color: "#111", fontWeight: 800, fontSize: "20px" }}>You Might Also Like</h2>
          <Link href="/" style={{ color: "#1B4289", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>
            View All Gaming Desktops →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}>
          {related.map((r) => (
            <Link key={r.id} href={`/products/${r.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div style={{
                background: "#fff", border: "1px solid #e5e5e5",
                borderRadius: "10px", overflow: "hidden",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}>
                <div style={{ aspectRatio: "16/9", background: "#f8f8f8", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.shortName}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "14px" }}>
                  <p style={{
                    color: "#333", fontSize: "13px", fontWeight: 600,
                    marginBottom: "6px", lineHeight: 1.4,
                    display: "-webkit-box", WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical", overflow: "hidden",
                  }}>{r.shortName}</p>
                  <p style={{ color: "#111", fontSize: "16px", fontWeight: 800, margin: 0 }}>
                    AED {r.price.toLocaleString()}
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
