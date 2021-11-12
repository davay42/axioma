import { metaData } from './constants.js'
import head from './head.js'

const config = {
  title: metaData.title,
  description: metaData.description,
  lang: metaData.locale,
  head,
  locales: {
    '/': {
      lang: 'en-US',
      title: metaData.title,
      description: metaData.description,
    },
  },
  themeConfig: {
    logo: '/media/logo/holologo.svg',
    icon: 'media/logo/icon.svg',
    repo: 'https://github.com/davay42/axioma.center',
  },
}

export default config
