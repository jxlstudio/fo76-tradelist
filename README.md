# Fallout 76 Custom Trade List

Built with Gridsome, Vue.js, Airtable and TailwindCSS. See demo: <https://fo76-tradelist.netlify.app/>

Dynamically pulls your trade and wants lists from an Airtable base. Also features: persistant "likes" for each row using `localStorage` and Dark-mode switch (uses device's dark-mode settings).

You can copy the Airtable Base template I used [here](https://airtable.com/shr1RuKLNmY2LMKoe/tblUhmQeUnHVFn5e6/viwc7TVJmYQFvYXzN?blocks=hide). Set Prefix, Model, Lvl and Perks to set the Name, Perk Count, and Stars fields, which are function fields that are filled dynamically.

 I would suggest converting from Google Sheets or Excel to Airtable.

With Gridsome and Github, you can easily set this list up to deploy to Netlify hosting for free. Find details here: <https://gridsome.org/docs/deploy-to-netlify/>

# Installation

## Clone Repo

```
git clone https://github.com/jxlstudio/fo76-tradelist.git
```

Make sure to create your own repo that will deploy to Netlify.

## Set up your .env file

```
GRIDSOME_AIRTABLE_API_KEY=<INSERT_YOUR_API_KEY_HERE>
GRIDSOME_AIRTABLE_BASE_ID=<INSERT_YOUR_BASE_ID_HERE>
```

Find your Airtable API Key and Base Key [here](https://airtable.com/api).

## Set up Netlify deploy

Netlify has instructions on how to do this [here](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

After doing this, the first build will fail. Go to the Netlify site's settings then "Build & Deploy" and enter the details from your .env files under "Environment Variables". You will need to trigger a new deploy under the "Deploys" tab.

# Roadmap

- [ ] Integrate Fed76.info price checking to remind viewers of researched value
- [ ] More to come...