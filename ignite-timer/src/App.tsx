import { ThemeProvider } from 'styled-components'
import { Button } from './Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="danger" />
      <Button variant="secondary" />
      <Button variant="success" />
      <GlobalStyle />
    </ThemeProvider>
  )
}
