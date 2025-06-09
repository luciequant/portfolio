import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <div className="flex flex-row gap-6  text-4xl">
          <h3 className="text-4xl font-bold text-[#9b2b99e0]">LQ</h3>
          <a
            href="https://www.linkedin.com/in/lucie-quantov%C3%A1-390063234/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9b2b99e0]"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://github.com/luciequant"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9b2b99e0]"
          >
            <IoLogoGithub />
          </a>
        </div>
      </div>

      <p className="text-[#9b2b9982]">@{year} Lucie Quantova</p>
    </div>
  );
};

export default Footer;
