import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Platform Services for Integrated Project Management | Ziostech Solutions",
  description: `Transform your business and scale faster with secure, cloud-based platform services by Ziostech Solutions. 
    Simplify infrastructure, deploy and manage applications efficiently, and accelerate growth with our next-gen Platform-as-a-Service (PaaS) solutions.`,
  keywords: [
    "platform services",
    "platform as a service paas",
    "paas services",
    "paas platform as a service",
    "paas",
    "p cloud",
    "p aa s",
    "cloud storage as a service",
    "cloud platform console",
    "integrated project management",
    "cloud platform services",
    "enterprise paas solutions",
    "scalable cloud platforms",
  ],
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
