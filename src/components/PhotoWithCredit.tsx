import React from 'react';
import { Entry, EntryFields } from 'contentful';

export type PhotoWithCreditEntry = Entry<{
  title: EntryFields.Text;
  image: EntryFields.Object;
  photographer: EntryFields.Text;
  makeupArtist: EntryFields.Text;
}>;

const PhotoWithCredit: React.FC<{content: PhotoWithCreditEntry}> = ({content}) => {
  const {
    title,
    image,
    photographer,
    makeupArtist
  } = content.fields;
  console.log(content)
  return (
    <figure className="PhotoWithCredit">
      <img src={`https://${image.fields.file.url}`} alt={image.fields.description}/>
      {photographer && <figcaption><b>Photography:</b> {photographer} </figcaption>}
      {makeupArtist && <figcaption><b>Makeup:</b> {makeupArtist} </figcaption>}
    </figure>
  )
}

export default PhotoWithCredit;