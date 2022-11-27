import { render, screen } from '@testing-library/react'
import { mockMaterialPreview } from '../../../mocks/mockMaterials'
import MaterialSample from './MaterialSample'

describe('Given a MaterialSample function', () => {
  describe("When it's invoked with a material named `Gold Wood`", () => {
    test('Then it should render a button with the text `Select Gold Wood material`', () => {
      const expectedText = 'Select Gold Wood material'

      render(<MaterialSample material={mockMaterialPreview} />)
      const selectMaterialButton = screen.getByRole('button', {
        name: expectedText
      })

      expect(selectMaterialButton).toBeInTheDocument()
    })
  })
})
