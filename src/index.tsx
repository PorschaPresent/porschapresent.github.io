import * as React from "react";
import * as ReactDOM from "react-dom";
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

const App = () => {
  const [projects, setProjects] = React.useState<ProjectEntry[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);

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

  React.useEffect(() => {
    fetchContent();
  }, []);

  if (projects.length) {
    return (
      <Router>
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
      </Router>
    );
  } else {
    return <div>loading</div>;
  }
};

const appRootEl = document.getElementById("app-root");
ReactDOM.render(<App />, appRootEl);
