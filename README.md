# Kreative Korner website

React + Vite + React Router. Recovered from the deployed Netlify build.

## Run it on your laptop
    npm install
    npm run dev        # opens at http://localhost:5173

## Build for production
    npm run build      # output goes to the dist/ folder

## Where things live
- src/data/siteData.js  -> ALL text content: contact details, services, team, FAQs, blog posts, testimonials
- src/pages/            -> one file per page (Home, About, Services, Academy, Blog, BlogPost, Contact, NotFound)
- src/components/       -> reusable pieces (Navbar, Footer, cards, etc.)
- src/styles.css        -> all styling
- public/               -> favicons and social share image

## Deploying to Netlify
netlify.toml is included (build command + redirect so page refreshes work on /about, /blog etc.).
Best option: push this project to GitHub and connect the repo in Netlify.
