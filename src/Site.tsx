import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import { Switch, Link, Route } from "react-router-dom";
import { SiteEntry, InfoPageEntry, SocialLinkEntry } from "./types";
import InfoPage from "./InfoPage";

const client = createClient({
  space: "slf1pxre7bzy",
  accessToken: "gEYhz1IthRLAMD8-86v7xaoOsTCIYLRJPe7gvcxPgZQ",
});

const SITE_ENTRY_ID = "qwKqDIZYftif6nB9MuUFo";

const parseNavigation = (content: SiteEntry) => [];

const isInfoPage = (content: NavigationDef): boolean => true;

type NavigationDef = {
  title: string;
  path: string;
  content: Array<InfoPageEntry | SocialLinkEntry>;
};

const Site: React.FC = () => {
  const [content, setContent] = useState<SiteEntry>();
  const [navigation, setNavigation] = useState<Array<NavigationDef>>();

  const fetchContent = async () => {
    const entry = await client.getEntry<SiteEntry>(SITE_ENTRY_ID, {
      include: 4,
    });
    setContent(entry.fields);
    setNavigation(parseNavigation(entry.fields));
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <>
      <header>
        <h1>
          <a href="/">Porscha Present</a>
        </h1>
      </header>
      <nav>
        {navigation.map((nav) => (
          <Link to={nav.path}>{nav.title}</Link>
        ))}
      </nav>
      <main>
        <Switch>
          {navigation.map((nav) =>
            isInfoPage(nav) ? (
              <Route path={nav.path}>
                <InfoPage content={(nav.content as unknown) as InfoPageEntry} />
              </Route>
            ) : (
              ""
            )
          )}
        </Switch>
      </main>
    </>
  );
};

export default Site;
