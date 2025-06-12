import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [theme, setTheme] = useState("light");

  const projects = [
    {
      title: "E-Commerce Web App",
      description:
        "Full-stack MERN application with product pages, cart, authentication, and admin dashboard. Deployed with CI/CD on AWS EKS.",
      stack: ["React", "Redux", "Node.js", "MongoDB", "Docker"],
      github: "https://github.com/yourusername/ecommerce-app",
      demo: "https://e-commerce-app-test.netlify.app/",
    },
    {
      title: "AI Code Review Assistant",
      description:
        "LLM-based app that analyzes source code and suggests improvements. Built using Streamlit with OpenAI API integration.",
      stack: ["Python", "Streamlit", "OpenAI API"],
      github: "https://github.com/yourusername/ai-code-review",
      demo: "https://yourdemo.link",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground p-6 md:p-12">
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Hi, I'm Your Name</h1>
        <p className="text-lg">Senior Front-End Developer crafting scalable, delightful user experiences.</p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => window.open("mailto:you@email.com")}>Contact</Button>
          <Button variant="default" onClick={() => window.open("/resume.pdf")}>Resume</Button>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <Github className="cursor-pointer" onClick={() => window.open("https://github.com/yourusername")} />
          <Linkedin className="cursor-pointer" onClick={() => window.open("https://linkedin.com/in/yourusername")} />
          <Mail className="cursor-pointer" onClick={() => window.open("mailto:you@email.com")} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl shadow-md border"
            >
              <Card>
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="text-sm opacity-70">{project.stack.join(", ")}</div>
                  <div className="flex gap-4 mt-2">
                    <Button variant="link" onClick={() => window.open(project.github)}>GitHub</Button>
                    <Button variant="link" onClick={() => window.open(project.demo)}>Live Demo</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center text-sm opacity-60">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </section>
    </main>
  );
}
