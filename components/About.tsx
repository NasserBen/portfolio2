import Image from "next/image";
import aboutImage from "../public/assets/about.jpeg";

const About: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col justify-start">
        <Image
          src={aboutImage}
          alt="Profile"
          className="rounded-full w-32 h-32 mb-4"
        />
        <p className="text-sm text-gray-700 mb-2">
          🏫 University of California, Riverside
        </p>
        <p className="text-sm text-gray-700 mb-2">
          📖 Bachelors in Computer Science
        </p>
        <p className="text-sm text-gray-700 mb-2">🎓 Expected 2024</p>
        <p className="text-md text-gray-600 mt-4">
          I am a computer science student, fullstack web developer, and an AWS
          Certified Cloud Practitioner who has a passion for bringing ideas to
          life. I am currently working on getting an AWS Solutions Architect
          certification.
        </p>
        <p className=" text-gray-600 mt-4">
          I am currently expanding my knowledge in Next.js, React Native, AWS,
          Docker, and Fast API. When I am not learning, you can find me keeping
          up to date with the latest tech or catch me playing soccer.
        </p>
      </div>
    </section>
  );
};

export default About;
