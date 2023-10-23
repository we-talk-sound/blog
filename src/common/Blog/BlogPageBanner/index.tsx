import React from 'react';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { BaseBlogHeading } from 'common/Blog/BaseBlog/BaseBlogHeading';
import { BlogBanner } from 'common/PageZero/BlogBanner';
import { transformStory } from 'utils/blog';
import { blogItemType } from 'types';
import BlogHeroSection from './BlogHeroSection';

export const BlogPageBanner: React.FC<Props> = ({
  isMobile,
  deviceWidth,
  story,
  dataSource,
  dataSourceLoader,
  slug,
  category,
  categoryDescription,
  text,
  items
}) => {
  const story_ = story ? { ...transformStory(story, false) } : undefined;

  return (
    <ComponentHolder className="no-border page-blog" bodyClass="page-zero-content">
      <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} active={'/blog'} />

      <BaseBlogHeading category={String(category)} />

     { false && <BlogBanner
        bannerMode={true}
        story={story_}
        slug={slug ? String(slug) : undefined}
        dataSource={dataSource}
        dataSourceLoader={dataSourceLoader}
      />}
      <BlogHeroSection story={story_} text={text} items={items} categoryDescription={categoryDescription} />
    </ComponentHolder>
  );
};

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  story?: blogItemType;
  dataSource?: blogItemType[];
  items?: blogItemType[];
  dataSourceLoader?: boolean;
  slug?: string;
  category?: string;
  categoryDescription?: string;
  text?: string;
}
