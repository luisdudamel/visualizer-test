import { collection, getDocs } from 'firebase/firestore'
import database from '../firebase/config'

const getData = async collectionToGet => {
  const currentCollection = collection(database, collectionToGet)
  const collectionDocuments = await getDocs(currentCollection)

  return collectionDocuments
}

export default getData
