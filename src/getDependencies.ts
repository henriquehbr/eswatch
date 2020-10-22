import { readFileSync } from 'fs'
import findUp from 'find-up'

export const getDependencies = async () => {
  const packageJsonPath = await findUp('package.json')
  if (packageJsonPath) {
    const packageJsonString = readFileSync(packageJsonPath, { encoding: 'utf-8' })
    const packageJson = JSON.parse(packageJsonString)
    const dependencies = Object.keys(packageJson.dependencies)
    return dependencies
  } else {
    return []
  }
}
