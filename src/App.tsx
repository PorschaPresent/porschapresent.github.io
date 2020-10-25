import React, { useEffect, useState } from 'react';
import * as contentful from "contentful";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import { ProjectEntry, PortfolioPageEntry } from "./types";
import Projects from "./Projects";
import Contact from "./Contact";

const client = contentful.createClient({
  space: "slf1pxre7bzy",
  accessToken: "gEYhz1IthRLAMD8-86v7xaoOsTCIYLRJPe7gvcxPgZQ",
});

const PORTFOLIO_PAGE_ENTRY_ID = "qwKqDIZYftif6nB9MuUFo";

const parseCategories = (projects: ProjectEntry[]) =>
  Array.from(
    new Set(
      projects.reduce(
        (col, project: ProjectEntry) => [
          ...col,
          ...(project.fields.categories || []),
          project.fields.category,
        ],
        []
      )
    )
  );

const App: React.FC = () => {
  const [projects, setProjects] = useState<ProjectEntry[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const fetchContent = async () => {
    const entry = await client.getEntry<PortfolioPageEntry>(
      PORTFOLIO_PAGE_ENTRY_ID,
      {
        include: 4,
      }
    );
    setProjects(entry.fields.project);
    setCategories(parseCategories(entry.fields.project));
  };

  useEffect(() => {
    fetchContent();
  }, []);
  
  if (!projects.length) {
    return <p>Loading...</p>;
  }

  return ( 
    <>
      <Link to="/contact">
        <div className="contactMe">Say Hi!</div>
      </Link>
      
      <Switch>
        {projects.map((project, idx) => (
          <Route path={`/project/${idx}`} key={idx}>
            <ProjectPage project={project} />
          </Route>
        ))}
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Projects projects={projects} categories={categories} />
        </Route>
      </Switch>
      <span className="copyright">
        ©PorschaPresent - {new Date().getFullYear()}
      </span>
    </>
  );
}

export default App;