import * as React from "react";
import { ProjectEntry } from "./types";

const ProjectPage: React.FC<{ project: ProjectEntry }> = ({
  project,
}: {
  project: ProjectEntry;
}) => {
  return (
    <div>
      <img src={project.fields.coverImage.fields.file.url} />
      <h2>{project.fields.title}</h2>
      <p>{project.fields.shortDescription}</p>
    </div>
  );
};

export default ProjectPage;
