import {
  mockMaterialsQuery,
  mockPointsList,
  mockPointsQuery
} from '../../mocks/mockQueries'
import createDataStructure from './createDataStructure'

describe('Given a createDataStructure function', () => {
  describe("When it's invoked with a list of 3 materials and 3 points", () => {
    test('Then it should return a list with the same 3 materials and 3 points grouped together', () => {
      const expectedPointsList = mockPointsList

      const pointsList = createDataStructure(
        mockMaterialsQuery,
        mockPointsQuery
      )

      expect(pointsList).toEqual(expectedPointsList)
    })
  })
})
