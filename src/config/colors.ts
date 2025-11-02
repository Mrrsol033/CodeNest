export const colors = {
  // Primary Color Palette
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // Main primary color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  
  // Gradient combinations
  gradients: {
    primary: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
    premium: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #0ea5e9 100%)',
    dark: 'linear-gradient(135deg, #0c4a6e 0%, #1e40af 100%)',
    light: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%)',
  },
  
  // Semantic colors
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#0ea5e9',
  }
};

export type ColorTheme = typeof colors;