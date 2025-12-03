"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ArrowRight, Star } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    features: [
      "React/Next.js",
      "React Native",
      "TypeScript",
      "Responsive Design",
    ],
  },
  {
    title: "Full Stack Development",
    description: "Complete solutions from frontend to backend",
    features: [
      "Node.js/Express",
      "Database Design",
      "API Development",
      "Authentication",
    ],
  },
  {
    title: "UI/UX Implementation",
    description: "Beautiful and intuitive user interfaces",
    features: ["Shadcn/UI", "Tailwind CSS", "Accessibility", "Animation"],
  },
  {
    title: "Consulting",
    description: "Technical guidance for your projects",
    features: [
      "Architecture Planning",
      "Code Review",
      "Best Practices",
      "Training",
    ],
  },
];

export default function HireMePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Let's Work Together
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          I'm available for freelance projects and full-time opportunities. Let
          me help bring your ideas to life.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white dark:bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            What I Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Ready to start your project?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
          Let's schedule a call to discuss your requirements and how I can help
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            <a href="mailto:dorudia@gmail.com">Send Email</a>
          </Button>
        </div>
      </section>
    </main>
  );
}
