"use client";

import { useState } from "react";

const FALLBACK_IMG = "https://placehold.co/600x450/f0f0f0/999999?text=AZTECH+Gaming+PC";

interface Props {
  images: string[];
  altName: string;
}

export default function ProductImageGallery({ images, altName }: Props) {
  const [active, setActive] = useState(0);
  const [srcs, setSrcs] = useState(images);

  function handleError(i: number) {
    setSrcs((prev) => {
      const next = [...prev];
      next[i] = FALLBACK_IMG;
      return next;
    });
  }

  return (
    <div>
      <div style={{
        background: "#f8f8f8", border: "1px solid #e5e5e5",
        borderRadius: "12px", overflow: "hidden",
        aspectRatio: "4/3", marginBottom: "12px",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={srcs[active]}
          alt={altName}
          onError={() => handleError(active)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {srcs.map((img, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: "#f8f8f8",
              border: `2px solid ${i === active ? "#F05A00" : "#e5e5e5"}`,
              borderRadius: "8px", overflow: "hidden",
              width: "80px", height: "60px", cursor: "pointer", flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img}
              alt={`View ${i + 1}`}
              onError={() => handleError(i)}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
