export function fixImagePath(element: any) {
  let imageBaseURL = ''
  imageBaseURL = 'https://kafila.traversia.net'
  const cusomImagePath = element?.imagePath.split('\\')
  element.newImagePath =
    imageBaseURL +
    '/Public/uploadImage/' +
    cusomImagePath[cusomImagePath?.length - 1]
  return element
}
