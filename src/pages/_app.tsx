import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { RouteChange } from 'components';
import { change, resizer } from 'utils';
import 'assets/styles/main.scss';
import { ToastHolder } from 'components/toast/ToastHolder';
import { SetClientAvailability } from 'hooks/useIsClient';
import { blogCategoryItemType } from 'types';

export const BLOGCATEGORIES: blogCategoryItemType[] = [
  { id: 411, description: 'Feel the pulse of culture', name: 'Culture', slug: 'culture' },
  {
    id: 3,
    description: 'We talk to all sorts of interesting guests and unearth their wisdom.',
    name: 'Interviews',
    slug: 'interviews'
  },
  {
    id: 6,
    description: 'Releases, Reviews and More. Experience the best music from our community and beyond.',
    name: 'Music',
    slug: 'music'
  },
  {
    id: 410,
    description: ' In-depth music, where we dissect the latest tracks and albums, and uncover hidden gems.',
    name: 'Reviews',
    slug: 'reviews'
  }
];

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [state, setState] = useState({
    isMobile: false,
    deviceWidth: 0,
    showMobileView: false,
    timeOutTrigger: 0,
    clientMode: false
  });

  const { isMobile, deviceWidth, showMobileView, clientMode } = state;

  const currentPath = router.pathname.trim();

  const unProtectedRoutes: string[] = [
    '',
    '/',
    '/creative',
    '/events',
    '/labels',
    '/blog',
    '/blog/[category]',
    '/blog/[category]/[slug]',
    '/blog/posts/[slug]',
    '/blog/search',
    '/studio',
  ];

  const redirectCondition = ![...unProtectedRoutes].includes(currentPath);

  const resizeListener = (mode: 'add' | 'remove') => {
    window?.[mode === 'add' ? 'addEventListener' : 'removeEventListener']?.(
      'resize',

      () =>
        resizer(
          e => change(e, 'isMobile', setState),
          e => change(e, 'deviceWidth', setState)
        ),

      false
    );
  };

  useEffect(() => {
    // On first load, this function sets the values obtained for client width and height.

    if (clientMode && window && document) {
      resizeListener('add');

      change(document?.body?.clientWidth < 601, 'isMobile', setState);

      change(document?.body?.clientWidth, 'deviceWidth', setState);
    }

    return () => {
      if (clientMode && window) {
        resizeListener('remove');
      }
    };

    //eslint-disable-next-line
  }, [clientMode]);

  useEffect(() => {
    change(isMobile, 'showMobileView', setState);
  }, [isMobile]);

  useEffect(() => {
    if (![...unProtectedRoutes].includes(currentPath)) {
      router.replace('/');
    }

    //eslint-disable-next-line
  }, [redirectCondition]);

  SetClientAvailability(e => change(e, 'clientMode', setState));

  // fetch categories
  const [blogCategories, setBlogCategories] = useState(BLOGCATEGORIES);

  useEffect(() => {
    (async () => {
      let categories: any = await fetch(
        `https://blog-admin.wetalksound.co/wp-json/wp/v2/categories?_fields=id,slug,name,description`
      );
      categories = await categories.json();
      categories = categories.filter((item: blogCategoryItemType) => item.slug !== 'uncategorized');
      localStorage.setItem('BLOGCATEGORIES', JSON.stringify(categories));
      setBlogCategories(categories);
    })();
  }, []);

  return (
    <Provider store={store}>
      {redirectCondition ? (
        <></>
      ) : (
        <>
          <ToastHolder />

          <RouteChange />

          <Component
            {...pageProps}
            blogCategories={blogCategories}
            isMobile={showMobileView}
            deviceWidth={deviceWidth}
            clientMode={clientMode}
          />
        </>
      )}
    </Provider>
  );
}

export default App;
