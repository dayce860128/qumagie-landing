# QuMagie Landing Page

## Getting Started

Run the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Lint:

```bash
pnpm lint
```

## Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

1.  Push your code to the `main` branch.
2.  Go to your GitHub repository settings -> **Pages**.
3.  Under **Build and deployment**, set **Source** to **GitHub Actions**.
4.  The workflow defined in `.github/workflows/deploy.yml` will run automatically and deploy your site.

**Note**:
- The project uses `output: 'export'` in `next.config.ts` to generate a static site.
- `images.unoptimized = true` is set to ensure image compatibility with GitHub Pages (since Next.js default Image Optimization requires a server).
