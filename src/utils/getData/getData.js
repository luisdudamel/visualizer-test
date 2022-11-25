import { collection, documentId, query, where } from 'firebase/firestore'
import database from '../../firebase/config'
import getCollectionData from '../getCollectionData/getCollectionData'

const getData = async collectionToGet => {
  const materialsCollection = query(collection(database, collectionToGet))
  const materialsQuery = getCollectionData(materialsCollection)

  return materialsQuery
}

export default getData
