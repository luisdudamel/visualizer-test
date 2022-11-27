import { render, screen } from '@testing-library/react'
import { mockMaterialPreviewList } from '../../../mocks/mockMaterials'
import MaterialSelector from './MaterialSelector'

describe('Given a MaterialSelector function', () => {
  describe("When it's invoked with a place `Window` and two materials: `Wood` and `Metal` ", () => {
    test('Then it should render a list of two materials images with the alternative text `Wood material sample` and `Metal material sample`', () => {
      const expectedWoodMaterialText = 'Wood material sample'
      const expectedMetalMaterialText = 'Metal material sample'

      render(<MaterialSelector materialPreviewList={mockMaterialPreviewList} />)
      const woodListItem = screen.getByAltText(expectedWoodMaterialText)
      const metalListItem = screen.getByAltText(expectedMetalMaterialText)

      expect(woodListItem).toBeInTheDocument()
      expect(metalListItem).toBeInTheDocument()
    })
  })
})
