# READyME

### Build a README that makes your project easy to understand.

READyME is a lightweight, browser based README builder for projects. Add your project details, shape the document with a live preview, and export Markdown ready for GitHub.

[**Try the live demo**](https://readyme-inky.vercel.app/)

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

## Features

- **Start with a template** for a web app, REST API, library, or portfolio.
- **Describe your project** with its name, summary, author, repository, setup commands, technologies, and features.
- **Preview as you edit** with a live Markdown preview.
- **Export in one step** by copying the Markdown or downloading `README.md`.
- **Choose your theme** with light and dark modes.
- **Keep your draft** saved in your browser between visits.

Technology badges are generated for supported selections. Other technologies still appear in the README's tech stack.

## Quick start

You’ll need [Node.js](https://nodejs.org/) and npm. From the repository root, run:

```bash
cd readyme
npm install
npm run dev
```

Open the local address shown in your terminal.

## Deploy to Vercel

The app lives in the `readyme/` directory. When importing this repository into Vercel, set the project root directory to `readyme`. Vercel should detect Vite and use `npm run build` with `dist` as the output directory.

To deploy with the Vercel CLI, authenticate first, then run from the app directory:

```bash
cd readyme
vercel --prod
```

READyME does not require API keys or environment variables. Once the Git repository is connected to Vercel, new pushes can trigger deployments automatically.

## How to use

1. Choose a template to add sample features and commands.
2. Enter your project details and update the installation and run commands.
3. Select technologies and add or remove feature bullets.
4. Review the preview, then click **Copy** or **Download**.

Templates replace the sample features and commands while keeping your other project details. Your project draft and theme preference are saved in your browser's local storage.

## Development

Run these commands from the `readyme/` directory:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Check TypeScript and create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |

## Built with

React, TypeScript, Vite, Tailwind CSS, React Markdown, and Lucide icons.

## Project structure

```text
readyme/
└── src/
    ├── components/   # Editor, templates, preview, and export controls
    ├── hooks/        # Local storage hook
    ├── types/        # Project data and template definitions
    └── utils/        # Markdown and badge generation
```

## Data storage

READyME works in your browser. It saves the draft and theme on your device; clearing browser data for the site removes the saved draft.
