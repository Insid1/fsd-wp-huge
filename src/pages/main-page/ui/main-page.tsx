import React, { type FC } from 'react'
import { Button } from 'shared/ui'

class Handler {
  private count = 0

  public get countt (): number {
    return this.count
  }

  public handleClick (): void {
    console.log(this.countt)
    this.count++
  }
}

const MainPage: FC = () => {
  const handler = new Handler()

  return (
    <>
      <Button onClick={handler.handleClick}>main</Button>
    </>
  )
}

export default MainPage
