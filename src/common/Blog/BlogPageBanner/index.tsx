import React from 'react';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { BaseBlogHeading } from 'common/Blog/BaseBlog/BaseBlogHeading';
// import { transformStory } from 'utils/blog';
import { blogCategoryItemType, blogItemType } from 'types';
// import BlogHeroSection from './BlogHeroSection';

export const BlogPageBanner: React.FC<Props> = ({
  isMobile,
  deviceWidth,
  // story,
  category,
  allCategories = []
  // categoryDescription,
  // text,
  // items
}) => {
  // const story_ = story ? { ...transformStory(story, allCategories, false) } : undefined;

  return (
    <ComponentHolder className="no-border page-blog" bodyClass="page-zero-content">
      <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} active={'/blog'} />

      <BaseBlogHeading category={String(category)} allCategories={allCategories} />
      {/* <BlogHeroSection
        story={story_}
        text={text}
        items={items}
        categoryDescription={categoryDescription}
        allCategories={allCategories}
      /> */}
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
  allCategories?: blogCategoryItemType[];
}
