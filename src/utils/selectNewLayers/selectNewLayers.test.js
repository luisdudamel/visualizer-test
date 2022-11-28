import {
  mockActiveLayer,
  mockActiveLayersRepeated,
  mockNewLayer
} from '../../mocks/mockLayers'
import selectNewLayers from './selectNewLayers'

describe('Given a selectNewLayers function', () => {
  const expectedMaterialList = [
    {
      materialPreview: 'https://gold.jpg',
      layers: {
        mockId: 'https://gold.jpg'
      },
      name: 'Gold Material',
      points: ['mockPoint'],
      id: 'mockId'
    }
  ]
  describe('When invoked with no current layers and a new layer with the name `Gold material`', () => {
    test('Then it should return a list with a layer with name `Gold Material`', async () => {
      const newMaterialList = await selectNewLayers([], mockNewLayer)

      expect(expectedMaterialList).toEqual(newMaterialList)
    })
  })

  describe('When invoked with a list of layers with `Gold Material` in it and a new layer with the name `Gold Material`', () => {
    test('Then it should return a list with a layer with the name `Gold Material`', async () => {
      const newMaterialList = await selectNewLayers(
        mockActiveLayer,
        mockNewLayer
      )

      expect(expectedMaterialList).toEqual(newMaterialList)
    })
  })

  describe('When invoked with a list of layers with point `mockPoint` and name `Gold Material`', () => {
    describe('And a new layer with with point `mockPoint` and name `Silver Material`', () => {
      test('Then it should return a list with a layer with the name `Silver Material`', async () => {
        const expectedSilverMaterialList = [
          {
            materialPreview: 'https://silver.jpg',
            layers: {
              mockId: 'https://silver.jpg'
            },
            name: 'Silver Material',
            points: ['mockPoint'],
            id: 'mockId'
          }
        ]

        const newMaterialList = await selectNewLayers(
          mockActiveLayer,
          mockActiveLayersRepeated
        )

        expect(expectedSilverMaterialList).toEqual(newMaterialList)
      })
    })
  })
})
