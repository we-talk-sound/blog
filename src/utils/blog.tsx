import { store } from 'redux/store';
import { blogItemType } from 'types';
import { DD_MM_YY_HH_mm_a } from './date';

export const transformStory = (item: blogItemType, withLink?: boolean) => ({
  title: item?.title?.rendered,

  category: store.getState()?.blog?.categories?.pairs?.[item.categories?.[0]]?.name,

  link:
    withLink === false
      ? undefined
      : `/blog/${store.getState()?.blog?.categories?.pairs?.[item.categories?.[0]]?.name}/${item.slug}`,

  author: 'WETALKSOUND',

  date: DD_MM_YY_HH_mm_a(item.date),

  item,

  sub: item?.excerpt?.rendered,

  description: item?.yoast_head_json?.description,

  image: item?._embedded?.['wp:featuredmedia']?.[0]?.source_url,

  seoImage: item?._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium?.source_url
});
