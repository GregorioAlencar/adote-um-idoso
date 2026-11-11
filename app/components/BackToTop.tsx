"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 400);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 5v14" />
      </svg>
    </button>
  );
}
