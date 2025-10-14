"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Sectionheading from "./Sectionheading";

// Zod schema
const contactFormSchema = z.object({
  fullName: z.string().min(3, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(8, "Enter a valid phone number"),
  subject: z.string().optional(),
  message: z.string().min(10, "Please enter a message"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      console.log("Form Data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-zinc-950 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <Sectionheading
            topic="Get in Touch"
            title="Let’s build something extraordinary together."
            description="We deliver software solutions tailored to your business needs. Fill out the form below and our team will reach out to you promptly."
          />
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-zinc-900 shadow-xl rounded-3xl p-10 md:p-12 border border-gray-200 dark:border-zinc-800">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">
                        Full Name
                      </Label>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">
                        Email Address
                      </Label>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          className="bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">
                        Company Name
                      </Label>
                      <FormControl>
                        <Input
                          placeholder="Your Company"
                          {...field}
                          className="bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">
                        Phone Number
                      </Label>
                      <FormControl>
                        <Input
                          placeholder="+1 234 567 8900"
                          {...field}
                          className="bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">
                        Subject
                      </Label>
                      <FormControl>
                        <Input
                          placeholder="Project Inquiry / Support"
                          {...field}
                          className="bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-gradient-to-r focus:ring-orange-500 focus:border-transparent transition-colors"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-1" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <Label className="text-gray-700 dark:text-gray-300 font-medium">
                        Message
                      </Label>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your project or inquiry..."
                          className="min-h-[140px] bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors rounded-xl p-4"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-transform hover:scale-105"
              >
                Submit Inquiry
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
