import Profile from "../assets/PROF.jpeg";

function AboutPage() {
  return (
    <div className="pt-40 ">
      <h1 className="text-5xl py-3 font-bold text-center text-[#14B8A6]">
        About Me
      </h1>
      <div className="flex items-center gap-8 px-30 pt-4 pb-15">
        <div
          className="h-[140px] w-[140px] bg-cover bg-center  rounded-full "
          style={{ backgroundImage: `url(${Profile})` }}
        ></div>
        <p className="w-5/6 text-lg text-white/66">
          I’m a frontend developer with a passion for turning ideas into real,
          interactive experiences. I design clean and user-friendly interfaces
          in Figma and bring them to life using React and Tailwind CSS. As I
          continue to grow, I’m focused on improving my skills and building
          applications that are not only visually appealing but also practical
          and easy to use.
        </p>
      </div>
      <div className="w-full h-40 bg-[#14B8A6]/40"></div>
    </div>
  );
}

export default AboutPage;
