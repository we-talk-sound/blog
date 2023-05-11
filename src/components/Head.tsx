import Head from 'next/head';
import React from 'react';

const HtmlHead: React.FC<{ title?: string }> = ({ }) => {

  return (

    <Head>
      <title> {"Wetalksound"} </title>

      <link rel="icon" href="/favicon.ico" />

      <title>We are powering Africa's creative ecosystem with technology and capital.</title>
      <meta name="title" content="We are powering Africa's creative ecosystem with technology and capital."></meta>
      <meta name="description" content="TheAfroGarage | Powering Africa's creative industry with technology & capital"></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://www.theafrogarage.com/"></meta>
      <meta property="og:title" content="We are powering Africa's creative ecosystem with technology and capital."></meta>
      <meta property="og:description" content="TheAfroGarage | Powering Africa's creative industry with technology & capital"></meta>
      <meta property="og:image" content="https://www.theafrogarage.com/apple-touch-icon.png"></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://www.theafrogarage.com/"></meta>
      <meta property="twitter:title" content="We are powering Africa's creative ecosystem with technology and capital."></meta>
      <meta property="twitter:description" content="TheAfroGarage | Powering Africa's creative industry with technology & capital"></meta>
      <meta property="twitter:image" content="https://www.theafrogarage.com/apple-touch-icon.png"></meta>

      <link href="/fonts/style.css" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"></meta>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>

      <script>
        {process.env.NEXT_PUBLIC_NODE_ENV !== 'development'
          ? 'window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function(){}'
          : ''}
      </script>

      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
     
    </Head>
  );
};

export default HtmlHead;