import { render, screen } from '@testing-library/react'
import Fingerprint from './Fingerprint'

describe('Given a Fingerprint function', () => {
  describe("When it's invoked", () => {
    test('Then it should render a button', () => {
      const expectedButtonRole = 'button'

      render(<Fingerprint />)
      const fingerprintButon = screen.getByRole(expectedButtonRole)

      expect(fingerprintButon).toBeInTheDocument()
    })
  })
})
