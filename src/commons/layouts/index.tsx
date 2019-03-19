import { styles } from './styles'

import * as React from 'react'
import { About } from '../../components/about'

import { MatchProps } from 'routes'

export function Main(props: React.Props<{}> & MatchProps) {
  return (
    <div className={styles.root}>
      <About />
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}
