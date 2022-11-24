import getData from './getData'

jest.mock('firebase/firestore', () => ({
  ...jest.requireActual('firebase/firestore'),
  collection: jest.fn().mockResolvedValue(),
  getDocs: jest.fn().mockResolvedValue({
    docs: [
      {
        data: jest.fn().mockReturnValue('Morse White Nature')
      },
      {
        data: jest.fn().mockReturnValue('Morse Grey Nature')
      }
    ]
  })
}))

describe('Given a getData function', () => {
  describe('When its called with a collection with the documents `Morse White Nature` and `Morse Grey Nature`', () => {
    test('Then it should return an array with the elements `Morse White Nature` and `Morse Grey Nature`', async () => {
      const expectedCollectionData = ['Morse White Nature', 'Morse Grey Nature']
      const database = 'materials'

      const collections = await getData(database)

      expect(collections).toEqual(expectedCollectionData)
    })
  })
})
