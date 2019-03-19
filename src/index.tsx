import 'styles/css/reset.css'
import 'bootstrap/dist/css/bootstrap.css'

import * as React from 'react'
import { render } from 'react-dom'
import { Router } from '@reach/router'

import { forceRenderStyles } from 'typestyle'

import { Routes } from 'routes'

import { Main } from 'commons/layouts'
import { A } from 'views/a'
import { B } from 'views/b'

const App = (
  <Router>
    <Main path={Routes.index}>
      <A path={Routes.index} />
      <B path={Routes.b} />
    </Main>
  </Router>
)

// poi magic
render(App, document.querySelector('#app'))

// to prevent an unsightly flash on initial render
forceRenderStyles()

// hmr: only refresh the page if necessary
if (module.hot) {
  module.hot.accept()
}
