"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cabana D Toplita",
    description:
      "Vacation rental booking platform with real payment processing via Stripe. Orders are saved to MongoDB only after successful webhook confirmation from Stripe.",
    src: "/project-images/project-1.png",
    technologies: ["Next.js", "Auth", "Stripe", "MongoDB"],
    link: "https://cabana-d.ro",
    github: "https://github.com/dorudia/cabana-d-toplita",
  },
  {
    id: 2,
    title: "DevEvents",
    description:
      "Event management platform built with Next.js and Clerk authentication. Create new events with image uploads to Cloudinary and save event data to MongoDB.",
    src: "/project-images/project-2.png",
    technologies: ["Next.js", "TypeScript", "Clerk", "MongoDB"],
    link: "https://dev-events-ebon.vercel.app/events",
    github: "https://github.com/dorudia/dev-events",
  },
  {
    id: 3,
    title: "My List of Things",
    description:
      "React Native List of Things app with Express backend. Features push notifications for list items with set reminders, synced across devices. Currently available as APK download for Android only.",
    src: "/project-images/project-3.png",
    technologies: [
      "React Native",
      "TypeScript",
      "Push Notifications",
      "MongoDB",
    ],
    link: "https://drive.google.com/uc?export=download&id=1B_-5Erzgb5sWiD2LyvZdOF0O4aNhNrMM",
    github: "https://github.com/dorudia/my-list-app",
  },
  {
    id: 4,
    title: "My Shop",
    description:
      "Full-stack e-commerce app with Node.js, Express and . Features user authentication, shopping cart, Stripe checkout, and PDF invoice download.",
    src: "/project-images/project-4.png",
    technologies: ["Node.js", "Express", "Stripe", "MongoDB"],
    link: "https://node-shop-server-445ec73bbfa9.herokuapp.com/",
    github: "https://github.com/dorudia/node-shop",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My Work
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Here are some of the projects I've worked on. Each project showcases
            different skills and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow bg-white dark:bg-slate-900"
            >
              {/* Project Image */}
              <div className="w-full aspect-video bg-linear-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full aspect-video object-cover hover:scale-105 transition-transform"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full cursor-pointer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </Button>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full cursor-pointer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
