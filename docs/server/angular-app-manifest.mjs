
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/create"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9418, hash: '53af3a1285af4d38492a8f54e31eb72bb69130ee25d538b52975bbbbc5653187', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'aa81e03e8058caef8ca2ea7245715103a6eee34c6b2c73ea873b764f4934ca72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'create/index.html': {size: 25456, hash: 'b4ea9125ac1bd4057667a366248cdc5e1182e1b4db41f70ebbcea7a7f88e58b2', text: () => import('./assets-chunks/create_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 16255, hash: 'f398b875e14c362cc5d7b4ed5b89b0e6cd55d2a7c2e109cf64e964d98a3f13a0', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 27272, hash: '0f09c5925ff701d5f1623018279f157eb053eb354664ad22b8be8934547da4b4', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-CBFJCSQ5.css': {size: 27353, hash: 'ePnyqC1sVwY', text: () => import('./assets-chunks/styles-CBFJCSQ5_css.mjs').then(m => m.default)}
  },
};
