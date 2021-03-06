import Head from "next/head";
import Link from "next/link";

export default function Slimefun() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Slimefun</title>
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
      <div className="container">
        <div>
          <h1 className="x-large text-primary center">Slimefun</h1>
          <p>Slime fun adds some extra items, tools and machine to the game.</p>
          <p>
            You should recive a slimefun guide when you first log in if you lose
            this guide you can get another by typing{" "}
            <span className="code">/sf guide</span> in chat
          </p>
          <br></br>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/taqNe7QHlHM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <br></br>
          <div>
            <h2 className="large text-primary">Viewing and Using the Guide</h2>
            <p>
              Open the guide by right clicking with the book in hand. This will
              open an interface with the differnent categories of items you can
              make. some categrories will be locked until certain requirements
              have been met ie unlocking all the items in another category.
            </p>
            <br></br>
            <p>
              Most items will locked at first to unlock these you must either
              spend EXP to unlock them or met the requirement to unlock them. To
              find out what you need to unlock an item hover over the barrier
              and it will tell you.
            </p>
            <br></br>
            <h2 className="large text-primary">Crafting an Item</h2>
            <p>
              Crafting an item with slimefun will require you to use one of the
              machines in slimefun which can be found in Basic Machines early
              machines are made with regular minecraft items but get get more
              complex with the more advanged machines selecting any item in the
              guide will tell you what your need to make or craft the item. For
              a more comprehensive guide on all items you can view the slimefun
              wiki{" "}
              <Link href="https://github.com/Slimefun/Slimefun4/wiki">
                <a className="text-light-green">here.</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
