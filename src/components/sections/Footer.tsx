import { Icon } from "@iconify/react";

const Footer = () => {
  const socials = [
    {
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/https://www.linkedin.com/in/zach-lefler/",
    },
    {
      icon: "mdi:github",
      url: "https://github.com/zlefler",
    },
  ];

  return (
    <footer className="bg-[#1f1f1f] py-5 pt-10  text-center text-white">
      <div className="flex justify-center gap-5">
        {socials.map((social) => (
          <a key={social.icon} href={social.url}>
            <Icon icon={social.icon} width="22px" />
          </a>
        ))}
      </div>
      <p className="py-2 text-xs">Copyright &copy; Zach Lefler</p>
    </footer>
  );
};

export default Footer;
