import React /*{ useEffect } */ from 'react';
import Head from 'next/head';

export const HtmlHead: React.FC<{ title: any; headImage?: string; headDescription?: string }> = ({
  title,
  headImage,
  headDescription
}) => {
  const description =
    'We are a  360  creative company leveraging technology, community & content to design delightful experiences.';

  const link = 'https://wetalksound.co';

  const logo = 'https://wetalksound.co/apple-touch-icon.png';

  const seoAttributes = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Wetalksound",
    "alternateName": [""],
    "url": "https://wetalksound.co",
    "sameAs": ["wetalksound"],

    "logo": "https://wetalksound.co/apple-touch-icon.png"
  }`;

  // useEffect(() => {

  //   if (window) {

  //     const script = document.createElement('script');

  //     script.src = "devToolsInjection.js";

  //     script.async = true

  //     document.body.appendChild(script)

  //     return () => {

  //       document.body.removeChild(script)

  //     }

  //   }

  // // eslint-disable-next-line
  // }, [typeof window !== "undefined"])

  return (
    <>
      <Head>
        <title>{title || 'Wetalksound'}</title>
        <meta name="description" content={headDescription || description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>

        <meta property="og:type" content="website" />
        <meta property="og:url" content={link} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={headDescription || description} />
        <meta property="og:image" content={headImage || logo} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={link} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={headDescription || description} />
        <meta property="twitter:image" content={headImage || logo} />
      </Head>

      <link href="/fonts/style.css" rel="stylesheet" />

      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: seoAttributes }} />
    </>
  );
};
