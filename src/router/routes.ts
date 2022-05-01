const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/city/:city',
    name: 'City',
    component: () => import('../views/city/index.vue'),
    props: true,
  },
]

export default routes;
