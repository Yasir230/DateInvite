# Contributing to Date Invitation App

Thank you for considering contributing to this project! Here are some guidelines to help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/your-repo-name.git
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes in your feature branch
2. Test your changes locally:
   ```bash
   npm run dev
   ```
3. Run type checking:
   ```bash
   npm run check
   ```
4. Commit your changes with clear, descriptive messages:
   ```bash
   git commit -m "Add: new animation feature"
   ```
5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a Pull Request

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Define proper types for all functions and variables
- Avoid using `any` type

### React Components
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

### Styling
- Use Tailwind CSS utilities
- Follow the existing color scheme defined in `index.css`
- Ensure responsive design (mobile-first approach)

### File Organization
- Place reusable components in `client/src/components/`
- Page components go in `client/src/pages/`
- Utilities and helpers in `client/src/lib/`
- Shared types in `shared/`

## Commit Message Format

Follow the conventional commits specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add confetti animation on acceptance
fix: resolve mobile layout issue
docs: update deployment instructions
```

## Testing

Before submitting a PR:
- [ ] Test your changes in development mode
- [ ] Verify TypeScript compilation passes (`npm run check`)
- [ ] Test on different screen sizes
- [ ] Ensure all animations work smoothly

## Pull Request Process

1. Update the README.md if you've made significant changes
2. Ensure your code follows the style guidelines
3. Write a clear PR description explaining your changes
4. Link any related issues
5. Wait for review and address any feedback

## What to Contribute

### Ideas for Contributions
- New animation effects
- Additional theme options
- Performance improvements
- Accessibility enhancements
- Bug fixes
- Documentation improvements
- Test coverage

### Areas that Need Help
- Mobile optimization
- Animation performance
- Accessibility features
- Browser compatibility
- Documentation

## Questions?

If you have questions, feel free to:
- Open an issue for discussion
- Check existing issues for similar questions
- Reach out to the maintainers

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the code, not the person
- Help create a welcoming environment

Thank you for contributing! 🎉
