import { fireEvent, render, screen } from '@testing-library/react'
import Sidebar from './sidebar'

describe('Sidebar widget', () => {
  test('exists in document', () => {
    render(<Sidebar/>)

    const element = screen.getByTestId('sidebar')
    expect(element).toBeInTheDocument()
  })

  test('toggles "collapsed" class of sidebar when button clicked', async () => {
    render(<Sidebar/>)

    const element = screen.getByTestId('sidebar')
    const button = screen.getByTestId('sidebar-toggle-button')
    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(element).toHaveClass('collapsed')
  })
})
