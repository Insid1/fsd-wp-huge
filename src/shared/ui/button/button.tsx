import { type FC, type HTMLAttributes } from 'react'
import { classNames } from 'shared/lib'
import cls from './button.module.scss'
import { type ColorType, type UIElementType } from 'shared/config'

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color?: ColorType
  themeType?: UIElementType | 'clear'
}

const Button: FC<IButtonProps> = (
  {
    color = 'primary',
    themeType = 'primary',
    ...rest
  }) => {
  return (
    <button
      className={classNames(
        cls.btn,
        {
          [cls[`${color}Color`]]: color,
          [cls[`${themeType}Type`]]: themeType,
        },
      )}
      {...rest}
    />
  )
}

export default Button
