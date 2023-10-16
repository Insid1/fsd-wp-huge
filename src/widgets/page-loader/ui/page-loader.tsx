import { type FC } from 'react'
import ReactDOM from 'react-dom'
import cls from './page-loader.module.scss'
import { Loader } from 'shared/ui'

const PageLoader: FC = () => {
  return ReactDOM.createPortal(
    <div className={cls.container}>
      <div className={cls.loader}>
        <Loader/>
      </div>
    </div>, document.body
  )
}

export default PageLoader
