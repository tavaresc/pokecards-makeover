import * as React from 'react'
// import * as ReactDOM from 'react-dom'

import { MatchProps } from 'routes'

export function A(_props: MatchProps) {
  // <div id="root"></div>
  // const rootElement = document.getElementById('root')
  const props = {
    className: 'container',
    children: 'Hello!'
  }
  const element = <div {...props} />

  return element
}
