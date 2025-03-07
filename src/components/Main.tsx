import Image from "next/image";
import Project from "./Project";
import { Button } from "./Button";
const Main = () => {
  return (
    <main className="flex flex-col items-center gap-10 bg-[url(/background.webp)] bg-cover">
      <section className="flex flex-col items-center gap-4">
        <Image src="/me.webp" height={200} width={200} alt="Me" />
        <h1 className="font-poppins text-center text-5xl font-bold">
          {" Ibrahim Memon!"}
        </h1>
        <h3>{"I do code & play "}</h3>
        <p className="mx-5 text-center text-xs/6 md:mx-30">
          {
            "Passionate Software Engineer with a focus on React Native development, dedicated to crafting elegant and user-friendly mobile applications."
          }
        </p>
        <Button className="button-primary-3">Contact Me</Button>
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="font-poppins text-5xl">ABOUT ME</h2>
        <h3 className="text-gradient text-center">EXPLORE NOW</h3>
        <p className="mx-5 text-center text-xs/6 md:mx-30">
          <span className="mb-3 block">
            {
              " As a passionate software engineer, I thrive on theintricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation."
            }
          </span>
          <span>
            {
              "With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of what's possible"
            }
          </span>
        </p>
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="font-poppins text-5xl">EXPERIENCE</h2>
        <h3 className="text-gradient text-center">EXPLORE NOW</h3>
        <div className="flex flex-col gap-2 text-center md:w-full md:flex-row md:justify-around">
          <h4>
            <span className="font-bold">WebHR</span> / Software Engineer
          </h4>
          <p>MAY 2022 - PRESENT, HYDERABAD</p>
        </div>
        <p className="mx-5 text-center text-xs/6 md:mx-30">
          <span className="mb-3 block">
            {
              " Currently, I am working on WebHR Mobile Application, WebHR is a Cloud based Social HR Software for SMEs by Verge Systems Inc. WebHR is currently used in over 160 countries world wide by thousands of organizations to manage HR, As a React.js developer with 1.5 year of experience, I have a strong foundation in creating dynamic and responsive mobile and web applications."
            }
          </span>
          <span>
            {
              "My experience with React Native has allowed me to develop cross-platform mobile applications that run seamlessly on both iOS and Android platforms. Additionally, my proficiency in React.js has equipped me with the skills to create fast, scalable, and dynamic  web pages with excellent user experiences. I have a deep understanding of component-based architecture and state management, and I am well-versed in the latest web development trends and technologies."
            }
          </span>
        </p>
        <div className="flex flex-row justify-center gap-3 md:w-2/3 md:justify-start">
          <Button className="button-gradient">
            <div className="button-gradient-div">React Native</div>
          </Button>
          <Button className="button-gradient">
            <div className="button-gradient-div">React</div>
          </Button>
          <Button className="button-gradient">
            <div className="button-gradient-div">JavaScript</div>
          </Button>
          <Button className="button-gradient">
            <div className="button-gradient-div">TypeScript</div>
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="font-poppins text-5xl">PROJECTS</h2>
        <h3 className="text-gradient text-center">EXPLORE NOW</h3>
        <div className="grid w-4/5 grid-cols-1 gap-4 md:grid-cols-2">
          <Project
            title="WebHR"
            imgUrl="/image-2.webp"
            description="Designed a modern UI website comprising more than 50 screens, along with the integration of a blog using Next.js."
            imgAlt="WebHR"
          />
          <Project
            title="HireSide"
            imgUrl="/image-3.webp"
            description="Developed a web application on Next.js that allows users to apply for jobs, create job posts, and manage their company profiles. "
            imgAlt="HireSide"
          />
          <Project
            title="Verge Systems"
            imgUrl="/image-5.webp"
            description="Developed the Verge Systems website using React.js.."
            imgAlt="Verge Systems"
          />
          <Project
            title="Payoasis"
            imgUrl="/image-7.webp"
            description="Designed the modern UI for a banking website utilizing Gatsby."
            imgAlt="Payoasis"
          />
        </div>
      </section>
    </main>
  );
};
export default Main;
