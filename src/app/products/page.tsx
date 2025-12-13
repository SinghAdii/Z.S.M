
import React from "react";
import { Metadata } from "next";
import HeroSection from "@/components/Custom/HRMS/HeroSection";
import ProblemSolutionHooks from "@/components/Custom/HRMS/ProblemSolutionHooks";
import CoreModules from "@/components/Custom/HRMS/CoreModules";
import HowItWorks from "@/components/Custom/HRMS/HowItWorks";
import ProductShowcase from "@/components/Custom/HRMS/ProductShowcase";
import RoleBenefits from "@/components/Custom/HRMS/RoleBenefits";
import SecurityCompliance from "@/components/Custom/HRMS/SecurityCompliance";
import WhyChoose from "@/components/Custom/HRMS/WhyChoose";
import CallToAction from "@/components/Custom/HRMS/CallToAction";

export const metadata: Metadata = {
    title: "Next-Gen HRMS Platform | Modern HR Management Solution",
    description: "Streamline your HR operations with our enterprise-grade HRMS. Manage payroll, attendance, performance, and more in one unified platform.",
};

export default function HRMSPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection />
            <ProblemSolutionHooks />
            <CoreModules />
            <HowItWorks />
            <ProductShowcase />
            <RoleBenefits />
            <SecurityCompliance />
            <WhyChoose />
            <CallToAction />

        </main>
    );
}
