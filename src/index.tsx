import { render } from 'react-dom'
import App from 'app/app'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'app/providers/theme-prodiver/ui/theme-prodiver'

render((
    <ThemeProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>

),
document.getElementById('root')
)
