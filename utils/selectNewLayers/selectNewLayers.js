const selectNewLayers = (currentLayers, newLayer) => {
  const currentPointLayer = currentLayers.find(
    layer => layer.points[0] === newLayer.points[0]
  )

  switch (true) {
    case currentLayers.includes(newLayer):
      return [...currentLayers]

    case !currentLayers.includes(newLayer) &&
      currentLayers.includes(currentPointLayer):
      const filteredLayerList = currentLayers.filter(
        layer => layer.points[0] !== newLayer.points[0]
      )
      return [...filteredLayerList, newLayer]

    default:
      return [...currentLayers, newLayer]
  }
}

export default selectNewLayers
