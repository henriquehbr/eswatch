import { existsSync } from 'fs'

type FileExists = (path: string) => Promise<string>

const fileExists: FileExists = async path => {
  try {
    return await new Promise((resolve, reject) =>
      existsSync(path) ? resolve(path) : reject(`Couldn't find ${path} entry point`)
    )
  } catch (error) {
    throw new Error(error)
  }
}

export { fileExists }
