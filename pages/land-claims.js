import Head from "next/head";

export default function Landclaims() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Land Claims</title>
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
          <h1 className="x-large text-primary center">Land Claims</h1>
          <p>
            Wykoria uses the GriefPrevention plugin for land claims. Each player
            will start wih 256 claim blocks by default (1 chunk) you can
            increase the number of claim blocks you have by ranking up in the
            gems shop
          </p>
          <br></br>
          <p>
            Areas claimed by players cannot be intereacted with unless given
            permission by the claim owner.
          </p>
          <br></br>
          <p>
            There are 4 permission types that can be given out. Access will
            allow the given player to intereact with doors, buttons and levers
            within the claim. Container will allow the given player to open
            chests and remove and add items to Chests within the claim. Build
            will allow the the given player to build and break blocks within the
            claim. Management this will allow the given player to treat the
            claimed area as their own allowing them to give other players
            permissions within the claim.
          </p>
          <br></br>
          <p>
            Permissions are claim based so if you have 3 or more claims and only
            give Access permission to player in one of the claims they cant
            interact with anything in the other two claimed areas.
          </p>
          <br></br>
          <p>
            Higher rank permissions will also give the permissions of those
            bellow ie if you want someone to be able to open chests and use
            doors, buttons etcS giving the player Container trus will also give
            them access trust. the hierarchy for permissions is as follows{" "}
            <strong className="text-light-green">
              Management > Build > Container > Access
            </strong>
          </p>
          <br></br>
          <p>
            You can subdivide claims (Requires Iron Rank) and within that
            subdivision you can give players permissions for that subdivision
            this is great for building larger communities.
          </p>
          <br></br>
          <p>
            You can transfer ownership of a claim to another player (Requires
            Lapis Rank). However even after transfering the claim it will still
            be subtracted from your own claim blocks while leaving the other
            players claim blocks unaffected essentially giving them a free land
            claim. Always be careful when using this feature.
          </p>
          <br></br>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/_vr7hLgFwyQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <br></br>
          <div>
            <h2 className="large text-primary">How To Use</h2>
            <h3>Step 1</h3>
            <p>
              Type <span className="code">/kit cliams</span> in the chat to
              recive a golden shove and stick these will be needed to claim land
              and view claimed land
            </p>
            <br></br>
            <h3>Step 2</h3>
            <p>
              With the stick in hand right click to view if the area you want to
              claim has already been claimed by another player if not you can
              claim this land for yourself
            </p>
            <br></br>
            <h3>Step 3</h3>
            <p>
              With the golden shovel in hand right click the first corner of
              your claim, then head over to the 2nd corner and right click again
              this will mark out and claim that areas as your own
            </p>
            <br></br>
            <h3>Step 4</h3>
            <p>
              To subdivide claim with a golden shovel in hand and while standing
              in your claim type /subdivideclaim in chat then right click the
              two corners to mark out your subdivision this area will now have
              all its own claim permissions you can give out.
            </p>
            <br></br>
            <h2 className="large text-primary">Commands</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Command</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="claims">/kit claims</td>
                  <td className="claims">
                    Gives you a Golden Shovel and a Stick
                  </td>
                </tr>
                <tr>
                  <td className="claims">/permissiontrust (player name)</td>
                  <td className="claims">
                    Gives player Management trust in claim
                  </td>
                </tr>
                <tr>
                  <td className="claims">/trust (player name)</td>
                  <td className="claims">Gives player Build trust in claim</td>
                </tr>
                <tr>
                  <td className="claims">/containertrust (player name)</td>
                  <td className="claims">
                    Gives player Container trust in claim
                  </td>
                </tr>
                <tr>
                  <td className="claims">/accesstrust (player name)</td>
                  <td className="claims">Gives player Access trust in claim</td>
                </tr>
                <tr>
                  <td className="claims">/untrust (player name)</td>
                  <td className="claims">
                    Removes all permissions from player
                  </td>
                </tr>
                <tr>
                  <td className="claims">/subdivideclaim</td>
                  <td className="claims">
                    Will allow you to subdivide current claim
                  </td>
                </tr>
                <tr>
                  <td className="claims">/bc</td>
                  <td className="claims">
                    Returns to basic claim mode afer being in subdivide claim
                    mode
                  </td>
                </tr>
                <tr>
                  <td className="claims">/abandoncliam confirm</td>
                  <td className="claims">
                    Will abandon the claim you are standing in and return the
                    claim blocks to your total amount
                  </td>
                </tr>
                <tr>
                  <td className="claims">/abandonallclaims confirm</td>
                  <td className="claims">
                    Will abandon all of your claims and return the claim blocks
                    to your total amount
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
