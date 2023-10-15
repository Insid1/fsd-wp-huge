import { type FC } from 'react'
import cls from './page-loader.module.scss'
import { Loader } from 'shared/ui'

const PageLoader: FC = () => {
  return (
    <div className={cls.container}>
      <div className={cls.loader}>
        <Loader/>
      </div>
    </div>
  )
}

export default PageLoader
