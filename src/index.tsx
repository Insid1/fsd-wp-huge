import { createRoot } from 'react-dom/client'
import App from 'app/app'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'app/providers/theme-prodiver/ui/theme-prodiver'
import { ErrorBoundary } from 'app/providers/error-boundary-provider'
import { ErrorPage } from 'pages/error-page'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorPage/>}>
        <App/>
      </ErrorBoundary>
    </BrowserRouter>
  </ThemeProvider>,
)
