import React, { useEffect, useState } from "react";
import client from "./client";
import { Entry, EntryFields } from "contentful";

type Link = Entry<{
  title: EntryFields.Text;
  url: EntryFields.Text;
}>;

type AboutPage = Entry<{
  title: EntryFields.Text;
  bioTitle: EntryFields.Text;
  bio: EntryFields.Text;
  links: Link[];
  profileImage: EntryFields.Object;
}>;

const About: React.FC = () => {
  const [content, setContent] = useState<AboutPage>();

  const fetchContent = async () => {
    setContent(await client.getEntry("2xzjWcsjlqvTkipSn6G68L", { include: 4 }));
  };

  useEffect(() => {
    fetchContent();
  }, []);

  if (!content) {
    return <p>"Loading..."</p>;
  }
  console.log(content.fields.profileImage);
  return (
    <div className="About">
      <h2>{content.fields.title}</h2>
      <img
        src={content.fields.profileImage.fields.file.url}
        alt={content.fields.profileImage.fields.description}
      />
      <h3>{content.fields.bioTitle}</h3>
      <p>{content.fields.bio}</p>
      {content.fields.links.map((link, idx) => (
        <a key={link.sys.id} href={link.fields.url}>
          {link.fields.title}
        </a>
      ))}
    </div>
  );
};

export default About;
