import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div>
      <div className="max-w-[700px]">
        <p className="text-gray-600 text-lg">
          👋 Hey I'm <span className="font-bold">Nasser Ben</span>!
          <br />
          👨‍💻 I am a fullstack web developer.
          <br />
          🌱 I am currently working on
          <Link
            href="snapchefapp.vercel.app"
            className="underline text-blue-500 hover:text-blue-700 ml-2"
          >
            Snapchef
          </Link>
          . <br />
          🏫 I am a student at University of California, Riverside.
          <br />
          📚 I am majoring in Computer Science.
          <br />
          📍 I'm a based in Los Angeles. <br />
        </p>
      </div>
    </div>
  );
};

export default Hero;
