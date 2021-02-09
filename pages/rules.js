import Link from "next/link";
import Head from "next/head";

export default function Rules() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Rules</title>
      </Head>
      <div className="dark-overlay"></div>
      <div className="container">
        <h2 className="x-large text-primary center">The Rules</h2>
        <p className="lead center">
          Please follow all rules set out on the server breaking these rules
          will results in temporary or pemernant bans
        </p>
        <p className="lead center">Rules may be adjusted over time if needed</p>
        <div>
          <ol>
            <li>
              {" "}
              Take a tree plant a tree unless clearing an area for a build
            </li>
            <li> Other peoples areas may only be entered if mutual</li>
            <li> No Raiding/Griefing unless mutual</li>
            <li> All PVP must be mutual</li>
            <li>
              {" "}
              If war commences you need a third party to broker the peace
            </li>
            <li> Be kind theres no need ofr IRL drama to find its way here</li>
            <li>
              {" "}
              Be mindful when streaming not to accidently dox other players by
              typing IRL names in minecraft chat etc
            </li>
            <li>
              {" "}
              No pointless destruction, blowing things up with TNT for fun will
              not be tolerated
            </li>
            <li>
              {" "}
              Do not claim land within spawn, your claims will be removed.
            </li>
            <li>
              {" "}
              Any leak of the server IP will result in a{" "}
              <strong className="text-light-green">
                Perm Ban no warnings given.
              </strong>
            </li>
          </ol>
        </div>
        <br></br>
        <h2 className="large text-primary">Dynmap</h2>
        <p>
          Wykoria uses dynmap to display our world map this will show all
          players location in realtime and the map will update as people build
          out their areas.
        </p>
        <p>
          The link to dynmap will be pinned in the Minecraft Talk discord
          channel.
        </p>
        <img className="my-1" src="/Dynmap.png" alt="Dynmap" />
        <br></br>
        <br></br>
        <div>
          <h2 className="x-large text-primary">Special Mentions</h2>
          <p>
            We like to give credit where credit is due. These builds were
            insiration for building out Spawn and the Central Nether Hub
          </p>
          <br></br>
          <h2 className="large text-primary my-1">Spawn</h2>
          <img className="my-1" src="/spawn-1.png" alt="spawn-1" />
          <img className="my-1" src="/spawn-2.png" alt="spawn-2" />
          <img className="my-1" src="/spawn-3.png" alt="spawn-3" />
          <p className="lead">
            <strong>Inspired by: </strong>
            <Link href="https://www.grabcraft.com/minecraft/ruins-of-valerion/ruins">
              <a>Emerindyl</a>
            </Link>
          </p>
          <p className="lead">
            <strong>Inspired by: </strong>
            <Link href="https://www.planetminecraft.com/project/tree-bundle-370-custom-trees-download/">
              <a>Exsilit</a>
            </Link>
          </p>
          <h2 className="large text-primary">Nether Hub</h2>
          <img className="my-1" src="/nether-1.png" alt="nether-1" />
          <img className="my-1" src="/nether-2.png" alt="nether-2" />
          <img className="my-1" src="/nether-3.png" alt="nether-3" />
          <p className="lead">
            <strong>Inspired by: </strong>
            <Link href="https://www.planetminecraft.com/project/nether-themed-castle/">
              <a>ShaddowBladeMC49</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
