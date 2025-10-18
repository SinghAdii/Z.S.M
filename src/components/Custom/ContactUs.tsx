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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sectionheading from "./Sectionheading";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";

const contactFormSchema = z.object({
  fullName: z.string().min(3, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(8, "Enter a valid phone number"),
  subject: z.string().optional(),
  message: z.string().min(10, "Please enter a message"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactSectionProps {
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
    website?: string;
    hours?: string;
  };
}

export default function ContactSection({
  contactInfo = {
    email: "ceo.office@ziostechsolutions.com",
    phone: "+91 92778-01590",
    address:
      "H.No - 104A, Vinayakpur, Kanpur Nagar, Uttar Pradesh, India 208024, IN",
    website: "www.ziostechsolutions.com",
    hours: "Mon – Fri : 9 AM – 7 PM (IST)",
  },
}: ContactSectionProps) {
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
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    form.reset();
  };

  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      value: contactInfo.email,
      color: "text-blue-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: contactInfo.phone,
      color: "text-orange-500",
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: contactInfo.address,
      color: "text-green-500",
    },
    {
      icon: Globe,
      title: "Visit Us",
      value: contactInfo.website,
      color: "text-cyan-500",
    },
  ];

  return (
    <section
      id="contact-section"
      className="py-20 bg-gray-50 dark:bg-zinc-950 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Sectionheading
            topic="Get in Touch"
            title="Let’s Build Something Extraordinary Together"
            description="Reach out to our team for collaborations, project inquiries, or partnerships. We’d love to hear from you."
          />
        </div>

        {/* Unified Box */}
        <Card className="overflow-hidden border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl rounded-3xl">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left: Quick Info */}
              <div className="bg-gradient-to-br from-orange-500/10 rounded-2xl ml-4 via-blue-500/10 to-transparent p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-zinc-800 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Quick Contact Info
                  </h3>
                  <div className="space-y-6">
                    {contactCards.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/60 dark:bg-zinc-800/60 hover:bg-white/80 dark:hover:bg-zinc-700/80 transition-all backdrop-blur-sm"
                      >
                        <item.icon
                          className={`w-6 h-6 ${item.color} shrink-0`}
                        />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">
                            {item.title}
                          </h4>

                          {/* ✅ Make only website clickable */}
                          {item.title === "Visit Us" ? (
                            <a
                              href={`https://${item.value}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="lg:col-span-2 p-8 md:p-12">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    Fill out the form below and we’ll get back to you within 24
                    hours.
                  </p>
                </CardHeader>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          name: "fullName",
                          label: "Full Name",
                          placeholder: "John Doe",
                        },
                        {
                          name: "email",
                          label: "Email Address",
                          placeholder: "john@example.com",
                        },
                        {
                          name: "company",
                          label: "Company",
                          placeholder: "Your Company",
                        },
                        {
                          name: "phone",
                          label: "Phone",
                          placeholder: "+1 234 567 8900",
                        },
                      ].map((field) => (
                        <FormField
                          key={field.name}
                          control={form.control}
                          name={field.name as keyof ContactFormValues}
                          render={({ field: f }) => (
                            <FormItem>
                              <Label className="text-gray-700 dark:text-gray-300 font-medium">
                                {field.label}
                              </Label>
                              <FormControl>
                                <Input
                                  placeholder={field.placeholder}
                                  {...f}
                                  className="bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent rounded-lg transition"
                                />
                              </FormControl>
                              <FormMessage className="text-red-500 mt-1" />
                            </FormItem>
                          )}
                        />
                      ))}

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
                                className="bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg transition"
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
                                placeholder="Tell us more about your project..."
                                {...field}
                                className="min-h-[140px] bg-gray-50 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:ring-2 focus:ring-orange-500 focus:border-transparent rounded-xl p-4 transition"
                              />
                            </FormControl>
                            <FormMessage className="text-red-500 mt-1" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
                    >
                      <Send className="w-5 h-5" />
                      Submit Inquiry
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
