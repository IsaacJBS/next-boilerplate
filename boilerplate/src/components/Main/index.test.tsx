import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main', () => {
  it('should render heading', () => {
    render(<Main />)

    expect(screen.getAllByRole('heading', { name: /react avançado/i }))
  })

  it('should renders colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
