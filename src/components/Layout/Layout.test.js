import { render, screen } from '@testing-library/react'
import Layout from './Layout'

describe('Given a Layout function', () => {
  describe('When it`s invoked', () => {
    const mockImage = {
      src: 'https://Material.png',
      name: 'White Marble'
    }

    test("Then it should render an image with the alternative text 'Kitchen with a table, 2 chairs and a window'", () => {
      const expectedAlternativeText =
        'Kitchen with a table, 2 chairs and a window'

      render(<Layout data={mockImage} />)
      const kitchenImage = screen.getByAltText(expectedAlternativeText)

      expect(kitchenImage).toBeInTheDocument()
    })
  })
})
