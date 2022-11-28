const selectNewLayers = (currentLayers, newLayer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const currentPointLayer = currentLayers.find(
        layer => layer.points[0] === newLayer.points[0]
      )

      if (currentLayers.includes(newLayer)) {
        resolve([...currentLayers])
      } else if (
        !currentLayers.includes(newLayer) &&
        currentLayers.includes(currentPointLayer)
      ) {
        const filteredLayerList = currentLayers.filter(
          layer => layer.points[0] !== newLayer.points[0]
        )
        resolve([...filteredLayerList, newLayer])
      } else resolve([...currentLayers, newLayer])
    }, 300)
  })
}

export default selectNewLayers
