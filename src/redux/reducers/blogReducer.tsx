import * as blogTypes from 'redux/types/blogTypes';
import { blogCategoryItemType, blogEntryTypes, blogPageData, storeBlogEntry } from 'types/storeTypes';
import { shallowCompare } from 'utils';

const base = {
  data: [],
  page: 1,
  perPage: 20,
  pageCount: 1,
  loader: false,
  queryParam: {},
  error: false
};

const baseCategoryPairs = {
  '1': {
    id: 1,
    description: '',
    name: 'Uncategorized',
    slug: 'uncategorized'
  },
  '2': {
    id: 2,
    description: 'Community. Because we are stronger together than on our own. Articles about community-building.',
    name: 'Community',
    slug: 'community'
  },
  '3': {
    id: 3,
    description: 'We talk to all sorts of interesting guests and unearth their wisdom.',
    name: 'Conversations',
    slug: 'conversations'
  },
  '4': {
    id: 4,
    description:
      // eslint-disable-next-line max-len
      "From networking opportunities and industry workshops to concerts and shows by your favourite artistes and brands, we've got something for everyone.",
    name: 'Events',
    slug: 'events'
  },
  '5': {
    id: 5,
    description: 'Data deep dives and introspective thought pieces, we take a look behind the curtain.',
    name: 'Insights',
    slug: 'insights'
  },
  '6': {
    id: 6,
    description: 'Releases, Reviews and More. Experience the best music from our community and beyond.',
    name: 'Music',
    slug: 'music'
  },
  '7': {
    id: 7,
    description:
      // eslint-disable-next-line max-len
      'We pride ourselves on discovering and nurturing talented artists from a wide range of musical genres. From Afrobeats and HipHop, to Alte &amp; other niche sounds.',
    name: 'Record Label',
    slug: 'labels'
  }
};

const baseSlugPairs = {
    'uncategorized': {
        id: 1,
        description: '',
        name: 'Uncategorized',
        slug: 'uncategorized'
      },
      'community': {
        id: 2,
        description: 'Community. Because we are stronger together than on our own. Articles about community-building.',
        name: 'Community',
        slug: 'community'
      },
      'conversations': {
        id: 3,
        description: 'We talk to all sorts of interesting guests and unearth their wisdom.',
        name: 'Conversations',
        slug: 'conversations'
      },
      'events': {
        id: 4,
        description:
          // eslint-disable-next-line max-len
          "From networking opportunities and industry workshops to concerts and shows by your favourite artistes and brands, we've got something for everyone.",
        name: 'Events',
        slug: 'events'
      },
      'insights': {
        id: 5,
        description: 'Data deep dives and introspective thought pieces, we take a look behind the curtain.',
        name: 'Insights',
        slug: 'insights'
      },
      'music': {
        id: 6,
        description: 'Releases, Reviews and More. Experience the best music from our community and beyond.',
        name: 'Music',
        slug: 'music'
      },
      'labels': {
        id: 7,
        description:
          // eslint-disable-next-line max-len
          'We pride ourselves on discovering and nurturing talented artists from a wide range of musical genres. From Afrobeats and HipHop, to Alte &amp; other niche sounds.',
        name: 'Record Label',
        slug: 'labels'
      }
};

const initialState: storeBlogEntry = {
  dashboardBlogs: base,

  blogCategoryStories: { ...base, categoryData: {} },

  categories: {
    data: [],
    pairs: baseCategoryPairs,
    slugPairs: baseSlugPairs,
    page: 1,
    perPage: 20,
    pageCount: 1,
    loader: false,
    queryParam: {},
    error: false
  },

  blogSingleStories: {}
};

const createCategoryPairs = (categories: blogCategoryItemType[], useSlug?: boolean) => {
  const categoryPairs: { [key: string | number]: blogCategoryItemType } = {};

  categories.forEach(item => (categoryPairs[useSlug ? item.slug : item.id] = item));

  return categoryPairs;
};

const dataToStore = (
  state: { categoryData: { [key: string]: blogPageData } },

  data: Array<blogEntryTypes>,

  ref: blogEntryTypes,

  params: { page?: number; category?: string }
) => {
  if (ref === 'blogCategoryStories' && params?.category) {
    return {
      categoryData: state?.categoryData?.[params?.category]
        ? {
            ...state?.categoryData,

            [params?.category]: {
              ...state?.categoryData?.[params?.category],

              [params?.page || 1]: data
            }
          }
        : {
            ...state?.categoryData,

            [params?.category]: { [params?.page || 1]: data }
          },

      loader: false
    };
  }

  return { data };
};

const blogReducer = (state = initialState, action: { [key: string]: any }) => {
  const ref = action?.payload?.ref as blogEntryTypes;

  const affectedState = state?.[ref as 'dashboardBlogs' | 'categories' | 'blogCategoryStories'];

  switch (action.type) {
    case blogTypes.RETRIEVE_STORIES_START:
    case blogTypes.RETRIEVE_CATEGORIES_START:
    case blogTypes.RETRIEVE_CATEGORY_STORIES_START:
      return {
        ...state,

        [ref]: {
          ...state[ref],

          loader:
            !affectedState?.data?.length ||
            !shallowCompare(affectedState?.queryParam || {}, action?.payload?.queryParam),

          pageLoader: !shallowCompare(affectedState?.queryParam || {}, action?.payload?.queryParam),

          queryParam: action?.payload?.queryParam
        }
      };

    case blogTypes.RETRIEVE_STORIES_SUCCESS:
    case blogTypes.RETRIEVE_CATEGORIES_SUCCESS:
    case blogTypes.RETRIEVE_CATEGORY_STORIES_SUCCESS:
      return {
        ...state,
        [ref]: {
          ...state[ref],
          loader: false,
          pageLoader: false,

          ...dataToStore(state?.[ref] as any, action.payload.items, ref, affectedState?.queryParam),

          ...(ref === 'categories'
            ? {
                pairs: createCategoryPairs(action?.payload?.items),
                slugPairs: createCategoryPairs(action?.payload?.items, true)
              }
            : {})
        }
      };

    case blogTypes.RETRIEVE_STORIES_FAILURE:
    case blogTypes.RETRIEVE_CATEGORIES_FAILURE:
      return {
        ...state,
        [ref]: {
          ...state[ref],
          loader: false,
          error: true
        }
      };

    case blogTypes.RETRIEVE_STORY_SUCCESS:
      return {
        ...state,

        [ref]: {
          ...(state?.[ref] || {}),

          [action?.payload?.items?.[0]?.slug]: action?.payload?.items?.[0]
        }
      };

    default:
      return state;
  }
};

export default blogReducer;
