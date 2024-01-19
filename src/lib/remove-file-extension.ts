export default function removeFileExtension(filename: string) {
    return (
      filename.substring(0, filename.lastIndexOf('.')) || filename
    );
  }