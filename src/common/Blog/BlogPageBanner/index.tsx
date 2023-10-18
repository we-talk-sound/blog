import React from 'react';
import { ComponentHolder } from 'components';
import { Header } from 'layout/LandingLayout/header';
import { BaseBlogHeading } from 'common/Blog/BaseBlog/BaseBlogHeading';
// import { BlogBanner } from 'common/PageZero/BlogBanner';
import { transformStory } from 'utils/blog';
import { blogItemType, storeBlogEntry, storeInterface } from 'types';
import BlogHeroSection from './BlogHeroSection';
import { useSelector } from 'react-redux';

export const BlogPageBanner: React.FC<Props> = ({
  isMobile,
  deviceWidth,
  story,
  // dataSource,
  // dataSourceLoader,
  // slug,
  category,
  text,
  items
}) => {
  const story_ = story ? { ...transformStory(story, false) } : undefined;

  const { categories }: storeBlogEntry = useSelector((store: storeInterface) => store.blog);
  const categoryDescription = category ? categories.slugPairs[category as string].description : '';

  return (
    <ComponentHolder className="no-border page-blog" bodyClass="page-zero-content">
      <Header withFrame={true} isMobile={isMobile} deviceWidth={deviceWidth} active={'/blog'} />

      {/* {(!slug && !story_) && <BaseBlogHeading category={String(category)} />} */}
      <BaseBlogHeading category={String(category)} />

      {/* <BlogBanner
        bannerMode={true}
        story={story_}
        slug={slug ? String(slug) : undefined}
        dataSource={dataSource}
        dataSourceLoader={dataSourceLoader}
      /> */}
      <BlogHeroSection story={story_} text={text} items={items} categoryDescription={categoryDescription} />
    </ComponentHolder>
  );
};

interface Props {
  isMobile: boolean;
  deviceWidth: number;
  story?: blogItemType;
  // dataSource?: blogItemType[];
  items?: blogItemType[];
  // dataSourceLoader?: boolean;
  slug?: string;
  category?: string;
  text?: string;
}
