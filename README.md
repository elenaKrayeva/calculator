# Calculator App

## Task

Implemented test task: basic calculator built with pure JavaScript and Webpack, without any frameworks.
[task](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view)

**Functional requirements:**

- Supports operations: addition, subtraction, multiplication, division, percentage, sign change, square (x²), cube (x³), xʸ, 10ˣ, 1/x, square root (√), cube root (∛), nth root (ʸ√x), and factorial (x!).
- Memory operations: MC (clear), MR (recall), M+ (add to memory), M- (subtract from memory)
- Pure JavaScript (no libraries, frameworks, jQuery, eval, or Math functions).
- Modular code structure using the Command pattern.
- Calculation logic implemented without any third-party libraries.
- All edge cases are handled (e.g., division by zero, invalid factorial input).
- Implemented Theme Manager with theme switching and preview.
- Webpack configuration with build optimization.
- ESLint and Prettier configured for code style enforcement.
- Pre-commit hook configured via Husky to prevent commits with lint errors.
- Unit tests written using Jest for all mathematical operations.

## How to run the app

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm start
```

### 3. Build for production

```bash
npm run build
```

### 4. Lint the code

```bash
npm run lint
```

### 5. Auto-fix linter issues

```bash
npm run lint:fix
```

### 6. Format code using Prettier

```bash
npm run format
```

### 7. Run unit tests

```bash
npm test
```

## Project structure

```
project-root/
│
├── public/                      # Static HTML file (index.html)
│
├── src/                         # Application source code
│   ├── index.js                 # Application entry point
│   ├── __tests__/               # Unit tests using Jest
│   │   └── commands.test.js     # Tests for all mathematical operations
│   ├── assets/                  # Static assets and images
│   │   ├── styles.css           # Main app styles: layout, button styles, theme switching
│   │   └── themes/              # Theme previews (default.jpg, blue.jpg, retro.jpg, neon.jpg)
│   ├── components/              # Calculator components
│   │   ├── Buttons.js           # Button creation and input binding
│   │   ├── Calculator.js        # Root calculator component
│   │   ├── Display.js           # Display for input/output
│   │   ├── Helpers.js           # Utility helpers (e.g., isNumber)
│   │   ├── ThemeApply.js        # Applies selected theme to document
│   │   ├── ThemeMenu.js         # Theme menu with previews
│   │   ├── WindowButtons.js     # UI decoration: window controls and theme switch
│   │   └── handlers/            # All input-handling logic split by concern
│   │       ├── index.js         # Export of the main function handleInput
│   │       ├── number.js        # handleNumber
│   │       ├── operator.js      # handleOperator
│   │       ├── equal.js         # handleEqual
│   │       ├── function.js      # handleFunction (unary functions)
│   │       ├── memory.js        # memoryHandlers (mc, mr, m+, m-)
│   │       ├── clear.js         # handleClear (AC)
│   │       ├── sign.js          # handleSignChange (⁺/₋)
│   │       ├── percent.js       # handlePercent (%)
│   │       ├── undo.js          # handleUndo (undo)
│   │       ├── snapshot.js      # createSnapshot (for undo)
│   │       └── format.js        # formatResult
│   ├── core/                    # Core calculation logic
│   │   └── commands.js          # Math commands (Command-pattern)
│   └── themes/
│       └── theme.js             # Theme definitions
│
├── .husky/                      # Husky hooks (pre-commit lint checks)
├── .prettierrc                  # Prettier configuration
├── eslint.config.js             # ESLint flat config
├── package.json                 # Project configuration and scripts
├── webpack.config.js            # Webpack config
└── README.md                    # Project documentation
```
