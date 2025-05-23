
# Floating Action Button Component

A reusable Floating Action Button (FAB) component built with React, Tailwind CSS, and SVG for beautiful UI effects.

## Features

- Customizable icon using Lucide React icons
- Beautiful squircle shape with gradient outline
- Smooth hover animations
- Accessible and responsive design
- Easily integrates with any React project

## Installation

1. Copy the `FloatingActionButton.tsx` file to your project
2. Ensure you have the required dependencies:
   - React
   - Tailwind CSS
   - Lucide React (for icons)
   - shadcn/ui Button component (or replace with your own button implementation)

## Usage

```tsx
import { Plus } from 'lucide-react';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
    // Add your action here
  };

  return (
    <div className="your-container">
      {/* Your other components */}
      
      <FloatingActionButton 
        icon={Plus} 
        onClick={handleClick} 
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | LucideIcon | Required | The icon to display in the button |
| onClick | function | undefined | Click handler for the button |
| className | string | "" | Additional CSS classes |

## Customization

You can customize the appearance by:

1. Modifying the gradient colors in the SVG definition
2. Changing the dimensions and positioning
3. Adding additional effects or animations

## License

MIT
