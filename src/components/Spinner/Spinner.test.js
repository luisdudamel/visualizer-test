import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'

describe('Given a Spinner function', () => {
  describe('When invoked', () => {
    test("Then it should render a loader status icon'", () => {
      const expectedLoaderIconRole = 'status'

      render(<Spinner />)

      const loadingIcon = screen.getByRole(expectedLoaderIconRole)

      expect(loadingIcon).toBeInTheDocument()
    })
  })
})
