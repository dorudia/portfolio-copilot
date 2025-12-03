"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback({
          type: "success",
          message: "Email sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const error = await response.json();
        setFeedback({
          type: "error",
          message: error.error || "Failed to send email. Please try again.",
        });
      }
    } catch (error) {
      setFeedback({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="lg:h-[calc(100vh-5rem)] lg:overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-10 sm:px-6 lg:px-8 h-full flex flex-col">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Contact
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project or want to say hi? Use the form or quick links.
          </p>
        </div>

        {/* Main grid: contact info + form. On desktop keep everything in view */}
        <div className="grid mx-auto w-full max-w-3xl gap-6 flex-1 items-stretch">
          {/* Left column: short blurb (we removed the email/linkedin/github cards) */}

          {/* Form (right) - compact, h-fit */}
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 md:p-6 h-fit flex flex-col">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3">
              Send a message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-3  h-fit flex flex-col"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Name"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Email"
                />
              </div>

              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder="Subject"
              />

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                placeholder="A short message..."
              />

              {feedback.type && (
                <div
                  className={`p-3 rounded-md text-sm ${
                    feedback.type === "success"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  }`}
                >
                  {feedback.message}
                </div>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-green-700 text-slate-100 hover:bg-green-600 dark:bg-green-700 dark:text-slate-100 dark:hover:bg-green-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>

            {/* Quick links moved below the form */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                Quick links
              </p>
              <div className="flex gap-3">
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 dark:hover:bg-green-700 dark:hover:text-slate-100 text-green-00 dark:text-slate-400 hover:bg-green-700 hover:text-slate-100 transition-colors"
                >
                  <Twitter size={16} />
                </a> */}
                <a
                  href="https://www.linkedin.com/in/doru-diaconu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 dark:hover:bg-green-700 dark:hover:text-slate-100 text-green-00 dark:text-slate-400 hover:bg-green-700 hover:text-slate-100 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://github.com/dorudia?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 dark:hover:bg-green-700 dark:hover:text-slate-100 text-green-00 dark:text-slate-400 hover:bg-green-700 hover:text-slate-100 transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href="mailto:dorudia@gmail.com"
                  className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 dark:hover:bg-green-700 dark:hover:text-slate-100 text-green-00 dark:text-slate-400 hover:bg-green-700 hover:text-slate-100 transition-colors"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
