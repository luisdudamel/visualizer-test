import {
  collection,
  documentId,
  getDoc,
  getDocs,
  query,
  where
} from 'firebase/firestore'
import database from '../../firebase/config'
import getCollectionData from '../getCollectionData/getCollectionData'

const getData = async collectionToGet => {
  const materialsCollection = query(collection(database, collectionToGet))
  const materialsQuery = getCollectionData(materialsCollection)

  const pointsToGet = [
    ...new Set(
      (await materialsQuery).map(material => {
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

      return {
        ...(await getCollectionData(pointRawData)),
        id: point
      }
    })
  )

  return pointsQuery
}

export default getData
