const createDataStructure = (materials, points) => {
  const materialNamesShortened = materials.map(material => {
    const materialNameShortened = (material.name = material.name
      .split(' ')
      .slice(0, 2)
      .join(' '))

    return {
      ...material,
      name: materialNameShortened
    }
  })

  const pointsList = points.map(point => {
    return {
      place: point.name,
      point,
      materials: materialNamesShortened.filter(
        material => material.points[0] === point.id
      )
    }
  })

  return pointsList
}

export default createDataStructure
