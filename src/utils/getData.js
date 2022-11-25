import { getDocs } from 'firebase/firestore'

const getData = async collectionToGet => {
  const collectionDocuments = await getDocs(collectionToGet)
  const documentsData = collectionDocuments.docs.map(document => {
    return document.data()
  })

  return documentsData
}

export default getData
