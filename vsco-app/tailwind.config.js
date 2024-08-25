/* eslint-disable @typescript-eslint/no-var-requires */
import tailwindAnimated from 'tailwindcss-animated';
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  content: ['./src/renderer/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [tailwindAnimated],
};
