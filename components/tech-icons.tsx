"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function TechIcon({ label }: { label: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    html: <FaHtml5 className="w-12 h-12 text-orange-500" />,
    css: <FaCss3 className="w-12 h-12 text-blue-500" />,
    sass: <FaSass className="w-12 h-12 text-pink-500" />,
    javascript: <FaJs className="w-12 h-12 text-yellow-500" />,
    react: <FaReact className="w-12 h-12 text-cyan-500" />,
    "next.js": <SiNextdotjs className="w-12 h-12 text-white dark:text-white" />,
    next: <SiNextdotjs className="w-12 h-12 text-white dark:text-white" />,
    tailwind: <SiTailwindcss className="w-12 h-12 text-cyan-400" />,
    tailwindcss: <SiTailwindcss className="w-12 h-12 text-cyan-400" />,
    "react native": <FaReact className="w-12 h-12 text-cyan-500" />,
    "react-native": <FaReact className="w-12 h-12 text-cyan-500" />,
    "node.js": <FaNodeJs className="w-12 h-12 text-green-600" />,
    nodejs: <FaNodeJs className="w-12 h-12 text-green-600" />,
    node: <FaNodeJs className="w-12 h-12 text-green-600" />,
    express: <SiExpress className="w-12 h-12 text-slate-200" />,
    mongodb: <SiMongodb className="w-12 h-12 text-green-500" />,
  };

  const key = label.toLowerCase();
  const icon = iconMap[key];

  return (
    <div className="flex flex-col items-center gap-2">
      {icon ? (
        <div className="w-16 h-16 flex items-center justify-center">{icon}</div>
      ) : (
        <div className="w-12 h-12 rounded-md bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-100 font-semibold">
          {label.slice(0, 2).toUpperCase()}
        </div>
      )}
      <span className="text-xs text-slate-200">{label}</span>
    </div>
  );
}
