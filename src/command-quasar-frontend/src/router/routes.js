
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'root', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/commands',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'commands', component: () => import('pages/Commands.vue') },
      { path: 'new', name: 'commandsNew', component: () => import('pages/CommandNew.vue') }
    ]
  },
  {
    path: '/snippets',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'snippets', component: () => import('pages/Snippets.vue') },
      { path: 'new', name: 'snippetsNew', component: () => import('pages/SnippetNew.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
