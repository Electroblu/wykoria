import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="dark-overlay"></div>
      <div className="landing">
        <div className="landing-inner">
          <img className="logo" src="/Wykoria Logo.svg" alt="Wykoria-logo" />
          <h1 className="x-large">Welcome To Wkyoria</h1>
          <p className="lead">
            'Some time ago, in a land not long since forgotten, the kingdom of
            Wykoria could be found. With its lush forests, sprawling coasts and
            ore rich mountains, it was a jewel within its world. But, even the
            brightest jewels loose their luster. War torn the great nation from
            within. Friends turned on each other as greed and pettiness consumed
            the noble houses. Alliances were made and broken over and over until
            nothing of the great nation or armies were left. Nothing that is,
            but the ruins of the old castle. These ruins are where our story
            begin. The remaining members of the noble houses agreeing to go
            their separate ways. To establish new kingdoms and trade. To revive
            the land of Wykoria.'
          </p>
          <div className="buttons">
            <Link href="/">
              <a className="btn btn-primary">Continue to Wykoria</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
