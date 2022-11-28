import { render, screen } from '@testing-library/react'
import { mockMaterialLayer } from '../../mocks/mockLayers'
import MaterialLayer from './MaterialLayer'

describe('Given a MaterialLayer function', () => {
  describe('When invoked with an image with source `Material.png` and an alternative text `White Marble`', () => {
    test('Then it should render an image with the alt text `White Marble material`', () => {
      const expectedAltText = 'Roble Tierra material'

      render(<MaterialLayer layerData={mockMaterialLayer} />)

      const materialImage = screen.getByAltText(expectedAltText)

      expect(materialImage).toBeInTheDocument()
    })
  })
})
