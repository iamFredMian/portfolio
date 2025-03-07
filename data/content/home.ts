type Skill = {
  title: string,
  icon: string,
  style?: object
};
type Testimonial = {
  quote: string,
  name: string,
  job: string
};


export const skills: Skill[] = [
  {
    title: "Python",
    icon: "https://cdn.jsdelivr.net/npm/@programming-languages-logos/python@0.0.0/python.svg",
  },
  {
    title: "C++",
    icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/cpp/cpp.svg",
  },
  {
    title: "Java",
    icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/java/java.svg",
  },
  {
    title: "JavaScript",
    icon: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/javascript/javascript.svg",
  },
  {
    title: "PyTorch",
    icon: "/static/doodles/py-torch.svg",
  },
  {
    title: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/tensorflow.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    title: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The communication throughout the project was spot on and the genre of design was carried out well.",
    name: "Wilson Bright",
    job: "Co-Founder of Embraer",
  },
  {
    quote:
      "The code was clean, easy to understand, and exactly what I was looking for.",
    name: "Philip Imperato",
    job: "CEO of CrowdClip",
  },
  {
    quote:
      "My vision was executed perfectly. The quality and speed of the work was excellent.",
    name: "Zach Green",
    job: "Founder of Ethical compliance system",
  },
];
