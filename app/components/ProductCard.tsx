"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/products/${product.slug}`}
      style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}
    >
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#ffffff",
          border: `1px solid ${hovered ? "#e4002b" : "#e5e5e5"}`,
          borderRadius: "10px",
          overflow: "hidden",
          cursor: "pointer",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 8px 24px rgba(228,0,43,0.12)"
            : "0 1px 4px rgba(0,0,0,0.06)",
          transition: "all 0.2s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", background: "#f8f8f8", aspectRatio: "4/3", overflow: "hidden" }}>
          {product.badge && (
            <div style={{
              position: "absolute", top: "10px", left: "10px", zIndex: 10,
              background: product.badge === "Sale" ? "#ff6b00" : "#e4002b",
              color: "#fff", fontSize: "11px", fontWeight: 700,
              padding: "3px 9px", borderRadius: "4px", letterSpacing: "0.05em",
            }}>
              {product.badge}
            </div>
          )}
          <button
            style={{
              position: "absolute", top: "10px", right: "10px", zIndex: 10,
              background: "rgba(255,255,255,0.9)", border: "1px solid #e5e5e5",
              borderRadius: "50%", width: "32px", height: "32px",
              cursor: "pointer", display: "flex", alignItems: "center",
              justifyContent: "center", color: "#bbb",
            }}
            onClick={(e) => e.preventDefault()}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.shortName}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>

          {/* Spec chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {[
              product.cpu.split("/")[0].trim(),
              product.gpu.replace("NVIDIA ", "").replace("GeForce ", ""),
            ].map((spec) => (
              <span key={spec} style={{
                background: "#f5f5f5", border: "1px solid #e5e5e5",
                color: "#555", fontSize: "11px", padding: "2px 7px",
                borderRadius: "4px", fontFamily: "monospace",
              }}>
                {spec}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 style={{
            fontSize: "13px", fontWeight: 600, color: "#111",
            margin: 0, lineHeight: 1.45,
            display: "-webkit-box", WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>
            {product.name}
          </h2>

          {/* Key specs grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px" }}>
            {[
              { label: "RAM", value: product.ram },
              { label: "Storage", value: product.storage },
              { label: "Cooler", value: product.cooler.split(" ").slice(0, 3).join(" ") },
              { label: "OS", value: product.os },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "#f8f8f8", padding: "7px 9px", borderRadius: "5px", border: "1px solid #f0f0f0" }}>
                <div style={{ color: "#aaa", fontSize: "10px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</div>
                <div style={{ color: "#333", fontSize: "12px", marginTop: "2px", fontWeight: 500 }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="12" height="12" viewBox="0 0 24 24"
                  fill={star <= Math.round(product.rating) ? "#f59e0b" : "none"}
                  stroke="#f59e0b" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span style={{ color: "#999", fontSize: "12px" }}>
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price + CTA */}
          <div style={{
            marginTop: "auto", paddingTop: "12px",
            borderTop: "1px solid #f0f0f0",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "10px",
          }}>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: "#111" }}>
                AED {product.price.toLocaleString()}
              </div>
              {product.originalPrice && (
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ fontSize: "12px", color: "#bbb", textDecoration: "line-through" }}>
                    AED {product.originalPrice.toLocaleString()}
                  </span>
                  <span style={{ fontSize: "11px", color: "#ff6b00", fontWeight: 600 }}>
                    Save AED {(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </div>
              )}
              <div style={{ fontSize: "11px", color: "#aaa", marginTop: "2px" }}>
                AED {Math.round(product.price / 12).toLocaleString()}/mo · 0% plan
              </div>
            </div>
            <button
              style={{
                background: "#e4002b", color: "#fff",
                border: "none", borderRadius: "7px",
                padding: "10px 16px", fontSize: "13px",
                fontWeight: 700, cursor: "pointer",
                letterSpacing: "0.01em", flexShrink: 0,
              }}
              onClick={(e) => e.preventDefault()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
}
