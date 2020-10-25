import React from 'react';
import { Entry } from 'contentful';
import { NodeRenderer } from '@contentful/rich-text-react-renderer';
import PhotoWithCredit, { PhotoWithCreditEntry } from '../components/PhotoWithCredit';

type SoundcloudEmbed = {
  trackCode: string;
}

type YoutubeEmbed = {
  youtubeVideoCode: string;
}

type EmbeddedEntryTypes = SoundcloudEmbed | SoundcloudEmbed | PhotoWithCreditEntry;

const renderEmbeddedEntry: NodeRenderer = (entry: Entry<EmbeddedEntryTypes>) => {
  if (entry.data.target.sys.contentType.sys.id === 'soundcloudEmbed') {
    const trackCode = entry.data.target.fields.trackCode;
    return (
      <iframe 
        width="100%" 
        height="300" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackCode}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}></iframe>
  } else
  if (entry.data.target.sys.contentType.sys.id === 'youtubeEmbed') {
    const videoCode = entry.data.target.fields.youtubeVideoCode;
    return (
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoCode}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    );
  } else 
  if (entry.data.target.sys.contentType.sys.id === 'photoWithCredit') {
    const content = entry.data.target;
    return <PhotoWithCredit content={content} />
  }
}

export default renderEmbeddedEntry;