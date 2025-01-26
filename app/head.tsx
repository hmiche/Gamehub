export default function Head() {
  return (
    <>
      <title>Your Game Portal</title>
      <meta name="description" content="Play the best HTML5 games online" />
      <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
        crossOrigin="anonymous"
      />
    </>
  );
} 