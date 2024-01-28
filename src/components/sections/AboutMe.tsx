import { Icon } from "@iconify/react";

const AboutMe = () => {
  const techStacks = ["devicon:python", "devicon:react", "devicon:typescript"];

  return (
    <section className="py-5 dark:bg-[#7f7f7f] md:py-10">
      <h2 className="text-center text-xl font-medium uppercase tracking-widest ">
        About me
      </h2>

      <div className="flex flex-col items-center justify-center gap-10 px-10 pb-10 md:flex-row md:pb-0">
        <div className="text-center md:w-1/3">
          <div className="mb-[30px] mt-[55px] inline-block p-4 pb-10 shadow-card ">
            <img
              src="images/myProfile.jpg"
              alt="Profile"
              height="250px"
              className="w-[200px]"
            />
            <div className="mt-3 flex justify-between">
              {techStacks.map((tech) => (
                <Icon
                  key={tech}
                  icon={tech}
                  style={{
                    fontSize: 50,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
            <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
              <Icon icon="emojione:red-circle" width={10} />
              <Icon icon="twemoji:yellow-circle" width={10} />
              <Icon icon="twemoji:green-circle" width={10} />
            </div>
            <div
              className="p-3 text-justify"
              style={{
                height: "auto",
                fontSize: "132%",
                lineHeight: "200%",
              }}
            >
              <span className="text-xl font-medium dark:text-white">
                Hi, I'm Zach.
              </span>
              <br />
              <br />
              <p className="text-sm font-medium dark:text-white">
                My professional journey is unique, having transitioned from the
                culinary arts to the tech industry. For many years, I led a
                pop-up restaurant and later, a full-fledged brick-and-mortar
                establishment. These experiences were instrumental in shaping
                the professional I am today. <br />
                My work ethic, honed from long hours in the kitchen, translates
                seamlessly into coding marathons and debugging sessions.
                Managing a restaurant taught me how to prioritize tasks
                dynamically and adapt to changing situations - skills that are
                crucial in the ever-evolving world of software development. Most
                importantly, my experience in hospitality has ingrained in me
                the value of clear, friendly communication – whether it's with
                customers, colleagues, or a block of code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
