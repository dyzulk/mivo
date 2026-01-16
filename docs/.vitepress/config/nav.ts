import { DefaultTheme } from 'vitepress'

export const navEn: DefaultTheme.NavItem[] = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/guide/installation' },
  { text: 'Manual', link: '/manual/' },
  { 
    text: 'Community', 
    items: [
      { text: 'Changelog', link: 'https://github.com/dyzulk/mivo/releases' },
      { text: 'Contributing', link: 'https://github.com/dyzulk/mivo/blob/main/CONTRIBUTING.md' },
      { text: 'Forum (Issues)', link: 'https://github.com/dyzulk/mivo/issues' },
      { text: 'Star on GitHub', link: 'https://github.com/dyzulk/mivo/stargazers' }
    ]
  }
]

export const navId: DefaultTheme.NavItem[] = [
  { text: 'Beranda', link: '/id/' },
  { text: 'Panduan', link: '/id/guide/installation' },
  { text: 'Buku Manual', link: '/id/manual/' },
  { 
    text: 'Komunitas', 
    items: [
      { text: 'Catatan Rilis', link: 'https://github.com/dyzulk/mivo/releases' },
      { text: 'Kontribusi', link: 'https://github.com/dyzulk/mivo/blob/main/CONTRIBUTING.md' },
      { text: 'Forum (Issues)', link: 'https://github.com/dyzulk/mivo/issues' },
      { text: 'Beri Bintang', link: 'https://github.com/dyzulk/mivo/stargazers' }
    ]
  }
]
