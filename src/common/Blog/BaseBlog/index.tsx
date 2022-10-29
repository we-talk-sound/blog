import React from 'react';
import { LatestArticles } from './LatestArticles';
import { TopReads } from './TopReads';
import { BlogCategories } from './BlogCategories';

export const BaseBlog: React.FC = ({}) => {

    return (

        <>

            <LatestArticles />

            <TopReads />

            <BlogCategories />

        </>

    )
}
