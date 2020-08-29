module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tegan Whipp - Artist`,
        short_name: `Tegan Whipp`,
        description: `Tegan Whipp, Australian artist traveling around the world.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#3C0576`,
        display: `standalone`,
        icon: `static/icon.png`,
        icons: [
          {
            src: `static/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `static/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `static/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `static/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
