import { promises as fs } from "fs";

let doesFileExist = async (filePath: string) => {
    try {
        const _ = await fs.open(filePath)
        return true;
    }
    catch (error) {
        return false;
    }
}

export default doesFileExist;