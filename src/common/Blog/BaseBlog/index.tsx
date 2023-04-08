import React from 'react';
import { TopReads } from './TopReads';
import { BlogCategories } from './BlogCategories';
// import { LatestArticles } from './LatestArticles';

export const BaseBlog: React.FC = ({ }) => {

    return (

        <>

            {/* <LatestArticles /> */}

            <TopReads />

            <BlogCategories />

        </>

    )
}
