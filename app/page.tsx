import Section from '../components/Section';
import { Project } from '../components/Project';
import { Paper } from '../components/Paper';
import { Experience } from '../components/Experience';
import FadeIn from '../components/FadeIn';

import projects from '../content/projects.json';
import papers from '../content/papers.json';
import skills from '../content/skills.json';
import experience from '../content/experience.json';
import education from '../content/education.json';

import Image from 'next/image';
import { FileText, MailOpen, Github, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <FadeIn delay={0}>
        <header className="flex flex-col-reverse sm:flex-row justify-between items-start mb-12 gap-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-black mb-2">
              Curtis Ying
            </h1>
            <p className="text-gray-600 mb-4 text-lg">
              Applied Math & CS at Brown University
            </p>
            <p className="mb-4 leading-relaxed text-gray-600 font-mono">
              Hi! I'm Curtis, a student at Brown University studying Applied Math and CS.
              I'm an aspiring software engineer, with particular interest in frontend, backend, and AI/ML.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <a href="/resume.pdf" target="_blank" className="btn-social">
                <FileText size={16} />
                Resume
              </a>
              <a href="mailto:curtis.ying.business@gmail.com" className="btn-social">
                <MailOpen size={16} />
                Email
              </a>
              <a href="https://github.com/cyying28" target="_blank" className="btn-social">
                <Github size={16} />
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" className="btn-social">
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex-shrink-0">
            <Image
              src="/profile.jpg" 
              alt="Curtis Ying"
              fill
              className="rounded-full object-cover border-2 border-gray-100 shadow-sm"
              priority
            />
          </div>
        </header>
      </FadeIn>

      <FadeIn delay={200}>
        <Section title="Education">
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div key={i} className="space-y-2">

                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 text-lg">{edu.school}</h3>
                  <span className="text-sm text-gray-500 font-mono">{edu.date}</span>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-gray-700 font-medium">{edu.degree}</p>
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                      GPA: {edu.gpa}
                    </span>
                </div>

                <div className="text-sm leading-relaxed">
                  <span className="font-semibold text-gray-900">Coursework: </span>
                  <span className="text-gray-600 font-mono">{edu.coursework.join(', ')}</span>
                </div>

                <div className="text-sm leading-relaxed">
                  <span className="font-semibold text-gray-900">Activities: </span>
                  <span className="text-gray-600 font-mono">{edu.activities.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </FadeIn>

      <FadeIn delay={400}>
        <Section title="Experience">
          <div className="space-y-6">
            {experience.map((job, i) => (
              <Experience key={i} job={job} />
            ))}
          </div>
        </Section>
      </FadeIn>

      <FadeIn delay={0}>
        <Section title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <Project key={i} project={p} />
            ))}
          </div>
        </Section>
      </FadeIn>

      <FadeIn delay={0}>
        <Section title="Publications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {papers.map((p, i) => (
              <Paper key={i} paper={p} />
            ))}
          </div>
        </Section>
      </FadeIn>

      <FadeIn delay={0}>
        <Section title="Skills">
          <div className="grid gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-medium text-gray-900 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                        <span key={index} className="capsule">
                            {item}
                        </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </FadeIn>
    </main>
  );
}