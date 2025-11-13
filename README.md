# Date Invitation App

A beautiful, animated romantic date invitation web application built with React, Express, and Framer Motion.

## Features

- Animated splash screen with romantic visuals
- Interactive date invitation interface
- Confetti celebration effects
- Responsive design with dark/light mode support
- Modern UI components using Radix UI and Tailwind CSS

## Tech Stack

### Frontend
- **React** 18.3.1 - UI library
- **Vite** 5.4.20 - Build tool and dev server
- **Tailwind CSS** 3.4.17 - Styling
- **Framer Motion** 11.13.1 - Animations
- **Wouter** 3.3.5 - Routing
- **TanStack Query** 5.60.5 - Data fetching
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icons

### Backend
- **Express** 4.21.2 - Web framework
- **TypeScript** 5.6.3 - Type safety
- **Drizzle ORM** 0.39.1 - Database ORM
- **Zod** 3.24.2 - Schema validation

## Prerequisites

- Node.js 18+ or 20+
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
Create a `.env` file in the root directory if needed:
```env
PORT=5000
NODE_ENV=development
```

## Development

Run the development server:
```bash
npm run dev
```

The application will start on `http://localhost:5000` (or the port specified in your `.env` file).

The dev server includes:
- Hot module replacement (HMR) for instant updates
- TypeScript compilation
- Backend API on the same port as the frontend

## Building for Production

Build the application:
```bash
npm run build
```

This will:
1. Build the frontend with Vite (output to `dist/public`)
2. Bundle the backend with esbuild (output to `dist`)

## Running in Production

After building, start the production server:
```bash
npm start
```

## Deployment Options

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Railway

1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository
3. Railway will auto-detect the Node.js app
4. Set the start command to `npm start`
5. Deploy!

### Deploy to Render

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set the following:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. Deploy!

### Deploy to Heroku

1. Create a `Procfile` in the root:
```
web: npm start
```

2. Deploy:
```bash
heroku create your-app-name
git push heroku main
```

## Project Structure

```
.
├── client/              # Frontend React application
│   └── src/
│       ├── components/  # Reusable UI components
│       ├── pages/       # Page components
│       ├── lib/         # Utilities and configurations
│       ├── hooks/       # Custom React hooks
│       └── App.tsx      # Main app component
├── server/              # Backend Express application
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   └── storage.ts       # Data storage layer
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schemas and types
├── dist/                # Production build output
└── package.json         # Dependencies and scripts
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment (development/production) | `development` |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue on GitHub.
