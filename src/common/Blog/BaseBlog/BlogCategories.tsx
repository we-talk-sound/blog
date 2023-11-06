import React from 'react';
import { Button, ComponentHolder, ViewFormatter } from 'components';
import { blogCategoryItemType } from 'types';

type Props = { categories?: blogCategoryItemType[] };

export const BlogCategories = ({ categories = [] }: Props) => {
  const filters = categories.map(el => ({ title: el.name, value: el.description.toUpperCase() }));

  //   const filters = [
  //     {
  //       title: 'Culture',
  //       value: 'Feel the pulse of culture'
  //     },
  //     {
  //       title: 'Interviews',
  //       value: 'We talk to all sorts of interesting guests and unearth their wisdom'
  //     },
  //     {
  //       title: 'Reviews',
  //       value: 'In-depth music, where we dissect the latest tracks and albums, and uncover hidden gems.'
  //     },
  //     {
  //       title: 'Music',
  //       value: 'Releases, Reviews and More. Experience the best music from our community and beyond'
  //     }
  //   ];

  return (
    <ComponentHolder
      className="no-border page-blog-category-holder"
      headerClass="page-blog-category-header"
      title={'THE CATEGORIES'}
    >
      {filters.map((item, index) => (
        <div key={`category-item-${item.title}-${index}`} className="page-blog-category-item">
          <ViewFormatter {...item} />

          <Button className="no-bg max" label="See all Articles" link={`/blog/${item.title.toLowerCase()}`} />
        </div>
      ))}
    </ComponentHolder>
  );
};
