import { style } from 'typestyle'
import * as csstips from 'csstips'

const root = style(csstips.flexRoot, csstips.vertical, {
  $debugName: 'layouts',
  height: '100%'
})

const content = style({
  $debugName: 'layouts',
  flex: '1 0 auto',
  margin: '0 auto',
  padding: '24px 4px',
  width: '100%',
  maxWidth: '1024px'
})

export const styles = {
  root,
  content
}
