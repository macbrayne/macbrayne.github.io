<template>
  <main>
    <section id="summary">
      <base-card heading="Summary">
        <p>17 years old</p>
        <p>Living in Germany</p>
        <a href="https://fractava.com">FRACTAVA</a>
      </base-card>
    </section>
    <section>
      <h2 id="projects">Projects</h2>
      <div v-for="project in projects" :key="project.heading">
        <project-card
          :heading="project.heading"
          :link="project.link"
          :image-path="project.imagePath"
        >
          <nuxt-content :document="project" />
        </project-card>
      </div>
      <h2>Member in:</h2>
      <div v-for="organisation in organisations" :key="organisation.heading">
        <project-card
          :heading="organisation.heading"
          :link="organisation.link"
          :image-path="organisation.imagePath"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
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
