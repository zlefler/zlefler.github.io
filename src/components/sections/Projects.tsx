import { useBoolean } from "@/hooks";
import ProjectDialog from "../dialog/ProjectDialog";
import { useState } from "react";

const Projects = () => {
  const [isOpen, setIsOpen] = useBoolean();
  const [selectedProject, setSelectedProject] = useState<undefined | Project>();

  type Project = {
    description: string;
    images: string[];
    startDate: string;
    technologies: { class: string; name: string }[];
    title: string;
    url: string;
  };

  const handleProjectDetails = (project: Project) => {
    setSelectedProject(project);
    console.log(project);
    setIsOpen.on();
  };

  const projects = [
    {
      title: "Movie Rankings",
      startDate: "2023",
      description:
        "I went to a movie quiz that had a few questions like this, and I wanted to play some more, so I made this. Rank movies in order of their box office ranking or their Rotten Tomatoes score.",
      images: [
        "images/portfolio/movie-rankings/movie1.jpg",
        "images/portfolio/movie-rankings/movie2.jpg",
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "mdi:react",
          name: "React",
        },
        {
          class: "teenyicons:typescript-outline",
          name: "TypeScript",
        },
      ],
    },
    {
      title: "Swole",
      startDate: "2022",
      description:
        "A school project. I had always wanted an app that lets you use classic lifting routines and told you how much you needed to lift and when, but adapted when you weren't meeting your targets. It also lets you create your own routines.",
      images: [
        "images/portfolio/swole/workout1.jpg",
        "images/portfolio/swole/workout2.jpg",
        "images/portfolio/swole/workout3.jpg",
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "mdi:react",
          name: "React",
        },
        {
          class: "mdi:ruby",
          name: "Ruby",
        },
        {
          class: "teenyicons:javascript-outline",
          name: "JavaScript",
        },
      ],
    },
  ];

  return (
    <section className="bg-blue px-3 py-5 dark:bg-[#494949] md:px-0 md:py-10">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-black">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((item) => (
          <div
            className="mb-[30px] inline-block cursor-pointer rounded-sm bg-white p-3 text-center shadow-card transition duration-[0.2] ease-linear hover:scale-[1.01] hover:shadow-card-hover dark:bg-[#6d6d6d]"
            onClick={() => handleProjectDetails(item)}
            key={item.title}
          >
            <img
              className="relative max-h-[230px]"
              src={item.images[0]}
              alt="Profile"
            />
            <span className="mt-3 rounded-b-lg bg-[#696969] px-4 pb-1 pt-2 text-center text-lg text-white">
              {item.startDate}
            </span>
            <p className="font-xl mt-2 font-bold uppercase tracking-wide dark:text-white">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <ProjectDialog
        open={isOpen}
        onClose={setIsOpen.off}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
