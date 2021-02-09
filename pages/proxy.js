import Head from "next/head";

export default function Proxy() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Proximity Chat</title>
      </Head>
      <div class="dark-overlay"></div>
      <div class="container">
        <h1 class="x-large text-primary center">Proximity Chat</h1>
        <p class="lead center">
          Wykoria uses Sckoice for proximity chat on the server.
        </p>
        <div class="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/oetuTff8rOI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <br></br>
        <div>
          <h2 class="large text-primary">How to Use</h2>
          <h3>Step 1</h3>
          <p>
            After loging into the server type the command{" "}
            <span class="code">/skoice link</span>
          </p>
          <br></br>
          <h3>Step 2</h3>
          <p>
            This will return some info with a 6 diget code in bold at the end.
            This code is what will link your discord and minecraft account
            together
          </p>
          <br></br>
          <h3>Step 3</h3>
          <p>
            DM this code to the SkoiceProximity bot in discord, the bot should
            reply back if successfull
          </p>
          <br></br>
          <h3>Step 4</h3>
          <p>
            Now if your join the Minecraft Main Voice channel in disocrd the bot
            will take it from there
          </p>
        </div>
        <br></br>
        <div>
          <h2 class="large text-primary">How it Works</h2>
          <p>
            Once you jump into the Minecraft Main voice channel the bot will
            move you to your own lobby. If you come within 1000 blocks of
            another player that is in their own lobby the bot will add you to
            the same lobby and you can talk once you move more than 1000 blocks
            away again it will seperate you into your own lobbies again. The bot
            will create and destoy voice channels as need based on the people
            amount of people logged into the server. You must be logged into
            both discord and the minecraft server for the bot to work and you
            must join the Minecraft Main Voice Channel for the bot to move your
            around.
          </p>
        </div>
        <br></br>
        <div>
          <h2 class="large text-primary">Fequently Asked Questions</h2>
          <p>
            <strong>Q. What if I dont want to use the proximity bot?</strong>
          </p>
          <p>
            A. The proximity bot will only take control of accounts that have
            completed the linking step and joined the Minecraft Main channel in
            discord. If you have not linked your accounts or are not in the
            Minecraft Main channel the bot will ignore you.
          </p>
          <br></br>
          <p>
            <strong>
              Q. Will the bot create alot of channels that we cant delete?
            </strong>
          </p>
          <p>
            A. No, the bot will create and destroy voice channels as needed
            based on the number players online on the server and have joined the
            Minecraft Main voice channel if no one is online the bot will remove
            all channels created by the bot.
          </p>
          <br></br>
          <p>
            <strong>Q. Can the proxmity radius be changed?</strong>
          </p>
          <p>
            A. Yes, Our world is huge (30k x 30k) if we are finding that no one
            is interacting in voice chat because no one ever comes within range
            we can increase the radius that the bot will pair people up in voice
            chat.
          </p>
        </div>
      </div>
    </div>
  );
}
