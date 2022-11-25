import { mockMaterialQuery } from '../../../mocks/mockCollections'
import getData from './getData'

jest.mock('../getCollectionData/getCollectionData', () =>
  jest.fn().mockResolvedValue(mockMaterialQuery)
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
})
