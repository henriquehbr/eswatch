import { readFileSync } from 'fs'
import findUp from 'find-up'

export const getDependencies = async() => {
  const packageJsonPath = await findUp('package.json')
  if (packageJsonPath) {
    const packageJsonString = readFileSync(packageJsonPath, { 'encoding': 'utf-8' }),
      packageJson = JSON.parse(packageJsonString),
      dependencies = Object.keys(packageJson.dependencies)
    return dependencies
  }
  return []
}
