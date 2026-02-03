export default function ({ app, $vuetify }) {
  if (process.client) {
    // only in client mode
    $vuetify.theme.dark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
  }
}
