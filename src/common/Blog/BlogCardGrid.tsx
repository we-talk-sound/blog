import React from 'react';
import Link from 'next/link';
import { transformStory } from 'utils';
import * as He from 'he';

const BlogCardGrid = ({ title, action, variant, items = [], actionText = 'See More', showAction = true }: Props) => {
  const videos = variant === 'videos';
  // transform each item
  const transItems = videos ? items : items.map(item => transformStory(item || {}) || item);

  return (
    <section className="page-blog-blogcard">
      {title && <h3 className="page-blog-blogcard-header">{title}</h3>}
      <div className={`page-blog-blogcard-grid ${variant}`}>
        {transItems.map((item, idx) => (
          <Link
            key={idx}
            href={
              videos
                ? `https://youtube.com/watch?v=${item.id.videoId}`
                : `/blog/${item?.category?.toLowerCase() || 'all'}/${item?.item?.slug}`
            }
            className="page-blog-blogcard-item"
            target={videos ? '_blank' : '_self'}
          >
            <div className="page-blog-blogcard-item-image">
              <img src={videos ? item?.snippet?.thumbnails?.high?.url : item?.image} />
              {videos && (
                <div className="image-overlay">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M10,16.5V7.5L16,12M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <div className="page-blog-blogcard-item-content">
              {!videos && (
                <>
                  <div>
                    <span className="category">{item?.category || 'All'}</span>
                    <span>{item?.date}</span>
                  </div>
                  <div className="author">By {item?.author}</div>
                </>
              )}
              <h4 className="title">{He.unescape(videos ? item?.snippet.title : item?.title || '')}</h4>
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
  items?: any[];
  action?: () => void;
  showAction?: boolean; // set props value as false if you don't want to show button
  actionText?: string;
  variant?: 'default' | 'topreads' | 'videos';
}

export default BlogCardGrid;
