import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a title', () => {
    render(<Home />)

    const title = screen.getByText('Get started', {
        exact: false
    })

    expect(title).toBeInTheDocument()
  })
})