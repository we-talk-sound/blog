import React from 'react';
import * as He from 'he';
import Link from 'next/link';

const BlogHeroSection = ({ story, text, items, categoryDescription }: Props) => {
  return (
    <section className="page-blog-hero">
      {/* multiple */}
      {items?.length ? (
        <div className="page-blog-hero-multiple">
          {categoryDescription && <p className="category-description">{categoryDescription}</p>}
          <div className="grid">
            {items.map((_, idx) => (
              <div key={idx} className={`grid-item ${idx === 1 || idx === 4 ? 'span-2' : ''}`}>
                <Link href="/blog/posts/american-sierra-leonean-artist-laik-returns-to-the-scene-with-new-single-ahje">
                  <img />
                  <div className="grid-item-content">
                    <div>
                      <span className="category">Music</span>
                      <span>Saturday, September 3, 2022</span>
                    </div>
                    <div className="author">By Wetalksound</div>
                    <h4 className="title">Omah Lay releases his debut album Boy Alone on KeyQaad Records</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : // single
      story ? (
        <div className="page-blog-hero-single">
          <div>
            <span className="category">{story.category}</span> <span className="date">{story.date}</span>
          </div>
          <h2>{He.unescape(story.title)}</h2>
          <img src={story.image} width="100%" height="auto" />
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
  items?: any[];
  categoryDescription?: string;
}

export default BlogHeroSection;
