import Jimp from 'jimp';
import { promises as fs } from 'fs';

export default async function resizeImage(
  filePath: string,
  newFilePath: string,
  width: number,
  height: number,
): Promise<boolean> {
  try {
    let image = await Jimp.read(filePath);
    await image.resize(width, height).writeAsync(newFilePath);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
