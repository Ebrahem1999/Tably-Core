# Tably-Core

A React component library for restaurant menu applications.

## Features

- 🍽️ Menu components (ItemCard, CategoryTabs, etc.)
- 🛒 Shopping cart functionality
- 🌐 Multi-language support (i18n)
- 📱 Responsive design
- 🎨 Customizable themes

## Installation

```bash
npm install @tably/core
```

## Usage

```jsx
import { 
  MenuPage, 
  CartButton, 
  CartProvider 
} from '@tably/core';
import '@tably/core/styles';

function App() {
  return (
    <CartProvider>
      <MenuPage />
      <CartButton />
    </CartProvider>
  );
}
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build:lib

# Preview build
npm run preview
```

## Automated Deployment

This library is automatically built and tagged when changes are pushed to the main branch. The build process:

1. Installs dependencies
2. Builds the library
3. Creates a timestamp-based version tag
4. Triggers dependent projects to update

## Versioning

Versions are automatically generated using the format: `vYYYYMMDD-HHMMSS`

Example: `v20241217-143022`