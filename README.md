<h1 align="center">Infinity</h1>

Infinity is the main management system for the INFINITE organization. This is the front-end app built with [Next.js](https://nextjs.org/).

## Getting Started

1. Set up the development environment

   You need to set up your development environment before you can do anything.

   Install [Node.js and npm](https://nodejs.org/en/download/).

2. Install the dependencies

   ```bash
   npm install
   ```

3. Run in development mode

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load font.

## Project Structure

```
.
├── app                 # Routing
├── public              # Static files
└── src
    ├── application     # Application business rules
    ├── domain          # Enterprise business rules
    ├── infrastructure  # Framework and drivers
    └── presentation    # User interface
```

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

1. Generate a production build

   ```bash
   npm run build
   ```

   The output is generated inside the `.next` folder

2. Start the Node.js server

   ```bash
   npm run start
   ```
