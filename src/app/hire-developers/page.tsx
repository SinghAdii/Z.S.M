import type { Metadata } from "next";
import {
    HeroSection,
    ServiceGrid,
    EngagementModels,
    ProcessSection,
    TrustSection,
    DomainDetails
} from "@/components/Custom/HireDevelopers";
import { ContactUs } from "@/components/Custom/custom_components.exports";

export const metadata: Metadata = {
    title: "Hire Top Dedicated Developers & Tech Experts | Ziostech",
    description: "Hire pre-vetted, top 1% developers and technology experts for Web, Mobile, Cloud, AI, and more. Scale your team in 48 hours with Ziostech.",
    keywords: ["Hire Developers", "Hire Dedicated Team", "Staff Augmentation", "Hire React Developers", "Hire Mobile App Developers", "IT Staffing"],
    openGraph: {
        title: "Hire Top Dedicated Developers | Ziostech",
        description: "Scale your engineering team with elite tech talent. Risk-free trial.",
        images: [{ url: "/images/hire-developers-og.jpg" }],
    },
};

export default function HireDevelopersPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <HeroSection />
            <ServiceGrid />
            <DomainDetails />
            <EngagementModels />
            <ProcessSection />
            <TrustSection />
            <ContactUs />
        </main>
    );
}
