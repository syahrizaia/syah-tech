"use client";

import dynamic from "next/dynamic";

// Pindahkan dynamic import dengan ssr: false ke sini (Client Component)
const CyberBackground = dynamic(() => import("@/components/CyberBackground"), {
  ssr: false,
});

export default function DynamicBackground() {
  return <CyberBackground />;
}