import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockCurrentActiveLayers } from '../../mocks/mockLayers'
import { mockMaterialPreviewList } from '../../mocks/mockMaterials'
import MaterialSelector from './MaterialSelector'

describe('Given a MaterialSelector function', () => {
  describe("When it's invoked with a place `Window` and two materials: `Wood` and `Metal` ", () => {
    test('Then it should render a list of two materials images with the alternative text `Wood material sample` and `Metal material sample`', () => {
      const expectedWoodMaterialText = 'Wood material sample'
      const expectedMetalMaterialText = 'Metal material sample'

      render(
        <MaterialSelector
          materialPreviewList={mockMaterialPreviewList}
          currentActiveLayers={mockCurrentActiveLayers}
        />
      )
      const woodListItem = screen.getByAltText(expectedWoodMaterialText)
      const metalListItem = screen.getByAltText(expectedMetalMaterialText)

      expect(woodListItem).toBeInTheDocument()
      expect(metalListItem).toBeInTheDocument()
    })
  })

  describe('When its invoked with a function', () => {
    describe('And the user clicks outside the selector area', () => {
      test('Then it should call the function received`', async () => {
        const mockCloseFunction = jest.fn()

        render(
          <MaterialSelector
            materialPreviewList={mockMaterialPreviewList}
            currentActiveLayers={mockCurrentActiveLayers}
            closeSelectorAction={mockCloseFunction}
          />
        )

        const selectorContainer = screen.getByTestId('selector-close-area')

        await userEvent.click(selectorContainer)

        expect(mockCloseFunction).toHaveBeenCalled()
      })
    })
  })
})
