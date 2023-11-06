// import { Button } from 'components';
import { LinkWrapper } from 'components/LinkWrapper';
import { useRouter } from 'next/router';
// import { Marquee } from "components/Marquee";
import React, { FormEvent, useState } from 'react';
import { blogCategoryItemType } from 'types';
import { classnames } from 'utils';

type Props = { category: string; allCategories: blogCategoryItemType[] };

export const BaseBlogHeading: React.FC<Props> = ({ category, allCategories = [] }) => {
  const filters = allCategories.map(item => ({ title: item.name.toUpperCase(), link: item.slug }));

  const router = useRouter();
  const { q } = router.query;

  const [search, setSearch] = useState(q || '');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/blog/search?q=${search}`);
  };

  return (
    <div className="page-blog-holder-header">
      <div className="page-blog-holder-header-left">
        <div className="page-blog-holder-header-left-links">
          {filters.map(item => (
            <LinkWrapper
              link={`/blog/${item.link}`}
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
      </div>
    </div>
  );
};
