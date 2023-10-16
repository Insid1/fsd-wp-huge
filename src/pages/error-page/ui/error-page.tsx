import { type FC } from 'react'
import { Button } from 'shared/ui'

const ErrorPage: FC = () => {
  const handleReloadPage = (): void => {
    location.reload()
  }
  return (
    <>
      <div>Ooopps, something went wrong</div>
      <Button onClick={handleReloadPage}>Refresh the page!</Button>
    </>
  )
}

export default ErrorPage
