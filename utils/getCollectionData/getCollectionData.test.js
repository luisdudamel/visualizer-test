import getCollectionData from './getCollectionData'

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'),
  collection: jest.fn().mockResolvedValue(),
  getDocs: jest.fn().mockResolvedValue({
    docs: [
      {
        data: jest.fn().mockReturnValue({ name: 'Morse White Nature' }),
        id: 123456789
      },
      {
        data: jest.fn().mockReturnValue({ name: 'Morse Grey Nature' }),
        id: 123456789
      }
    ]
  })
}))

describe('Given a getData function', () => {
  describe('When its called with a collection with the documents `Morse White Nature` and `Morse Grey Nature`', () => {
    test('Then it should return an array with the elements `Morse White Nature` and `Morse Grey Nature`', async () => {
      const expectedCollectionData = [
        { name: 'Morse White Nature', id: 123456789 },
        { name: 'Morse Grey Nature', id: 123456789 }
      ]
      const database = 'materials'

      const collections = await getCollectionData(database)

      expect(collections).toEqual(expectedCollectionData)
    })
  })
})
