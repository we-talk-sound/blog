import React from 'react';
import * as He from 'he';
// import Link from 'next/link';
import { transformStory } from 'utils';
import { blogCategoryItemType, blogItemType } from 'types';

const BlogHeroSection = ({
  story,
  text,
  items = [],
  //  categoryDescription,
  allCategories = []
}: Props) => {
  // transform each item
  const transItems = items.map(item => transformStory(item || {}, allCategories) || item);

  return (
    <section className="page-blog-hero">
      {/* multiple */}
      {transItems?.length ? (
        // <div className="page-blog-hero-multiple">
        //   {categoryDescription && <p className="category-description">{categoryDescription}</p>}
        //   <div className="grid">
        //     {transItems.map((item, idx) => (
        //       <div key={idx} className={`grid-item ${idx === 1 || idx === 4 ? 'span-2' : ''}`}>
        //         <Link href={`/blog/${item?.category?.toLowerCase() || 'all'}/${item?.item?.slug}`}>
        //           <img src={item?.image} />
        //           <div className="grid-item-content">
        //             <div>
        //               <span className="category">{item?.category || 'All'}</span>
        //               <span>{item?.date}</span>
        //             </div>
        //             <div className="author">By {item?.author}</div>
        //             <h4 className="title">{He.unescape(item?.title || '')}</h4>
        //           </div>
        //         </Link>
        //       </div>
        //     ))}
        //   </div>
        // </div>
        <></>
      ) : // single
      story ? (
        <div className="page-blog-hero-single">
          <img src={story?.image} />
          <div>
            <span className="category">{story?.category}</span> <span className="date">{story?.date}</span>
          </div>
          <h2>{He.unescape(story?.title || '')}</h2>
        </div>
      ) : (
        // fallback - text
        <h2 className="page-blog-hero-fallback-text">{text}</h2>
      )}
    </section>
  );
};

interface Props {
  text?: string;
  story?: any;
  items?: blogItemType[];
  categoryDescription?: string;
  allCategories: blogCategoryItemType[];
}

export default BlogHeroSection;
