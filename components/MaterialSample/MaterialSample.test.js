import { render, screen } from '@testing-library/react'
import { mockMaterialPreview } from '../../mocks/mockMaterials'
import MaterialSample from './MaterialSample'
import userEvent from '@testing-library/user-event'

describe('Given a MaterialSample function', () => {
  describe("When it's invoked with a material named `Gold Wood`", () => {
    test('Then it should render a button with the text `Gold Wood material sample Select Gold Wood material`', () => {
      const expectedText = 'Gold Wood material sample Select Gold Wood material'

      render(<MaterialSample material={mockMaterialPreview} />)
      const selectMaterialButton = screen.getByRole('button', {
        name: expectedText
      })

      expect(selectMaterialButton).toBeInTheDocument()
    })
  })

  describe("When it's invoked with a material named `Gold Wood` and a function", () => {
    describe('And the user clicks on the button with the text `Gold Wood material sample Select Gold Wood material`', () => {
      test('Then it should call the received function`', async () => {
        const expectedButtonText =
          'Gold Wood material sample Select Gold Wood material'
        const mockFunction = jest.fn()

        render(
          <MaterialSample
            setLayerFunction={mockFunction}
            material={mockMaterialPreview}
          />
        )
        const selectMaterialButton = screen.getByRole('button', {
          name: expectedButtonText
        })
        await userEvent.click(selectMaterialButton)

        expect(mockFunction).toHaveBeenCalled()
      })
    })
  })
})
