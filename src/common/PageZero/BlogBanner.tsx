import React from 'react';
import { ComponentHolder, StoryItem } from 'components';
import { ExpandedButton } from 'components/ExpandButton';
import { classnames } from 'utils';
import { BlogBannerArticles } from 'common/Blog/BlogPageBanner/BlogBannerArticles';
import { blogItemType } from 'types';
import { StoriesItemPlaceHolder } from 'common/Placeholders';
import { Marquee } from 'components/Marquee';

export const BlogBanner: React.FC<Props> = ({ bannerMode, story, dataSource, dataSourceLoader, slug, sliderMode }) => {
  return (
    <ComponentHolder
      className="no-border"
      bodyClass={classnames(
        'blog-banner-background',
        bannerMode && 'page-blog-banner-parent',
        !bannerMode && 'page-zero-blog-banner'
      )}
    >
      {sliderMode && <Marquee text="Blog" />}

      <div
        className={classnames(
          'blog-banner-body',
          bannerMode && 'page-blog-banner-holder',
          (story || slug) && 'page-blog-banner-holder-with-story'
        )}
      >
        {story && slug && <StoryItem story={{ ...story, image: undefined }} mode={'story'} />}

        {!story && slug && (
          <StoriesItemPlaceHolder length={1} holderClass={'page-blog-story-loader'} extraTitle={true} />
        )}

        {/* The blog image is contained in the BlogBannerArticles Component */}

        <BlogBannerArticles
          bannerMode={bannerMode}
          withoutArticles={slug !== undefined ? true : story !== undefined}
          dataSource={dataSource || []}
          dataSourceLoader={dataSourceLoader}
          image={story?.image}
          slug={slug}
        />

        {!bannerMode && <ExpandedButton label="Go to blog" textClass="color-white" link={'/blog'} />}
      </div>
    </ComponentHolder>
  );
};

interface Props {
  dataSource?: Array<blogItemType>;

  dataSourceLoader?: boolean;

  bannerMode?: boolean;

  sliderMode?: boolean;

  slug?: string;

  story?: {
    title: string;

    category: string;

    author: string;

    date: string;

    image: string;
  };
}
