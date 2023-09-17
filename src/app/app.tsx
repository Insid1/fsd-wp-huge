import { type FC, Suspense } from 'react'
import { AppRouter } from './providers/router-provider'
import { Navbar } from 'widgets/navbar'
import { useTheme } from 'shared/config'
import { Sidebar } from 'widgets/sidebar'
import 'app/styles/index.scss'
import 'shared/config/i18n'

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      {/* i18n translations might still be loaded by the http backend. */}
      <Suspense fallback="">
        <Navbar/>
        <div className="contentPage">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App
