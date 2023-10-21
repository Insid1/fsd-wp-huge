import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui'

describe('Button', () => {
  test('button renders and shows inner text content', () => {
    render(<Button>TEST BUTTON</Button>)

    const element = screen.getByTestId('button')

    expect(element).toBeInTheDocument()
    expect(element.textContent).toEqual('TEST BUTTON')
  })

  test('button renders and gets class', () => {
    render(<Button className='myClass'>TEST BUTTON</Button>)

    const element = screen.getByTestId('button')

    expect(element).toBeInTheDocument()
    expect(element.className).toEqual('myClass')
  })
})
