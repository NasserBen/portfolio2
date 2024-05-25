import ProjectItem from "./projectItem";

const Projects: React.FC = () => {
  return (
    <div>
      <ul>
        <ProjectItem
          title="👨‍🍳 SnapChef"
          description="food social media"
          technologies={["Next.js", "MongoDB", "AWS"]}
        />
        <ProjectItem
          title="🏋️ Fitness Tracker"
          description="fitness tracker"
          technologies={["React Native", "Fast API", "Docker"]}
        />
        <ProjectItem
          title="💊 Medisearch"
          description="medicine info search"
          technologies={["Next.js", "OpenFDA", "Figma"]}
        />
        <ProjectItem
          title="✅ Efficiently"
          description="to-do productivity manager"
          technologies={["React.js", "Firebase", "Material UI"]}
        />
        <ProjectItem
          title="👕 T-Shirt Shop"
          description="payments using stripe"
          technologies={["Next.js", "Stripe API", "AWS DynamoDB"]}
        />
      </ul>
    </div>
  );
};

export default Projects;
