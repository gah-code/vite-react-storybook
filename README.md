# Vite React Storybook

## Project Overview

This project is a boilerplate setup for building a modern React application using **Vite**, **Storybook**, and **Styled Components**. It is designed to help developers create highly interactive user interfaces with a quick development environment while ensuring the code is modular, reusable, and easy to maintain.

### Key Features

- **Vite**: A fast and efficient build tool that replaces traditional bundlers, offering instant hot module replacement (HMR) and optimized builds.
- **Storybook**: A UI component workshop that allows developers to create, preview, and document React components in isolation.
- **Styled Components**: A CSS-in-JS library that allows you to write CSS code directly within your JavaScript, with support for theming.

## Project Structure

```
.
├── src
│   ├── themes
│   │   ├── lightTheme.js      # Define light theme configuration here
│   │   ├── darkTheme.js       # Define dark theme configuration here
│   ├── styles
│   │   └── GlobalStyles.js    # Define global styles using styled-components
│   ├── stories                # Contains Storybook stories for components
│   │   └── Button.stories.jsx
│   │   └── Colors.stories.jsx
│   │   └── Header.stories.jsx    
│   ├── elements               # Contains smaller reusable UI elements
│   │   └── Button.jsx    
│   │   └── Header.jsx    
│   ├── foundation             # Contains foundational styles and utilities
│   │   └── Colors.jsx    
│   └── components             # Contains main UI components
└── .storybook
    ├── main.js               # Storybook configuration file
    ├── preview.js            # Storybook preview configuration
```

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd vite-react-storybook
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Run Storybook**:

   ```bash
   npm run storybook
   # or
   yarn storybook
   ```

This will launch Storybook in your browser at `http://localhost:6006/`, where you can view, test, and interact with your components.

## Setting Up the Project

### Step 1: Create a New Vite React Project

Create a new Vite project:

```bash
mkdir vite-react-storybook
cd vite-react-storybook
npm create vite@latest . -- --template react
```

### Step 2: Install Storybook

Add Storybook to your project:

```bash
npx sb init
```

Storybook will automatically configure itself to work with your Vite and React setup. The `sb init` command will create all the necessary Storybook files and dependencies.

### Step 3: Update Dependencies (Optional)

If you want to ensure you have the latest versions of dependencies, run:

```bash
npm install @storybook/react@latest @storybook/addon-actions@latest @storybook/addon-essentials@latest @storybook/addon-links@latest
```

### Step 4: Add Storybook Scripts

Add Storybook start scripts to your `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "storybook": "start-storybook -p 6006",
  "build-storybook": "build-storybook"
}
```

This will allow you to start your Vite dev server or Storybook using:

- **Start Storybook**: `npm run storybook`
- **Start Vite dev server**: `npm run dev`

### Step 5: Run Storybook

Start Storybook with:

```bash
npm run storybook
```

This will start the Storybook development server on `http://localhost:6006`.

## Development

### Adding Components

Add new components to the `src/components/` folder and create their corresponding stories in `src/components/<ComponentName>.stories.js`.

### Theming

Modify the light and dark theme configurations in `src/themes/` to customize the project's look and feel.

## Available Scripts

- **`npm run storybook`**: Start Storybook for component development.
- **`npm run build-storybook`**: Build the Storybook UI for deployment.

## Dependencies

- **React**: The core library for building UI components.
- **styled-components**: For creating reusable styled components.
- **Storybook**: To develop and test UI components in isolation.
- **@storybook/addon-themes**: To provide theme toggling within Storybook.

## Storybook Configuration

The `.storybook/preview.js` file defines theming and global styles using the **withThemeFromJSXProvider** decorator. This allows you to switch between `light` and `dark` themes in Storybook.

### Theming Setup

The `lightTheme` and `darkTheme` are imported from `src/themes` and applied to components in Storybook. You can easily customize these themes to fit your branding.

### Global Styles

The `GlobalStyles` uses **styled-components** to apply a consistent set of styles across the entire app. You can update `GlobalStyles.js` to adjust global styles such as body background, text color, and other CSS properties.

## Creating Components

To add a new component:

1. Create a new component in the `src/components` directory, e.g., `Button.js`.
2. Create a corresponding story in `src/components/Button.stories.js` to visualize it in Storybook.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions are welcome!

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Vite** for the super-fast build tool.
- **Storybook** for making component development easier.
- **Styled Components** for clean and powerful CSS-in-JS support.
