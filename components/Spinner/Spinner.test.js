import { render, screen } from '@testing-library/react'
import Spinner from './Spinner'

describe('Given a Spinner function', () => {
  describe('When invoked', () => {
    test("Then it should render a loader status icon with a text 'Loading...'", () => {
      const expectedLoadingText = 'Loading...'
      const expectedLoaderIconRole = 'status'

      render(<Spinner />)
      const loadingText = screen.getByText(expectedLoadingText)
      const loadingIcon = screen.getByRole(expectedLoaderIconRole)

      expect(loadingText).toBeInTheDocument()
      expect(loadingIcon).toBeInTheDocument()
    })
  })
})
