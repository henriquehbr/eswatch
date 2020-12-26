import path from 'path'

const isIndexFile = (file: string) => {
  const filename = path.parse(file).name
  return filename === 'index'
}

export { isIndexFile }
