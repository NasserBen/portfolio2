import ProjectItem from "./projectItem";

const Projects: React.FC = () => {
  return (
    <div>
      <ul>
        <ProjectItem
          title="👨‍🍳 SnapChef"
          description="food social media"
          technologies={["Next.js", "MongoDB", "AWS"]}
          link="https://snapchefapp.vercel.app/"
        />
        <ProjectItem
          title="🏋️ Fitness Tracker"
          description="fitness tracker"
          technologies={["React Native", "Fast API", "Docker"]}
          link="https://github.com/ale18V/Fitcker"
        />
        <ProjectItem
          title="💊 Medisearch"
          description="medicine info search"
          technologies={["Next.js", "OpenFDA", "Figma"]}
          link="https://medisearchapp.vercel.app/"
        />
        <ProjectItem
          title="✅ Efficiently"
          description="to-do productivity manager"
          technologies={["React.js", "Firebase", "Material UI"]}
          link="https://efficiently.app/"
        />
        <ProjectItem
          title="👕 T-Shirt Shop"
          description="payments using stripe"
          technologies={["Next.js", "Dynamo DB", "Stripe"]}
          link="https://github.com/pythagoreaneng/shop"
        />
      </ul>
    </div>
  );
};

export default Projects;
