import { type FC } from 'react'
import cls from './loader.module.scss'

const Loader: FC = () => {
  return (
    <span className={cls.loader}></span>
  )
}

export default Loader
