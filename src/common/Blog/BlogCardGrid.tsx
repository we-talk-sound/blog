import React from 'react';

const BlogCardGrid = ({ title, action, video, items = [], actionText = 'See More', showAction = true }: Props) => {
  return (
    <section className="page-blog-blogcard">
      {title && <h3 className="page-blog-blogcard-header">{title}</h3>}

      <div className={`page-blog-blogcard-grid ${video ? 'videos' : ''}`}>
        {items.map((_, idx) => (
          <div key={idx} className="page-blog-blogcard-item">
            <img />
            <div className="page-blog-blogcard-item-content">
              {!video && (
                <>
                  <div>
                    <span className="category">Music</span>
                    <span>Saturday, September 3, 2022</span>
                  </div>
                  <div className="author">By Wetalksound</div>
                </>
              )}
              <h4 className="title">Rave And Roses Twitter Analysis and a couple of others</h4>
            </div>
          </div>
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
  video?: boolean;
}

export default BlogCardGrid;
