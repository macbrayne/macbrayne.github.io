<template>
  <main>
    <h1>Florentin Schleuß</h1>
    <section id="summary">
      <v-container>
        <v-row>
          <v-col fluent>
            <base-card>
              <p>22 years old, he/him</p>
              <p>Studying Physics BSc. at TU Braunschweig, Germany</p>
              <p>
                Currently working as a tutor for Maths for Physicists 1 at
                <a href="https://www.tu-braunschweig.de/en/imaph"
                  >Institute of Mathematical Physics</a
                >, TU Braunschweig.
              </p>
              <p>
                Active in the Fachgruppe Physik (student organization
                representing physics students at TU Braunschweig) coordinating
                among other things the mailing list and the website.
              </p>
            </base-card>
          </v-col>
          <v-col fluent>
            <base-card>
              <p>Socials:</p>
              <ul>
                <li>
                  <a href="mailto:hi@florentin-schleuss.de">Email</a>
                </li>
                <li>
                  <a href="https://norden.social/@florentin/">Mastodon</a>
                </li>
                <li>
                  <a href="https://matrix.to/#/@florentin:stratum0.org"
                    >Matrix</a
                  >
                </li>
                <li>
                  <a href="https://instagram.com/frodolon">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/florentin-schleuss/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </base-card>
            <base-card>
              <p>Chaos:</p>
              <ul>
                <li>39C3</li>
                <li>GPN24 (soon!)</li>
                <li>...maybe more?</li>
              </ul>
            </base-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <h2 id="projects:">Projects</h2>
      <div v-for="project in projects" :key="project.heading">
        <project-card
          :heading="project.heading"
          :link="project.link"
          :image-path="project.imagePath"
          :status="project.status"
        >
          <nuxt-content :document="project" />
        </project-card>
      </div>
    </section>

    <section class="i8831">
      <a href="/">
        <img src="~/assets/88x31/florentin.png" alt="Florentin's 88x31" />
      </a>
      <a href="https://53c70r.de/">
        <img src="~/assets/88x31/53c70r.png" alt="53c70r's 88x31" />
      </a>
      <a href="https://ncamgnrvngu.eu/"
        ><img src="~/assets/88x31/ncamgnrvngu.png" alt="Ncam Gnrvngu's 88x31"
      /></a>
      <a href="https://marekkrug.de/"
        ><img src="~/assets/88x31/murmeldin.png" alt="Marek Krug's 88x31"
      /></a>
      <a href="https://chaos.social/@feix3349"
        ><img src="~/assets/88x31/feix.png" alt="Feix' 88x31" />
      </a>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'landing',
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug)
      .sortBy('id')
      .fetch()

    return {
      projects,
    }
  },
}
</script>

<style>
.i8831 {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.i8831 img {
  border: none;
  image-rendering: pixelated;
}
</style>
