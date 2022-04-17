// Component for metatags

// Use twitter card validator to test: https://cards-dev.twitter.com/validator

import Head from 'next/head';

export default function Metatags({
  title = 'Fullstream Applications',
  description = 'Applications with real world uses made by young developers',
  image = 'https://fullstream.repl.co/card.png',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
        
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://fullstream.repl.co" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    </Head>
  );
}