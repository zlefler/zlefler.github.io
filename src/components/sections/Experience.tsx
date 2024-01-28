import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Icon } from "@iconify/react";

interface BadgeProps {
  text: string;
}

const experiences = [
  {
    company: "Gainforest",
    title: "Web Developer",
    years: "03.2023 - present",
    mainTech: "React",
    mainTechIcon: "mdi:react",
    technologies: ["React", "TypeScript", "GraphQL", "AWS S3", "AWS Lambda"],
  },
  {
    company: "Flatiron School",
    title: "Student",
    years: "02.2023 - 10.2023",
    mainTechIcon: "mdi:ruby",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Ruby",
      "Rails",
      "Bootstrap",
    ],
  },
  {
    company: "Portland, OR",
    title: "Self Taught",
    years: "05.2022 - 05.2023",
    mainTech: "Python",
    mainTechIcon: "teenyicons:python-solid",
    technologies: [
      "HTML",
      "CSS",
      "Python",
      "JavaScript",
      "React",
      "Flask",
      "Bootstrap",
    ],
  },
];

const Badge = ({ text }: BadgeProps) => (
  <span className="rounded-xl bg-gray-light px-[5px] py-[2px] text-sm dark:bg-[#919191] dark:text-white">
    {text}
  </span>
);

const Experience = () => {
  return (
    <section className="bg-blue px-3 py-10 pb-20 dark:bg-[#494949] md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        Experience
      </h2>

      <VerticalTimeline>
        {experiences.map((exp) => (
          <VerticalTimelineElement
            key={exp.title}
            date={exp.years}
            dateClassName="dark:text-white"
            iconClassName="bg-[#1a3f63] text-white dark:bg-[#919191]"
            icon={<Icon icon={exp.mainTechIcon} />}
            className="dark:brightness-80 dark:filter"

            // contentStyle={{ filter: "brightness(80%)" }}
          >
            <h3 className="text-lg font-bold">{exp.title}</h3>
            <h4 className="text-md font-bold">{exp.company}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} text={tech} />
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconClassName="bg-[#1a3f63] text-white dark:bg-[#919191]"
          icon={<Icon icon="eos-icons:hourglass" />}
        />
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
