# Calculator App

## Task

Implemented test task: basic calculator built with pure JavaScript and Webpack, without any frameworks.

**Functional requirements:**

- Supports operations: division, multiplication, subtraction, addition, percentage, and sign change.
- Pure JavaScript (no libraries, frameworks, jQuery, eval, or Math functions).
- Modular code structure.
- Calculation logic implemented without any third-party libraries.
- User interface with multiple theme support.
- Implemented Theme Manager with theme switching and preview.
- Webpack configuration with build optimization.
- ESLint and Prettier configured for code style enforcement.
- Pre-commit hook configured via Husky.
- Ready for deployment.

## How to run the app

### 1. Install dependencies:

```bash
npm install

# Start development mode:
npm start

# Build for production:
npm run build

# Run linter:
npm run lint

# Auto-fix linter issues:
npm run lint:fix

# Format code using Prettier:
npm run format

Project structure
project-root/
│
├── public/                # Static HTML file (index.html)
│
├── src/                   # Application source code
│   ├── index.js           # Application entry point
│   ├── assets/            # Static assets and images
│   │   └── themes/        # Theme previews (default.jpg, blue.jpg, retro.jpg, neon.jpg)
|   |   └── styles.css     # Main application stylesheet: calculator layout, button styles, and theme switching
│   ├── components/               # All calculator-related components       
│   │       ├── Buttons.js        # Creates calculator buttons and handles click bindings
│   │       ├── Calculator.js     # Main calculator container combining all modules
│   │       ├── Display.js        # Display component for showing input and results
│   │       ├── Handlers.js       # Input event handlers and state management
│   │       ├── Helpers.js        # Utility functions (e.g. isNumber, isOperator)
│   │       ├── ThemeApply.js     # Logic for applying selected theme to document body
│   │       ├── ThemeMenu.js      # Theme selection menu with preview thumbnails
│   │       └── WindowButtons.js  # Decorative window control buttons (red/yellow/green + theme button)
│   ├── core/
│   │   └── calculate.js  # Calculation logic
│   └── themes/
│       └── theme.js      # Theme definitions
│
├── .husky/                # Husky pre-commit hooks running ESLint before commit
├── .prettierrc            # Prettier configuration
├── eslint.config.js       # ESLint configuration (Flat config)
├── package.json           # Dependencies, scripts, and project configuration
├── webpack.config.js      # Webpack build configuration
└── README.md              # Project documentation

```
