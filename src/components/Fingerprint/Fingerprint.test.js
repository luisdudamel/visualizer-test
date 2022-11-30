import { render, screen } from '@testing-library/react'
import Fingerprint from './Fingerprint'
import userEvent from '@testing-library/user-event'

describe('Given a Fingerprint function', () => {
  describe("When it's invoked with a place `Pavimento`", () => {
    test('Then it should render a button', () => {
      const expectedButtonRole = 'button'
      const mockPlace = 'Pavimento'

      render(
        <Fingerprint
          place={mockPlace}
          coordinates={{ coordX: 20, coordY: 30 }}
        />
      )
      const fingerprintButon = screen.getByRole(expectedButtonRole)

      expect(fingerprintButon).toBeInTheDocument()
    })

    test("Then it should render an image with the alternative text 'Fingerprint selector for Pavimento'", () => {
      const expectedAlternativeText = 'Fingerprint selector for Pavimento'
      const mockPlace = 'Pavimento'

      render(
        <Fingerprint
          place={mockPlace}
          coordinates={{ coordX: 20, coordY: 30 }}
        />
      )
      const fingerprintImage = screen.getByAltText(expectedAlternativeText)

      expect(fingerprintImage).toBeInTheDocument()
    })
  })

  describe('When its invoked with receiving a function as parameter and the user clicks the button', () => {
    test('Then it should call the received function', async () => {
      const expectedButtonRole = 'button'
      const mockFunction = jest.fn()

      render(
        <Fingerprint
          action={mockFunction}
          coordinates={{ coordX: 20, coordY: 30 }}
        />
      )

      const fingerPrintButton = screen.getByRole(expectedButtonRole)
      await userEvent.click(fingerPrintButton)

      expect(mockFunction).toHaveBeenCalled()
    })
  })
})
