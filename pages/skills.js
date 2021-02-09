import Head from "next/head";

export default function Skills() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wykoria: Skills</title>
      </Head>
      <div class="dark-overlay"></div>
      <div class="container">
        <h1 class="x-large text-primary center">Aurelium Skills</h1>
        <p>
          Wykoria uses Aurelium Skills to add more progression to minecraft. You
          can level up in various tasks in minecraft and gain stat boosts based
          on your level.
        </p>
        <br></br>
        <p>
          Some of the things you can level up include: Mining, Farming,
          Foraging, Fishing, Excavation, Archery, Defence, Fighting and more. to
          see the full list of skills type <span class="code">/skills</span> to
          open the interface and see all of the skills you can level and how to
          level them. Each skill has a max level of 97 and things you can gain
          from leveling up include: more health, more regen, faster mining
          speed, more damage, more resistance, more endurance and more.
        </p>
        <img src="/mining.png" alt="mining skill" class="my-1" />
        <img src="/farming.png" alt="farming skill" class="my-1" />
        <img src="/foraging.png" alt="foraging skill" class="my-1" />
        <img src="/fighting.png" alt="fighting skill" class="my-1" />
        <img src="/endurance.png" alt="endurance skill" class="my-1" />
        <img src="/enchanting.png" alt="enchanting skill" class="my-1" />
        <img src="/farming-2.png" alt="farming levels" class="my-1" />
        <img src="/fighting-2.png" alt="fighting levels" class="my-1" />
      </div>
    </div>
  );
}
