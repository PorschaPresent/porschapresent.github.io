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
