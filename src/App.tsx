import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProjectPage from "./ProjectPage";
import { ProjectEntry, PortfolioPageEntry } from "./types";
import client from "./client";

import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";

import "./App.scss";

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
  // const [projects, setProjects] = useState<ProjectEntry[]>([]);
  // const [categories, setCategories] = useState<string[]>([]);

  // const fetchContent = async () => {
  //   const entry = await client.getEntry<PortfolioPageEntry>(
  //     PORTFOLIO_PAGE_ENTRY_ID,
  //     {
  //       include: 4,
  //     }
  //   );
  //   setProjects(entry.fields.project);
  //   setCategories(parseCategories(entry.fields.project));
  // };

  // useEffect(() => {
  //   fetchContent();
  // }, []);

  // if (!projects.length) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <Switch>
        <main>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </main>
      </Switch>
      <span className="copyright">
        ©PorschaPresent - {new Date().getFullYear()}
      </span>
    </>
  );
};

export default App;
