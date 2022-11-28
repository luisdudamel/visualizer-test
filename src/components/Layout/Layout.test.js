import { render, screen } from '@testing-library/react'
import mockDataOrdered from '../../mocks/mockData'
import Layout from './Layout'

describe('Given a Layout function', () => {
  describe('When it`s invoked', () => {
    test("Then it should render an image with the alternative text 'Kitchen with a table, 2 chairs and a window'", () => {
      const expectedAlternativeText =
        'Kitchen with a table, 2 chairs and a window'
      const mockBackgroundUrl = 'https://mock.jpg'

      render(
        <Layout data={mockDataOrdered} backgroundImageSrc={mockBackgroundUrl} />
      )
      const kitchenImage = screen.getByAltText(expectedAlternativeText)

      expect(kitchenImage).toBeInTheDocument()
    })
  })
})
