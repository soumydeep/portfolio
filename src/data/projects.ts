import { Project } from '../types';

export const projects: Project[] = [
  {
    title: "SCRUM - Project Management Tool",
    description: "A comprehensive project management platform built for agile teams, featuring real-time collaboration and sprint planning.",
    technologies: ["React", "NextJS", "ShadCn UI", "Clerk", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    demoLink: "https://scrum-lcu4.vercel.app/",
    githubLink: "https://github.com/soumydeep/scrum",
    features: [
      "Real-time collaboration ",
      "Drag-and-drop sprint planning board",
      "Customizable workflow states",
      "Onboarding Multiple Organization",
    ],
    challenges: "One of the main challenges was implementing real-time updates on the Kanban Board. So implemented the proper logic with use of state management and itteration over the data." 
  },
  {
    title: "Apparel Store",
    description: "An e-commerce platform for a fashion brand that contains basic e-commerce features with strong implementation behind the backend",
    technologies: ["React", "Redux" , "Javascript" , "Vite"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
    demoLink: "https://ecom-project-xi.vercel.app/",
    githubLink: "https://github.com/soumydeep/ecom_project",
    features: [
      "Product filtering feature",
      "Search and sorting",
      "Pagination Concept",
      "Cart management",
      "Maintained State with Redux",
      
    ],
    challenges: "Implementing pagination while products are sorted is something a challange here. So we used Redux for state Management to eliminate this issue."
  }
];