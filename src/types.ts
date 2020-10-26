import * as contentful from "contentful";

export type ProjectEntry = contentful.Entry<{
  coverImage: contentful.EntryFields.Object;
  title: contentful.EntryFields.Text;
  shortDescription: contentful.EntryFields.Text;
  category: contentful.EntryFields.Text;
  categories: contentful.EntryFields.Text[];
  description: contentful.EntryFields.RichText;
}>;

export type PortfolioPageEntry = contentful.Entry<{
  project: contentful.Entry<ProjectEntry>[];
}>;

export type SiteEntry = contentful.Entry<{
  title: contentful.EntryFields.Text;
  links: Array<InfoPageEntry | SocialLinkEntry>;
}>;

export type InfoPageEntry = contentful.Entry<{
  projects: ProjectEntry[];
  title: contentful.EntryFields.Text;
  bio: contentful.EntryFields.RichText;
}>;

export type SocialLinkEntry = contentful.Entry<{
  type: contentful.EntryFields.Text;
  url: contentful.EntryFields.Text;
}>;
