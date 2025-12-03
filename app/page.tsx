"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Code2, Briefcase, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-69px)] py-8 md:pt-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl max-h-[calc(100vh-5rem)] px-4 py-0 pb-4 md:py-20 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-8 text-center md:text-left md:flex md:items-center md:justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2 space-y-6" variants={itemVariants}>
            <div className="space-y-2">
              <motion.p
                className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2"
                variants={itemVariants}
              >
                Welcome to my portfolio
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
                variants={itemVariants}
              >
                <span
                  className="text-green-700 dark:text-green-400 tracking-wide font-medium"
                  style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                  Diaconu Doru
                </span>
              </motion.h1>
            </div>
            <motion.p
              className="text-xl text-slate-600 dark:text-slate-300 max-w-lg mx-auto md:mx-0"
              variants={itemVariants}
            >
              Frontend Developer with expertise in building beautiful,
              responsive web applications. Skilled in React, Next.js, and modern
              web technologies with knowledge of Node.js, Express, MongoDB, and
              Mongoose for full-stack development.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
              variants={itemVariants}
            >
              <Link href="/cv">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-green-700 text-slate-50 hover:bg-green-600 cursor-pointer"
                >
                  Download CV
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto cursor-pointer"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto cursor-pointer"
                >
                  Get in Touch
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.25 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/my_photo.jpeg"
                alt="Diaconu Doru"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      {/* <section className="bg-white dark:bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Code2 className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Frontend Development
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Building responsive and performant web applications using React,
                Next.js, TypeScript, and modern web technologies.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Briefcase className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Full Stack Capable
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Experience with backend technologies including Node.js, Express,
                MongoDB, and Mongoose for complete end-to-end development.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Mail className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                UI/UX Implementation
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Creating beautiful, intuitive interfaces with attention to user
                experience and modern design principles using Tailwind CSS and
                Shadcn/UI.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to start a project?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Feel free to reach out!
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-base">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </section> */}
    </main>
  );
}
