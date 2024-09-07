const meta = {
  title: "★Biccas | by Xforeal★",
  description: "",
  img: "/opengraph-image.jpg",
  author: "Anastasiia Berest",
  url: "/",
};

export default function SEO() {
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />

      <meta name="author" content={meta.author} />

      <link rel="canonical" href={meta.url} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />

      <meta property="og:image:height" content="600" />
      <meta property="og:image:width" content="314" />
      <meta property="og:image" content={meta.img} />

      <meta property="fb:app_id" content="..." />
      <meta property="fb:admins" content="" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Saas | by XFR" />
      <meta property="og:url" content={meta.url} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.img} />

      <meta itemprop="name" content={meta.title} />
      <meta itemprop="description" content={meta.description} />
      <meta itemprop="image" content={meta.img} />

      <link href="/fav/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <link href="/fav/favicon.ico" rel="icon" type="image/x-icon" />

      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <link rel="icon" href="/fav/favicon.png" type="image/x-icon" />

      <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
      <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#54BD95" />

      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="mask-icon" href="/fav/safari-pinned-tab.svg |relURL }}" color="#54BD95" />
      <meta name="msapplication-TileColor" content="#54BD95" />
      <meta name="theme-color" content="#54BD95" />
    </>
  );
}
