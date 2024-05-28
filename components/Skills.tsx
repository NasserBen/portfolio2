import Image from "next/image";
import Link from "next/link";
import { skillList } from "../data/skillList";

const Skills = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-wrap">
        {skillList.map((skill, index) => (
          <div key={index} className="flex w-1/4">
            <Image
              className="mr-2 mb-2"
              src={skill.image}
              alt={skill.name}
              width={25}
              height={25}
            />
            <Link href={skill.link} target="_blanks">
              <p className="cursor-pointer hover:underline text-blue-500">
                {skill.name}
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* Certifications */}

      <div className="flex items-center mt-10">
        <Image
          className="mr-2"
          src="/assets/svgs/aws.svg"
          alt="AWS Certified Cloud Practitioner"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <p>AWS Certified Cloud Practitioner</p>
          <p className="text-gray-500">June 2024</p>
        </div>
      </div>

      <div className="flex items-center mt-5">
        <Image
          className="mr-2 rounded-md"
          src="/assets/smc.png"
          alt="Cloud Computing Department Certificate"
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <p>Cloud Computing Department Certificate</p>
          <p className="text-gray-500">June 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
