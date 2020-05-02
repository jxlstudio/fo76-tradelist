// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Fallout 76 Trade List',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY, // required
        baseId: process.env.GRIDSOME_AIRTABLE_BASE_ID, // required
        tableName: 'For Sale', // required, make sure your table name matches
        typeName: 'Item', // required
        select: {
          sort: [{field: "Name", direction: "desc"}]
        }, // optional, you can delete this field if you'd like.
      },
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.GRIDSOME_AIRTABLE_API_KEY, // required
        baseId: process.env.GRIDSOME_AIRTABLE_BASE_ID, // required
        tableName: 'Wants', // required, make sure your table name matches
        typeName: 'Want', // required
        select: {
          sort: [{field: "Name", direction: "desc"}]
        }, // optional, you can delete this field if you'd like.
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: ['mode-dark']
        },
        // presetEnvConfig: {},
        // shouldPurge: true,
        // shouldImport: true,
        // shouldTimeTravel: true
      }
    }
  ],
}
