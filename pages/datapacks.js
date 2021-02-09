import Head from "next/head";
import Link from "next/link";

export default function Datapacks() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Datapacks</title>
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
        <h1 className="x-large text-primary center">Datapacks</h1>
        <p className="lead">
          Wykoria has some datapacks installed for some extra utility/quality of
          life additions to the server.
        </p>
        <br></br>
        <h2 className="large text-primary">Multiplayer Sleep</h2>
        <p>
          Only one person needs to sleep to end the night/storm. If you dont
          want to pass the night or storm please let other players know in chat.
        </p>
        <br></br>
        <h2 className="large text-primary">Unlock All Recipes</h2>
        <p>
          Unlocks all crafting recipes when first loggin into the the server.
        </p>
        <br></br>
        <h2 className="large text-primary">Track Statistics</h2>
        <p>
          Better Statistic tracker in minecraft for those that like numbers.
        </p>
        <br></br>
        <h2 className="large text-primary">Shulker Respawn</h2>
        <p>
          Shulkers will respawn in end cities after sometime. This is so we wont
          have to travel the entier end looking for shulkers.
        </p>
        <br></br>
        <h2 className="large text-primary">Dragon Drops Elytra</h2>
        <p>
          Defating the End Dragon will dropn an Elytra. This is so we wont have
          to travel to the entier end looking for an unraided end city
        </p>
        <br></br>
        <h2 className="large text-primary">More Mob Heads</h2>
        <p>
          All mobs have a chance to drop their head when being killed. The
          looting enchantment will increase this chance
        </p>
        <br></br>
        <h2 className="large text-primary">Player Mob Heads</h2>
        <p>
          Players will drop their own head when killed by another player... or
          suicide by arrow.
        </p>
        <br></br>
        <h2 className="large text-primary">Mini Blocks</h2>
        <p>
          The Wanding Trader will trade mini blocks of most blocks in the game.
          These can be used for decoration. The trades require 1 of the block in
          return for 8 mini blocks of that type. The blocks on offer will be
          different anytime you finding the Wandering Trader.
        </p>
        <br></br>
        <h2 className="large text-primary">Armor Stands</h2>
        <p>
          allows you to create custom poses for armor stands to make your builds
          feel alive.{" "}
          <Link href="https://www.youtube.com/watch?v=nV9-_RacnoI">
            <a className="text-light-green">ZombieCleo</a>
          </Link>{" "}
          has the best tutorial for how to use this.
        </p>
        <br></br>
        <h2 className="large text-primary">Rotten Flesh to Leather</h2>
        <p>Allows you to smelt rotten flesh into leather.</p>
        <img className="my-1" src="/leather.png" alt="leather" />
        <br></br>
        <h2 className="large text-primary">Sandstone Dyeing</h2>
        <p>Allows you to use red dye on sandstone to create red sandstone.</p>
        <img className="my-1" src="/sandstone.png" alt="sandstone" />
        <br></br>
        <h2 className="large text-primary">Universal Dyeing</h2>
        <p>
          Allows you to use multiple diffrent types of dyes materials and dye
          them into one. Only works with Glass, Glass Panes and Terracotta.
        </p>
        <img className="my-1" src="/glass.png" alt="glass" />
        <img className="my-1" src="/glass pane.png" alt="glass pane" />
        <img className="my-1" src="/terracotta.png" alt="terracotta" />
        <br></br>
        <h2 className="large text-primary">Craftable Nametags</h2>
        <p>Allows you to craft nametags using Paper, Iron and String</p>
        <img className="my-1" src="/name tag.png" alt="nametags" />
        <br></br>
        <h2 className="large text-primary">Craftable Blackstone</h2>
        <p>Allows you to craft blackstone using Basalt, Coal and Charcoal</p>
        <img className="my-1" src="/blackstone.png" alt="blackstone" />
      </div>
    </div>
  );
}
