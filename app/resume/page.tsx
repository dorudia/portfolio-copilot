"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "Sep 2024 - Present",
    title: "Frontend Developer",
    company: "MACH Development & Consulting",
    location: "Iaşi, Romania · Remote",
    type: "Full-time",
    duration: "1 year 4 months",
  },
  {
    period: "Feb 2022 - Feb 2024",
    title: "Frontend Developer",
    company: "Tremend Software Consulting",
    location: "Bucureşti, România",
    type: "Full-time",
    // skills: "Jira · Git · Responsive Web Design",
    duration: "2 years 1 month",
  },
  {
    period: "Jun 2021 - Dec 2021",
    title: "Junior Frontend Developer",
    company: "Mocha Global",
    location: "Bucharest, Romania",
    type: "Full-time",
    // skills: "Jira · Git · Responsive Web Design",
    duration: "7 months",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
];

import TechIcon from "@/components/tech-icons";

export default function ResumePage() {
  const [active, setActive] = useState<
    "experience" | "education" | "skills" | "about"
  >("experience");

  return (
    <main className="min-h-[calc(100vh-69px)] pt-6 md:pt-20">
      <div className="h-fit mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow">
          {/* Sidebar */}
          <aside className="w-full md:w-[30%] border-r border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Resume
            </h2>
            <div className="hidden md:flex flex-col space-y-3">
              <button
                onClick={() => setActive("experience")}
                className={`text-left px-4 py-3 rounded cursor-pointer ${
                  active === "experience"
                    ? "bg-green-700 text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActive("education")}
                className={`text-left px-4 py-3 rounded cursor-pointer ${
                  active === "education"
                    ? "bg-green-700 text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActive("skills")}
                className={`text-left px-4 py-3 rounded cursor-pointer ${
                  active === "skills"
                    ? "bg-green-700 text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActive("about")}
                className={`text-left px-4 py-3 rounded cursor-pointer ${
                  active === "about"
                    ? "bg-green-700 text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                About Me
              </button>
            </div>

            {/* Mobile shortcuts */}
            <div className="md:hidden flex gap-2 overflow-auto">
              {["experience", "education", "skills", "about"].map((k) => (
                <button
                  key={k}
                  onClick={() => setActive(k as any)}
                  className={`min-w-[120px] flex-0 px-3 py-2 rounded-md cursor-pointer ${
                    active === k
                      ? "bg-green-500 text-white dark:bg-green-600"
                      : "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {k.charAt(0).toUpperCase() + k.slice(1)}
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <section className="w-full md:w-[70%] p-6 h-fit md:max-h-[70vh] overflow-auto">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white capitalize">
                {active === "about" ? "About Me" : active}
              </h3>
            </div>

            {/* Panels */}
            {active === "experience" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                {experiences.map((e, idx) => (
                  <article
                    key={idx}
                    className="border rounded-lg p-4 bg-white dark:bg-slate-800 shadow-sm"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {e.title === "About" ? "About Me" : e.title}
                        </h4>
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                          {e.company}
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 text-right">
                        {e.type}
                      </div>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                      {e.period}
                    </div>
                    {e.duration && (
                      <div className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                        {e.duration}
                      </div>
                    )}
                    <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {e.location}
                    </div>
                    {/* {e.skills && (
                      <div className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                        Skills: {e.skills}
                      </div>
                    )} */}
                  </article>
                ))}
              </motion.div>
            )}

            {active === "education" && (
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Babes-Bolyai University
                </h4>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  UBB Cluj
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                  Geography of Tourism
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Sep 2021 - Jun 2024
                </div>
              </div>
            )}

            {active === "skills" && (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6">
                {skills.map((s) => (
                  <div
                    key={s}
                    className="w-full aspect-square flex flex-col items-center justify-center rounded-lg bg-slate-800 text-slate-200"
                  >
                    <TechIcon label={s} />
                  </div>
                ))}
              </div>
            )}

            {active === "about" && (
              <div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Frontend developer focused on building performant and
                  accessible user interfaces. I also have experience with
                  backend technologies (Node.js, Express, MongoDB) and enjoy
                  working end-to-end on projects.
                </p>

                <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
                  <div className="flex items-center justify-between py-3">
                    <div className="text-sm text-slate-500">Name</div>
                    <div className="font-medium">Diaconu Doru</div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="text-sm text-slate-500">Experience</div>
                    <div className="font-medium">4+ years</div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="text-sm text-slate-500">Nationality</div>
                    <div className="font-medium">Romanian</div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="text-sm text-slate-500">Freelance</div>
                    <div className="font-medium">Available</div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="text-sm text-slate-500">Phone</div>
                    <div className="font-medium">+40757418580</div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="text-sm text-slate-500">GitHub</div>
                    <div className="font-medium">github.com/dorudia</div>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="text-sm text-slate-500">Languages</div>
                    <div className="font-medium">RO, EN</div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
