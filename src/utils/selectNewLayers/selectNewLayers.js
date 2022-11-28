const selectNewLayers = (currentLayers, newLayer) => {
  const currentPointLayer = currentLayers.find(
    layer => layer.points[0] === newLayer.points[0]
  )

  if (currentLayers.includes(newLayer)) {
    return [...currentLayers]
  } else if (
    !currentLayers.includes(newLayer) &&
    currentLayers.includes(currentPointLayer)
  ) {
    const filteredLayerList = currentLayers.filter(
      layer => layer.points[0] !== newLayer.points[0]
    )
    return [...filteredLayerList, newLayer]
  } else return [...currentLayers, newLayer]
}

export default selectNewLayers
