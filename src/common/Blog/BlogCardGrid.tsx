import React from 'react';
import Link from 'next/link';
import { transformStory } from 'utils';
import * as He from 'he';
import { blogItemType } from 'types';

const BlogCardGrid = ({ title, action, variant, items = [], actionText = 'See More', showAction = true }: Props) => {
  // transform each item
  const transItems = items.map(item => transformStory(item || {}) || item);

  return (
    <section className="page-blog-blogcard">
      {title && <h3 className="page-blog-blogcard-header">{title}</h3>}

      <div className={`page-blog-blogcard-grid ${variant}`}>
        {transItems.map((item, idx) => (
          <Link
            key={idx}
            href={`/blog/${item?.category?.toLowerCase() || 'all'}/${item?.item?.slug}`}
            className="page-blog-blogcard-item"
          >
            <img src={item?.image} />
            <div className="page-blog-blogcard-item-content">
              {variant !== 'videos' && (
                <>
                  <div>
                    <span className="category">{item?.category || 'All'}</span>
                    <span>{item?.date}</span>
                  </div>
                  <div className="author">By {item?.author}</div>
                </>
              )}
              <h4 className="title">{He.unescape(item?.title || '')}</h4>
              <p className="description">{item?.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {showAction && (
        <div className="page-blog-blogcard-action">
          <button onClick={action}>{actionText}</button>
        </div>
      )}
    </section>
  );
};

interface Props {
  title?: string;
  items?: blogItemType[];
  action?: () => void;
  showAction?: boolean; // set props value as false if you don't want to show button
  actionText?: string;
  variant?: 'default' | 'topreads' | 'videos';
}

export default BlogCardGrid;
