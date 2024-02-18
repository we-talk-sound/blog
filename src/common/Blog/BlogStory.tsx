import { ComponentHolder } from 'components';
import React from 'react';
import { blogItemType } from 'types';

export const BlogStory: React.FC<Props> = ({ story }) => {
  return (
    <ComponentHolder className="no-border page-events-expanded-body" bodyClass="page-zero-content">
      <div className="page-events-expanded-body-content">
        {story?.content?.rendered && <div dangerouslySetInnerHTML={{ __html: story?.content?.rendered }} />}
      </div>
    </ComponentHolder>
  );
};

interface Props {
  story: blogItemType;
}
