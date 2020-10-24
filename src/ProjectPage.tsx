import * as React from "react";
import {
  documentToReactComponents,
  NodeRenderer,
} from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, INLINES } from "@contentful/rich-text-types";

import { ProjectEntry } from "./types";

const renderAsset: NodeRenderer = (asset) => {
  return (
    <img
      src={asset.data.target.fields.file.url}
      alt={asset.data.target.fields.description || ""}
    />
  );
};

const ProjectPage: React.FC<{ project: ProjectEntry }> = ({
  project,
}: {
  project: ProjectEntry;
}) => {
  return (
    <article className="ProjectPage">
      <img src={project.fields.coverImage.fields.file.url} />
      <h2>{project.fields.title}</h2>
      <p>{project.fields.shortDescription}</p>
      <div className="ProjectPage__Description">
        {documentToReactComponents(project.fields.description, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: renderAsset,
          },
        })}
      </div>
    </article>
  );
};

export default ProjectPage;
