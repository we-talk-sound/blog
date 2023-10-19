import React from 'react';
import Link from 'next/link';

const BlogCardGrid = ({ title, action, variant, items = [], actionText = 'See More', showAction = true }: Props) => {
  return (
    <section className="page-blog-blogcard">
      {title && <h3 className="page-blog-blogcard-header">{title}</h3>}

      <div className={`page-blog-blogcard-grid ${variant}`}>
        {items.map((_, idx) => (
          <Link
            key={idx}
            href="/blog/posts/american-sierra-leonean-artist-laik-returns-to-the-scene-with-new-single-ahje"
            className="page-blog-blogcard-item"
          >
            {/* <div > */}
            <img />
            <div className="page-blog-blogcard-item-content">
              {variant !== 'videos' && (
                <>
                  <div>
                    <span className="category">Music</span>
                    <span>Saturday, September 3, 2022</span>
                  </div>
                  <div className="author">By Wetalksound</div>
                </>
              )}
              <h4 className="title">Rave And Roses Twitter Analysis and a couple of others</h4>
              {variant === 'topreads' && (
                <p className="description">
                  Showing no signs of slowing down, Lojay’s new single, “Leader!” adds yet another string to his bow.
                  Showing no signs of slowing down, Lojay’s new single, “Leader!” adds yet another string to his bow.
                </p>
              )}
            </div>
            {/* </div> */}
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
