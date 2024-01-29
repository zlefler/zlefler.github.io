import { Icon } from "@iconify/react";

const Skills = () => {
  const icons = [
    {
      name: "Python",
      class: "teenyicons:python-solid",
    },
    {
      name: "TypeScript",
      class: "teenyicons:typescript-solid",
    },
    {
      name: "JavaScript",
      class: "teenyicons:javascript-solid",
    },
    {
      name: "React",
      class: "teenyicons:react-solid",
    },
    {
      name: "Ruby",
      class: "teenyicons:ruby-solid",
    },
    {
      name: "GraphQL",
      class: "teenyicons:graphql-solid",
    },
    {
      name: "AWS",
      class: "devicon-plain:amazonwebservices-wordmark",
    },
  ];

  return (
    <section className="bg-[#1f1f1f] px-3 py-5 pb-20 md:px-0">
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest text-white">
        Skills
      </h2>

      <ul className="flex flex-wrap justify-center  gap-4">
        {icons.map((skill) => (
          <li
            key={skill.name}
            className="flex h-[84px] w-[100px] flex-col items-center justify-center rounded-[8px] bg-[#2A2929] p-[5x] text-white"
          >
            <Icon
              icon={skill.class}
              className="mx-auto"
              width="39.6px"
              height="39.5px"
            />
            <p className="mt-3 text-center text-xs">{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
