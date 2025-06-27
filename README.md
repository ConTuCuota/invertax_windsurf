# InverTax Windsurf

Monorepo for InverTax application

## Project Structure

- `packages/` - Shared packages
  - `app-shell/` - Next.js application
  - `ui-components/` - Shared UI components
  - `core-calculations/` - Core business logic
  - `montecarlo-engine/` - Monte Carlo simulation engine
- `services/` - Backend services

## Getting Started

### Prerequisites

- Node.js >= 18
- Yarn >= 1.22

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

### Available Scripts

- `yarn dev` - Start development servers
- `yarn build` - Build all packages
- `yarn start` - Start production servers
- `yarn test` - Run tests
- `yarn lint` - Run linter

## Deployment

### Vercel

The application is configured to be deployed on Vercel. The production build is automatically triggered when pushing to the `main` branch.

## License

MIT
