const ProjectItem: React.FC<{
  title: string;
  description: string;
  technologies: string[];
}> = ({ title, description, technologies }) => {
  return (
    <li className="text-gray-500 flex justify-between mb-7">
      <div>
        <p className="text-blue-500 cursor-pointer hover:text-blue-800 hover:underline">
          {title}
        </p>
        <p className="">{description}</p>
        <div className="flex text-gray-400">
          {technologies.map((tech, index) => (
            <p
              key={index}
              className={`mr-2 text-sm ${
                index === technologies.length - 1 ? "" : "mr-2"
              }`}
            >
              {index === technologies.length - 1 ? tech : tech + ", "}
            </p>
          ))}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
