import { promises as fs } from 'fs';

export default async function doesFileExist(filePath: string) {
  try {
    await fs.open(filePath);
    return true;
  } catch (error) {
    return false;
  }
}
