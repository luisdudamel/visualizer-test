import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockCurrentActiveLayers } from '../../mocks/mockLayers'
import {
  mockMaterialPreviewList,
  mockMaterialPreviewListLonger
} from '../../mocks/mockMaterials'
import MaterialSelector from './MaterialSelector'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest
    .fn()
    .mockReturnValueOnce('mockRef')
    .mockReturnValueOnce('mockRef')
}))

describe('Given a MaterialSelector function', () => {
  describe("When it's invoked with a place `Window` and two materials: `Wood` and `Metal` ", () => {
    test.skip('Then it should render a list of two materials images with the alternative text `Wood material sample` and `Metal material sample`', () => {
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
      test.skip('Then it should call the function received`', async () => {
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

    describe('And the user clicks on a material with the alternative name `Wood material sample` received', () => {
      test('Then it should call the function received`', async () => {
        const mockSetFunction = jest.fn()
        const expectedListRole = 'Wood material sample'

        render(
          <MaterialSelector
            materialPreviewList={mockMaterialPreviewList}
            currentActiveLayers={mockCurrentActiveLayers}
            setLayers={mockSetFunction}
          />
        )

        const materialListItem = screen.getByAltText(expectedListRole)

        await userEvent.click(materialListItem)

        expect(mockSetFunction).toHaveBeenCalled()
      })
    })
  })

  describe("When it's invoked with three materials", () => {
    describe('And the user clicks on the button with the alternative text `Next`', () => {
      test('Then it should call the scroll function', async () => {
        const mockRef = {
          current: {
            scrollLeft: 0
          }
        }

        const expectedButtonText = 'Next'
        const expectedRef = {
          current: {
            scrollLeft: 20
          }
        }

        render(
          <MaterialSelector
            materialPreviewList={mockMaterialPreviewListLonger}
            currentActiveLayers={mockCurrentActiveLayers}
            setLayers={jest.fn()}
          />
        )

        const materialButton = screen.getByRole('button', {
          name: 'Glass material sample Select Glass material'
        })

        await userEvent.click(materialButton)

        const nextButton = screen.getByRole('button', {
          name: expectedButtonText
        })
        await userEvent.click(nextButton)

        expect(mockRef).toBe(expectedRef)
      })
    })
  })
})
