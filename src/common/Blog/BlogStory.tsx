import { ComponentHolder } from 'components';
import React from 'react';
import { blogItemType } from 'types';
import { transformStory } from 'utils/blog';
import BlogCardGrid from './BlogCardGrid';

export const BlogStory: React.FC<Props> = ({ story }) => {
  const story_ = story ? { ...transformStory(story, false) } : undefined;

  const SOCIALS = [
    { key: 'linkedin', svg: '/svg/linkedin.svg' },
    { key: 'instagram', svg: '/svg/instagram.svg' },
    { key: 'twitter', svg: '/svg/twitter.svg' }
  ];

  const handleShare = (key: string) => {
    // eslint-disable-next-line no-alert
    alert('Sharing on ' + key);
  };

  return (
    <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
      <div className="page-events-expanded-body-content">
        {story?.content?.rendered && <div className='blog-story' dangerouslySetInnerHTML={{ __html: story?.content?.rendered }} />}
      </div>

      <div className="page-events-expanded-body-footer">
        <div className="page-events-expanded-body-footer-author">
          About Author: <span>{story_?.author}</span>
        </div>
        <div className="page-events-expanded-body-footer-share">
          <span>Share this Article: </span>
          {SOCIALS.map(social => (
            <button type="button" key={social.key} onClick={() => handleShare(social.key)}>
              <img src={social.svg} />
            </button>
          ))}
        </div>
      </div>

      <BlogCardGrid title={'Related Post'} showAction={false} items={[...Array(4)]} />
    </ComponentHolder>
  );
};

interface Props {
  story: blogItemType;
}
