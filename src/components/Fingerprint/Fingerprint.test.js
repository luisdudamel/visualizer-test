import { render, screen } from '@testing-library/react'
import Fingerprint from './Fingerprint'
import userEvent from '@testing-library/user-event'

describe('Given a Fingerprint function', () => {
  describe("When it's invoked", () => {
    test('Then it should render a button', () => {
      const expectedButtonRole = 'button'

      render(<Fingerprint />)
      const fingerprintButon = screen.getByRole(expectedButtonRole)

      expect(fingerprintButon).toBeInTheDocument()
    })

    test("Then it should render an image with the alternative text 'Fingerprint icon'", () => {
      const expectedAlternativeText = 'Fingerprint icon'

      render(<Fingerprint />)
      const fingerprintImage = screen.getByAltText(expectedAlternativeText)

      expect(fingerprintImage).toBeInTheDocument()
    })
  })

  describe('When its invoked with receiving a function as parameter and the user clicks the button', () => {
    test('Then it should call the received function', async () => {
      const expectedButtonRole = 'button'
      const mockFunction = jest.fn()

      render(<Fingerprint action={mockFunction} />)

      const fingerPrintButton = screen.getByRole(expectedButtonRole)
      await userEvent.click(fingerPrintButton)

      expect(mockFunction).toHaveBeenCalled()
    })
  })
})
