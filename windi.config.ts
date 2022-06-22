import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['src/renderer/**/*.{html,jsx,tsx}'],
  },
});
