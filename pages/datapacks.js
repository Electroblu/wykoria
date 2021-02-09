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
      </div>
    </div>
  );
}
