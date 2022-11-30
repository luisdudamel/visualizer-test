import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { mockDataOrdered, mockDataLayerSelected } from '../../mocks/mockData'
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

describe('When it`s invoked with a list of 3 materials', () => {
  describe('And the user clicks on the image with the alternative `Fingerprint selector for Pavimento`', () => {
    describe('And the user clicks on the image with the alternative `Morse White Nature material sample`', () => {
      test("Then it should render an image with the alternative text 'Morse White Nature material'", async () => {
        const expectedFingerPrintAlternativeText =
          'Fingerprint selector for Pavimento Select Pavimento Zone'
        const expectedMaterialSampleAlternativeText =
          'Morse White material sample'
        const expectedLayerAlternativeText = 'Morse White Nature Material'
        const expectedCloseButtonText = 'Close material selector'
        const mockBackgroundUrl = 'https://mock.jpg'

        render(
          <Layout
            data={mockDataLayerSelected}
            backgroundImageSrc={mockBackgroundUrl}
          />
        )

        const fingerPrintButton = screen.getByRole('button', {
          name: expectedFingerPrintAlternativeText
        })
        await userEvent.click(fingerPrintButton)

        const materialSample = screen.getByAltText(
          expectedMaterialSampleAlternativeText
        )
        await userEvent.click(materialSample)

        const closeButton = screen.getByRole('button', {
          name: expectedCloseButtonText
        })
        await userEvent.click(closeButton)

        setTimeout(() => {
          const materialLayer = screen.getByAltText(
            expectedLayerAlternativeText
          )
          expect(materialLayer).toBeInTheDocument()
        }, 3000)
      })
    })
  })
})
