import { defineConfig } from 'vite'
import Components from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'


export default defineConfig({

  plugins: [

    Components({
      dirs: [
        '.vitepress/theme/components',
        '.vitepress/components',
      ],
      extensions: ['vue', 'ts'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      customLoaderMatcher: id => id.endsWith('.md'),
      
    }),
    WindiCSS({
      scan: {
        dirs: ['.vitepress'],
        include: ['index.md'],
        exclude: ['**/examples/**/*'],
        fileExtensions: ['vue', 'ts'],
      },
    }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core',
    ],
  },
})


