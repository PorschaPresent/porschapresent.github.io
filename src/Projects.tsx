import * as React from "react";
import { Link } from "react-router-dom";

import { ProjectEntry } from "./types";

const Project: React.FC<{
  project: ProjectEntry;
}> = ({
  project,
  projectIndex,
}: {
  project: ProjectEntry;
  projectIndex: number;
}) => {
  return (
    <div
      className="Project"
      style={{
        backgroundImage: `url(https://${project.fields.coverImage.fields.file.url})`,
      }}
    >
      <Link to={`/project/${projectIndex}`}>
        <h2>{project.fields.title}</h2>
      </Link>
    </div>
  );
};

const Projects: React.FC<{
  projects: ProjectEntry[];
  categories: string[];
}> = ({ projects, categories }) => {
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);
  return (
    <>
      <div className="Categories">
        {categories.map((category) => (
          <button
            className={activeFilters.includes(category) ? "active" : ""}
            onClick={() =>
              activeFilters.includes(category)
                ? setActiveFilters(activeFilters.filter((c) => c !== category))
                : setActiveFilters([...activeFilters, category])
            }
          >
            {" "}
            {category}{" "}
          </button>
        ))}
      </div>
      <div className="Projects">
        {projects.map((project: ProjectEntry, idx: number) =>
          activeFilters.includes(project.fields.category) ||
          activeFilters.length === 0 ? (
            <React.Fragment key={idx}>
              <Project project={project} projectIndex={idx} />
            </React.Fragment>
          ) : (
            <div />
          )
        )}
      </div>
    </>
  );
};

export default Projects;
