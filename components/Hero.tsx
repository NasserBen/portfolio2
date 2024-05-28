"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const textToType = `👋 Hey I'm Nasser Ben!
      👨‍💻 I am a fullstack web developer.
      🌱 I am currently working on
      Snapchef.
      🏫 I am a student at University of California, Riverside.
      📚 I am majoring in Computer Science.
      📍 I am based in Los Angeles.`;

    let currentIndex = 0;
    let typingTimer: NodeJS.Timeout;

    const typeText = () => {
      setText((prevText) => prevText + textToType[currentIndex]);
      currentIndex++;

      if (currentIndex < textToType.length) {
        typingTimer = setTimeout(typeText, 20);
      } else {
        setIsTyping(false);
      }
    };

    typeText();

    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

  return (
    <div>
      <div className="max-w-[700px]">
        <p className="text-gray-600 text-lg">
          {isTyping ? (
            <span>{text}</span>
          ) : (
            <>
              👋 Hey I'm Nasser Ben!
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
              📍 I am based in Los Angeles. <br />
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Hero;
