import { defineConfig } from 'vitepress'
import { sidebarEn, sidebarId } from './config/sidebars'
import { navEn, navId } from './config/nav'

export default defineConfig({
  title: "MIVO",
  description: "Modern Mikrotik Voucher Management System",
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  
  head: [
    ['link', { rel: 'icon', href: '/logo-m.svg' }]
  ],

  // Shared theme config
  themeConfig: {
    logo: { 
      light: '/logo-m.svg', 
      dark: '/logo-m-dark.svg' 
    },
    siteTitle: 'MIVO',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dyzulk/mivo' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 DyzulkDev'
    },

    search: {
      provider: 'local'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: navEn,
        sidebar: sidebarEn
      }
    },
    id: {
      label: 'Indonesia',
      lang: 'id',
      themeConfig: {
        nav: navId,
        sidebar: sidebarId
      }
    }
  }
})

