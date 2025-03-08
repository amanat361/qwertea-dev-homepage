# CLAUDE.md - Development Guidelines

## Build/Dev Commands
- `bun dev` - Start development server with hot reloading
- `bun start` - Start production server
- `bun --hot src/index.tsx` - Alternative dev command with hot reloading
- `NODE_ENV=production bun src/index.tsx` - Alternative production command

## Code Style Guidelines
- **TypeScript**: Use strict mode with proper type annotations
- **Imports**: Use named imports; group React imports first, then components, utilities, and styles
- **Components**: Use functional components with explicit return types
- **File Structure**: One component per file, named exports for components
- **Naming**: PascalCase for components/interfaces, camelCase for variables/functions
- **Error Handling**: Use try/catch blocks with specific error messages
- **CSS**: Use Tailwind utility classes with consistent ordering
- **Testing**: When adding tests, use filename.test.tsx convention

## Project Structure
- React 19 with TypeScript
- Bun as runtime and bundler
- Tailwind for styling
- File-based routing for API endpoints