import React from 'react';
import Head from 'next/head';

export const HtmlHead: React.FC<{ title: any }> = ({ title }) => {
  const description = "We are a  360  creative company leveraging technology, community & content to design delightful experiences.";
  const link = 'http://wetalksound.co';
  const logo = 'http://wetalksound.co/assets/logo/apple-icon.png';

  const seoAttributes = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wetalksound",
    "alternateName": [""],
    "url": "http://wetalksound.co",
    "sameAs": ["wetalksound"],

    "logo": "http://wetalksound.co/assets/logo/apple-icon.png"
  }`;

  return (
    <>
      <Head>
        <title> {title ? title : "Wetalksound"} </title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:type" content="website" > </meta>
        <meta property="og:url" content={link} > </meta>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} > </meta>
        <meta property="og:image" content={logo} > </meta>

        <meta property="twitter:card" content="summary_large_image" > </meta>
        <meta property="twitter:url" content={link} > </meta>
        <meta property="twitter:title" content={title} > </meta>
        <meta property="twitter:description" content={description} > </meta>
        <meta property="twitter:image" content={logo} > </meta>

      </Head>

      <link href="/fonts/style.css" rel="stylesheet" > </link>

      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      ></link>


      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoAttributes }} />

    </>
  );
};
