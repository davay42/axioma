import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({

  plugins: [
    Icons({}),
    AutoImport({   
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md  
      ],
      imports: [
        'vue',
      ], }),
    WindiCSS({
      scan: {
        dirs: ['.vitepress/'],
        include: ['index.md'],
        exclude: ['**/examples/**/*', '/node_modules/'],
        fileExtensions: ['vue', 'ts', 'md'],
      },
    }),
    Components({
      dirs: [
        '.vitepress/theme/components',
        '.vitepress/components',
      ],
      extensions: ['vue', 'ts'],
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      resolvers: [IconsResolver({prefix: false, })],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      exclude: [/node_modules/, /\.git/],
    }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core',
    ],
  },
})


