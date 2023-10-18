// import { Button } from 'components';
import { LinkWrapper } from 'components/LinkWrapper';
import { useRouter } from 'next/router';
// import { Marquee } from "components/Marquee";
import React, { FormEvent, useState } from 'react';
import { classnames } from 'utils';

export const BaseBlogHeading: React.FC<{ category?: string }> = ({ category }) => {
  const filters = [
    // {
    //   title: 'ALL',
    //   link: 'all'
    // },
    {
      title: 'COMMUNITY',
      link: 'community'
    },
    {
      title: 'CONVERSATIONS',
      link: 'conversations'
    },
    {
      title: 'INSIGHTS',
      link: 'insights'
    },
    {
      title: 'MUSIC',
      link: 'music'
    }
  ];

  const [search, setSearch] = useState('');

  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/blog/search?query=${search}`);
  };

  return (
    <div className="page-blog-holder-header">
      <div className="page-blog-holder-header-left">
        {/* <h1> THE BLOG </h1> */}

        <div className="page-blog-holder-header-left-links">
          {filters.map(item => (
            <LinkWrapper
              link={`/blog/categories/${item.link}`}
              key={`header-item-${item.title}`}
              scroll={false}
              preClick={() => {
                if (typeof window !== 'undefined') {
                  const blogBody = document.getElementsByClassName('page-blog-active-category-holder');

                  blogBody?.[0]?.scrollIntoView?.({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
                }
              }}
            >
              <span className={classnames(item.link === category?.toLowerCase() ? 'color-primary' : '')}>
                {item.title}
              </span>
            </LinkWrapper>
          ))}
        </div>
      </div>

      <div className="page-blog-holder-header-right">
        <form className="searchform" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search keyword..."
            value={search}
            required
            onChange={e => setSearch(e.target.value)}
          />
          <button>Go</button>
        </form>

        {/* <Marquee text="FEEL THE BEAT OF NIGERIA'S BIGGEST MUSIC COMMUNITY" />

                <Button label="Subscribe" /> */}
      </div>
    </div>
  );
};
