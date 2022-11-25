const mockDataOrdered = [
  {
    place: 'Pavimento',
    point: {
      name: 'Pavimento',
      coordX: 40,
      coordY: 86,
      id: 'mockid'
    },
    materials: [
      {
        name: 'Morse White Nature',
        materialPreview: 'https://image.png',
        points: ['EnRd7hAaNydVdVJ06qgF'],
        layers: {
          EnRd7hAaNydVdVJ06qgF: 'https://image.png'
        }
      },
      {
        name: 'Morse Grey Nature',
        materialPreview: 'https://image.png',

        layers: {
          EnRd7hAaNydVdVJ06qgF: 'https://image.png'
        },
        points: ['EnRd7hAaNydVdVJ06qgF']
      }
    ]
  },
  {
    place: 'Entrepaños',
    point: {
      coordY: 47,
      coordX: 61,
      name: 'Entrepaños',
      id: 'mockid'
    },
    materials: [
      {
        points: ['i7EVutewtycZY2qwmldG'],
        name: 'Oxo Line Blanco',
        layers: {
          i7EVutewtycZY2qwmldG: 'https://image.png'
        },
        materialPreview: 'https://image.png'
      },
      {
        materialPreview: 'https://image.png',
        layers: {
          i7EVutewtycZY2qwmldG: 'https://image.png'
        },
        points: ['i7EVutewtycZY2qwmldG'],
        name: 'Oxo Deco Blanco'
      },
      {
        name: 'Marmi China',
        points: ['i7EVutewtycZY2qwmldG'],
        layers: {
          i7EVutewtycZY2qwmldG: 'https://image.png'
        },
        materialPreview: 'https://image.png'
      }
    ]
  }
]

export default mockDataOrdered
