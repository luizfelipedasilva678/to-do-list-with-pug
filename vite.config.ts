import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import cssnano from 'cssnano';
import postcssNested from 'postcss-nested';
import postcssPixToRem from 'postcss-pxtorem';

export default defineConfig({
  plugins: [pugPlugin()],
  css: {
    postcss: {
      plugins: [
        cssnano,
        postcssNested,
        postcssPixToRem({
          propList: ['*'],
          rootValue: 16,
        }),
      ],
    },
  },
});
