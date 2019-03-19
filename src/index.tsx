import * as React from 'react'
import * as ReactDOM from 'react-dom'

function App() {
  <div id="root" />
  const rootElement = document.getElementById('root')
  const element = React.createElement('div', {
    className: 'container',
    children: 'Hello!'
  })

  ReactDOM.render(element, rootElement)
}

// =====================
export { App }
