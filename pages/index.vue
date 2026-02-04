<template>
  <main>
    <h1>Florentin Schleuß</h1>
    <section id="summary">
      <v-container>
        <v-row>
          <v-col fluent>
            <base-card>
              <p>22 years old</p>
              <p>Studying Physics BSc. at TU Braunschweig, Germany</p>
              <p>
                Currently working as a tutor for Maths for Physicists 1 at
                <a href="https://www.tu-braunschweig.de/en/imaph"
                  >Institute of Mathematical Physics</a
                >
                TU Braunschweig
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
