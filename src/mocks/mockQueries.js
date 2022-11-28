export const mockMaterialsQuery = [
  {
    layers: {
      mockId1: 'https://mockImage.jpg'
    },
    materialPreview: 'https://mockImage.jpg',
    points: ['mockId1'],
    name: 'Morse White Nature'
  },
  {
    layers: {
      mockId2: 'https://mockImage.jpg'
    },
    points: ['mockId2'],
    materialPreview: 'https://mockImage.jpg',
    name: 'Marmi China'
  },
  {
    materialPreview: 'https://mockImage.jpg',
    name: 'Etimoe Ice',
    points: ['mockId3'],
    layers: {
      mockId3: 'https://mockImage.jpg'
    }
  }
]

export const mockPointsQuery = [
  {
    name: 'Floor',
    coordX: 40,
    coordY: 86,
    id: 'mockId1'
  },
  {
    coordY: 47,
    coordX: 61,
    name: 'Kitchen',
    id: 'mockId2'
  },

  {
    name: 'Shelf',
    coordX: 71,
    coordY: 38,
    id: 'mockId3'
  }
]

export const mockPointsList = [
  {
    place: 'Floor',
    point: {
      name: 'Floor',
      coordX: 40,
      coordY: 86,
      id: 'mockId1'
    },
    materials: [
      {
        name: 'Morse White',
        layers: {
          mockId1: 'https://mockImage.jpg'
        },
        points: ['mockId1'],
        materialPreview: 'https://mockImage.jpg'
      }
    ]
  },
  {
    place: 'Kitchen',
    point: {
      coordY: 47,
      coordX: 61,
      name: 'Kitchen',
      id: 'mockId2'
    },
    materials: [
      {
        name: 'Marmi China',
        layers: {
          mockId2: 'https://mockImage.jpg'
        },
        points: ['mockId2'],
        materialPreview: 'https://mockImage.jpg'
      }
    ]
  },
  {
    place: 'Shelf',
    point: {
      coordX: 71,
      name: 'Shelf',
      coordY: 38,
      id: 'mockId3'
    },
    materials: [
      {
        layers: {
          mockId3: 'https://mockImage.jpg'
        },
        points: ['mockId3'],
        materialPreview: 'https://mockImage.jpg',
        name: 'Etimoe Ice'
      }
    ]
  }
]
