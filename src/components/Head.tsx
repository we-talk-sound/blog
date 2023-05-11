import React from 'react';
import Head from 'next/head';

export const HtmlHead: React.FC<{ title: any }> = ({ title }) => {
  
  const description = "We are a  360  creative company leveraging technology, community & content to design delightful experiences.";

  return (
    <Head>

      <title> Wetalksound </title>
      <meta name="description" content={description}> </meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"> </meta>

      <meta property="og:type" content="website"> </meta>
      <meta property="og:title" content={title}> </meta>
      <meta property="og:description" content={description}> </meta>


      <meta property="twitter:title" content={title}> </meta>
      <meta property="twitter:description" content={description}> </meta>


      <link href="/fonts/style.css" rel="stylesheet" />

      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />

      <script>
        {process.env.NEXT_PUBLIC_NODE_ENV !== 'development'
          ? 'window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function(){}'
          : ''}
      </script>

    </Head>
  );
};
