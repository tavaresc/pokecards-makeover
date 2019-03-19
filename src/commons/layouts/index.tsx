import * as React from 'react'
import { About } from 'components/about'

import { MatchProps } from 'routes'

export function Main(props: React.Props<{}> & MatchProps) {
  return (
    <div>
      <About />
      <div>{props.children}</div>
    </div>
  )
}
