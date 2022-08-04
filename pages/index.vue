<template>
  <main>
    <h1>Florentin Schleuß</h1>
    <section id="summary">
      <v-container>
        <v-row>
          <v-col>
            <base-card>
              <p>19 years old</p>
              <p>Studies: Physics at TU Braunschweig, Germany</p>
              <p>
                Work: Student Assistant (IT System Administration) at the
                Institute of CMOS Design (TU Braunschweig)
              </p>
            </base-card>
          </v-col>
          <v-col>
            <base-card>
              <p>Socials:</p>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/florentin-schleuss/">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://norden.social/@florentin/">Mastodon</a>
                </li>
                <li>
                  <a href="mailto:hi@florentin-schleuss.de">Email</a>
                </li>
              </ul>
            </base-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <h2 id="projects">Projects</h2>
      <v-container>
        <v-row>
          <v-col v-for="project in projects" :key="project.heading" fluid>
            <project-card
              :heading="project.heading"
              :link="project.link"
              :image-path="project.imagePath"
            >
              <nuxt-content :document="project" />
            </project-card>
          </v-col>
        </v-row>
      </v-container>
      <h2>Member in</h2>
      <v-container>
        <v-row>
          <v-col
            v-for="organisation in organisations"
            :key="organisation.heading"
          >
            <project-card
              :heading="organisation.heading"
              :link="organisation.link"
              :image-path="organisation.imagePath"
            />
          </v-col>
        </v-row>
      </v-container>
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
    const organisations = await $content('organisations', params.slug)
      .sortBy('id')
      .fetch()

    return {
      projects,
      organisations,
    }
  },
}
</script>
