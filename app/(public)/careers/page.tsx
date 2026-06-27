import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Karir & Budaya Kerja",
  description: "Bergabunglah dengan tim teknologi inti Syah Tech. Kami mencari AI Systems Architect, DevOps Engineer, dan Cyber Security Expert untuk membangun infrastruktur masa depan.",
};

export default function CareersPage() {
  return <CareersClient />;
}