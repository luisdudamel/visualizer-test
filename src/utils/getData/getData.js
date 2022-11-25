import { collection, documentId, query, where } from 'firebase/firestore'
import database from '../../firebase/config'
import createDataStructure from '../createDataStructure/createDataStructure'
import getCollectionData from '../getCollectionData/getCollectionData'

const getData = async collectionToGet => {
  const materialsCollection = query(collection(database, collectionToGet))
  const materialsQuery = await getCollectionData(materialsCollection)
  const pointsToGet = [
    ...new Set(
      materialsQuery.map(material => {
        return material.points[0]
      })
    )
  ]

  const pointsQuery = await Promise.all(
    pointsToGet.map(async point => {
      const pointRawData = query(
        collection(database, 'points'),
        where(documentId(), '==', point)
      )

      const pointData = await getCollectionData(pointRawData)

      return {
        ...pointData[0],
        id: point
      }
    })
  )

  const currentData = createDataStructure(materialsQuery, pointsQuery)

  return currentData
}

export default getData
