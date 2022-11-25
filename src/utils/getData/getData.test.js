import { mockMaterialQuery } from '../../../mocks/mockCollections'
import getData from './getData'

jest.mock('../getCollectionData/getCollectionData', () =>
  jest
    .fn()
    .mockReturnValueOnce(mockMaterialQuery)
    .mockReturnValueOnce(mockMaterialQuery)
    .mockReturnValueOnce(mockMaterialQuery)
    .mockReturnValueOnce(mockMaterialQuery)
    .mockReturnValueOnce(mockMaterialQuery)
)

describe('Given a getData function', () => {
  describe("When it's called with a collection `materials`", () => {
    test('Then it should return a list of 4 points and materials', async () => {
      const collectionToGet = 'materials'
      const expectedLength = 4

      const data = await getData(collectionToGet)

      expect(data).toHaveLength(expectedLength)
    })
  })

  describe("When it's called with a collection `materials` and the database throws an error", () => {
    test('Then it should return the string `Error loading data`', async () => {
      const collectionToGet = 'materials'
      const expectedText = 'Error loading data'

      const data = await getData(collectionToGet)

      expect(data).toBe(expectedText)
    })
  })
})
