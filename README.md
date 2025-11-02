Express TS Starter

This repository serves as a starter template for building Node.js applications using Express.js and TypeScript.

It provides a pre configured development environment with Express, TypeScript, ESLint, and Prettier.

Features

    Framework: Express.js

    Language: TypeScript

    Linting: ESLint (using the new eslint.config.js flat config)

    Formatting: Prettier

    Testing: Vitest

    Development Server: tsx for hot-reloading

    Path Aliasing: Configured with tsc-alias to support #* import paths (e.g., #utils/hello) in the compiled output.

    Production: Includes an ecosystem.config.js for process management with PM2, correctly loading environment variables from .env files.

Scripts

    npm run dev: Start the development server with hot-reloading.

    npm run build: Compile the TypeScript source to JavaScript in the dist folder and resolve path aliases.

    npm start: Run the compiled application from the dist folder.

    npm run lint: Lint the codebase.

    npm run format: Format the codebase with Prettier.

    npm run test: Run tests using Vitest.

Acknowledgements

This setup was based on the guide provided in this article: Node.js 2025 Guide: How to setup Express.js with TypeScript, ESLint and Prettier.

This starter template includes further optimizations not detailed in the article:

    Integration of tsc-alias to properly resolve tsconfig.json path aliases (like #*) in the final JavaScript build output.

    Inclusion of ecosystem.config.js to ensure the .env file is loaded correctly when running the application with PM2.
