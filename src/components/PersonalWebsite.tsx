"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Github, Sun, Moon, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import portrait from "@/assets/portrait.jpg";
import parkworth from "@/assets/parkworth.jpeg";
import burlington from "@/assets/burlington.jpeg";
import sbseal from "@/assets/sbseal.jpeg";
import projects from "./projects"; // Adjust the path as necessary

const PersonalWebsite = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen bg-white ${isDarkMode ? 'bg-black' : 'dark:bg-gray-900'} text-gray-900 dark:text-gray-100 relative`}>
      {/* Dark Mode Toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>

      <main className="container mx-auto px-4 py-16 max-w-3xl relative">
        {/* Hero Section */}
        <section className="mb-16 flex items-center">
          <div className="flex-1">
            <h1 className="text-5xl tracking-tighter font-bold mb-4">
              Hi, I&apos;m Cameron 👋
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Software Engineer and Visionary. I love bringing innovative ideas
              to life with the power of code.
            </p>
          </div>
          <div className="flex-shrink-0 ml-8">
            <Image
              src={portrait.src}
              alt="Cameron Portrait"
              width={128}
              height={128}
              className="rounded-full border-1 border-gray-300 dark:border-gray-600"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Third-year Computer Science student at University of California,
            Santa Barbara. Eager to provide elegant solutions to real-world
            problems. Passionate about FinTech, AI, and the bridge between
            finance and technology.
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-6">
            <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Image
                      src={parkworth.src}
                      alt="Parkworth Wealth Management Logo"
                      width={64}
                      height={64}
                      className="rounded-full border border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">Parkworth Wealth Management</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineering Intern</p>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2024 - Aug 2024</p>
                      </div>
                      <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1 transition-all duration-500 max-h-0 overflow-hidden group-hover:max-h-20`}>
                        Worked on a full-stack SaaS tax planning tool that used AI to speed up manual work for wealth managers.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Image
                      src={burlington.src}
                      alt="Burlington Stores Logo"
                      width={64}
                      height={64}
                      className="rounded-full border border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">Burlington Stores, Inc.</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Front End Associate</p>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Jun 2022 - Jan 2024</p>
                      </div>
                      <p className={`text-sm text-gray-600 dark:text-gray-400 mt-1 transition-all duration-500 max-h-0 overflow-hidden group-hover:max-h-20`}>
                        Assisted customers with product selection and inquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          <Card className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Image
                    src={sbseal.src}
                    alt="SB Seal Logo"
                    width={80}
                    height={48}
                    className="object-cover border border-gray-300 dark:border-gray-600"
                  />
                </div>
                <div className="flex-1 ml-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">UC Santa Barbara 🌊</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor&apos;s Degree in Computer Science</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expected 2026</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Java",
              "C++",
              "R",
              "JavaScript",
              "Typescript",
              "React",
              "Tailwind",
              "Docker",
              "Heroku",
              "Node.js",
              "Vite",
              "SQL",
              "Git",
              "Redis",
              "Celery",
              "Postgres",
              "Mongo",
              "Agile",
              "Excel",
              "Matlab",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full px-3 py-1 text-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.externalLink}
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubLink}
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Contact</h2>
          <div className="flex gap-4">
            <a
              href="mailto:cameron.byrne@outlook.com"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/cameronbyrne4"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/cameronbyrne00"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </section>

        {/* Fixed Gradient Overlay as Footer */}
        <div className={`fixed inset-x-0 bottom-0 h-32 bg-gradient-to-t ${isDarkMode ? 'from-black to-transparent' : 'from-white to-transparent'} pointer-events-none`}></div>
      </main>
    </div>
  );
};

export default PersonalWebsite;
