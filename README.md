# Emily Ing | Engineering Portfolio

A lightweight, responsive portfolio built with plain HTML, CSS, and JavaScript. The About, Experience, Projects, and Resume tabs work without a framework or build step.

## Preview locally

Open `index.html` in a browser. The resume PDFs are in `assets/`.

## Publish with GitHub Pages

The repository includes a GitHub Actions workflow that publishes the site on every push to `main`.

For the first deployment, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source. The workflow cannot enable Pages automatically if GitHub restricts the repository token. Then re-run the failed **Deploy portfolio to GitHub Pages** workflow in **Actions** or push another commit to `main`.

For the `eing523/portfolio` repository, the URL is `https://eing523.github.io/portfolio/`.

## Project and experience pages

Every project and experience card links to its own page under `projects/` or `experience/`. These pages share a template and content in `detail.js`.
