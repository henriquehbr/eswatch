import { readFileSync } from 'fs'
import findUp from 'find-up'

const getDependencies = async () => {
  const packageJsonPath = await findUp('package.json')
  if (packageJsonPath) {
    const packageJsonString = readFileSync(packageJsonPath, { encoding: 'utf-8' })
    const packageJson = JSON.parse(packageJsonString)
    return Object.keys(packageJson.dependencies)
  }
  return []
}

export { getDependencies }
