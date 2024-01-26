import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="h-[650px] w-[100%] bg-blue dark:bg-[#494949]">
        <div className="flex h-full flex-col items-center justify-center gap-5">
          <div>
            <Icon
              className="text-gray-dark"
              icon="la:laptop-code"
              style={{
                height: "100%",
                fontSize: 150,
              }}
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-dark dark:text-white">
            {t("basic_info.name")}
          </h1>

          <TypeAnimation
            sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
              (title: string) => [title, 1000],
            )}
            wrapper="span"
            speed={50}
            className="text-regular text-2xl text-gray-dark dark:text-white"
            repeat={Infinity}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
