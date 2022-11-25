const createDataStructure = (materials, points) => {
  const pointsList = points.map(point => {
    return {
      place: point.name,
      point: point,
      materials: materials.filter(material => material.points[0] === point.id)
    }
  })

  return pointsList
}

export default createDataStructure
