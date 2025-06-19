# My React TypeScript Boilerplate

A modern, ready-to-use React TypeScript boilerplate with Vite, React Router, and TailwindCSS.

## Features

- ⚡ **Vite** - Lightning fast build tool with instant server start and HMR
- 🔧 **TypeScript** - Type safety for your React application
- 🧩 **React 19** - Latest React version with improved rendering and hooks
- 🚦 **React Router v7** - Latest version for client-side routing
- 🎨 **TailwindCSS** - Utility-first CSS framework for rapid UI development
- 📏 **ESLint** - Modern JavaScript/TypeScript linting
- 🔄 **Responsive Design** - Mobile-first approach with a responsive navbar

## Project Structure

```
my-react-ts-boilerplate/
├── public/              # Static assets
├── src/                 # Source code
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx   # Responsive navigation with mobile menu
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Page1.tsx
│   │   ├── Page2.tsx
│   │   ├── Page3.tsx
│   │   └── Page4.tsx
│   ├── App.tsx          # Main application component with routing
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── .eslintrc.js         # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration for TailwindCSS
├── tailwind.config.js   # TailwindCSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-react-ts-boilerplate.git
   cd my-react-ts-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to analyze your code

## Customization

### Styling

This project uses TailwindCSS for styling. You can customize the theme in `tailwind.config.js`.

### Adding New Routes

To add new routes, update the `Routes` component in `src/App.tsx`:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/page1" element={<Page1 />} />
  {/* Add your new routes here */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>
```

### Navbar

The project includes a responsive navbar component (`src/components/Navbar.tsx`) with mobile menu support. Update the navigation links in this file when adding new routes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
