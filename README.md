# Emily Ing | Engineering Portfolio

A lightweight, responsive portfolio built with plain HTML, CSS, and JavaScript. The About, Experience, Projects, and Resume tabs work without a framework or build step.

## Preview locally

Open `index.html` in a browser. The resume PDFs are in `assets/`.

## Publish with GitHub Pages

The repository includes a GitHub Actions workflow that publishes the site on every push to `main`.

1. Push this project to the `main` branch of a public GitHub repository.
2. In the repository settings, open **Pages** and choose **GitHub Actions** as the build and deployment source.
3. Wait for the **Deploy portfolio to GitHub Pages** workflow to complete. GitHub will show the public URL in **Settings → Pages** and in the workflow deployment.

For the `eing523/portfolio` repository, the expected URL is `https://eing523.github.io/portfolio/`.

## Project and experience pages

Every project and experience card links to its own page under `projects/` or `experience/`. These pages share a template and content in `detail.js`.
