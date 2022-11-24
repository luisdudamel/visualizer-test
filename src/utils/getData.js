import { collection, getDocs } from 'firebase/firestore'
import database from '../firebase/config'

const getData = async collectionToGet => {
  const currentCollection = collection(database, collectionToGet)
  const collectionDocuments = await getDocs(currentCollection)
  console.log(collectionDocuments)

  const documentsData = collectionDocuments.docs.map(document => {
    return document.data()
  })

  return documentsData
}

export default getData
