import { getDocs } from 'firebase/firestore'

const getCollectionData = async collectionToGet => {
  const collectionDocuments = await getDocs(collectionToGet)

  const documentsData = collectionDocuments.docs.map(document => {
    return { ...document.data(), id: document.id }
  })

  return documentsData
}

export default getCollectionData
