import { render, screen } from '@testing-library/react'
import MaterialLayer from './MaterialLayer'

describe('Given a MaterialLayer function', () => {
  describe('When invoked with an image with source `Material.png` and an alternative text `White Marble`', () => {
    const mockImage = 'https://Material.png'

    test.skip('Then it should render an image with the alt text `White Marble material`', () => {
      const expectedAltText = 'White Marble material'

      render(<MaterialLayer layerData={mockImage} />)

      const materialImage = screen.getByAltText(expectedAltText)

      expect(materialImage).toBeInTheDocument()
    })
  })
})
