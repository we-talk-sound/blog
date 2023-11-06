// import { store } from 'redux/store';
import { blogCategoryItemType, blogItemType } from 'types';
import { DD_MM_YY_HH_mm_a } from './date';

export const transformStory = (item: blogItemType, blogCategories: blogCategoryItemType[] = [], withLink?: boolean) => {
  const getCategoryName = (categoryID: number) => {
    const item = blogCategories.find(el => el.id === categoryID) as blogCategoryItemType;
    return item.name;
  };

  return {
    title: item?.title?.rendered,

    category: getCategoryName(item?.categories?.[0]) || 'Uncategorized', //store.getState()?.blog?.categories?.pairs?.[item.categories?.[0]]?.name,

    link:
      withLink === false
        ? undefined
        : `/blog/${(getCategoryName(item?.categories?.[0]) || 'Uncategorized').toLowerCase()}/${item.slug}`,

    author: item?._embedded?.author?.[0]?.name || 'WETALKSOUND',

    date: DD_MM_YY_HH_mm_a(item.date),

    item,

    sub: item?.excerpt?.rendered,

    description: item?.yoast_head_json?.description,

    image: item?._embedded?.['wp:featuredmedia']?.[0]?.source_url,

    seoImage: item?._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url
  };
};
