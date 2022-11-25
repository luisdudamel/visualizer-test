import { render, screen } from '@testing-library/react'
import MaterialLayer from './MaterialLayer'

describe('Given a MaterialLayer function', () => {
  describe('When invoked with an image with source `Material.png` and an alternative text `White Marble`', () => {
    const mockImage = {
      src: 'https://Material.png',
      name: 'White Marble'
    }

    test('Then it should render an image with the alt text `White Marble material`', () => {
      const expectedAltText = 'White Marble material'

      render(<MaterialLayer layerData={mockImage} />)

      const materialImage = screen.getByAltText(expectedAltText)

      expect(materialImage).toBeInTheDocument()
    })
  })
})
