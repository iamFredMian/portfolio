import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Embraer",
    desc: "Applied Machine Learning – Designed and developed machine learning models for Embraer, leveraging predictive analytics to identify trends in service center operations and aircraft manufacturing processes.",
    img: "/static/projects/embraer.png",
    link: "https://embraer.com/",
    tags: ["React", "NextJS", "TailwindCSS", "CSS", "Firebase"],
  },
  {
    id: 1,
    title: "CrowdClip",
    desc: "Machine Learning for Video Processing – Enhanced a web application by implementing machine learning algorithms that analyze large video files, enabling users to identify and track individuals within video footage.",
    img: "/static/projects/crowdclip.png",
    link: "https://www.crowdclip.com/",
    tags: ["React", "MaterialUI", "Javascript", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Ethical compliance system",
    desc: "Scalable AI & Cloud Integration – Enhanced a web application that helped businesses ensure ethical compliance, leading to the startup’s acquisition by a major ethical compliance organization.",
    img: "/static/projects/ethical_compliance_system.png",
    link: "https://www.engie.com/en/group/ethics-and-compliance/policies-and-procedures/ethical-compliance-referential",
    tags: ["React", "CSS", "JSON"],
  },
  {
    id: 3,
    title: "Buoy Health",
    desc: "AI-Powered Symptom Checker – Contributed to the development of an AI-driven virtual doctor platform that leverages machine learning and NLP to provide personalized health assessments.",
    img: "/static/projects/buoyhealth.png",
    link: "https://www.buoyhealth.com/",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "keen.io",
    desc: "Real-Time Analytics Platform – Contributed to the development of a scalable analytics platform enabling businesses to track and visualize real-time data.",
    img: "/static/projects/keen.png",
    link: "https://keen.io/",
    tags: ["Node", "Javascript", "NPM", "HTML"],
  },
  {
    id: 5,
    title: "Fullsoon",
    desc: "Fullsoon is a predictive tool, collecting data and helping restaurants and hotel to predict the guest attendance and menu ordering up to two weeks in advance. By doing so, it does optimize the restaurant food preparation and prevent food waste",
    img: "/static/projects/fullsoon.png",
    link: "https://fulsoon.co/",
    tags: ["React", "Node", "Regression Analysis", "AI Model", "AWS", "Docker"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
