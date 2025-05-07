
import fs from "fs";

export function blobToBase64(blob) {
    const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
  }

  // Función para convertir PDF a base64
export function pdfToBase64(pdfPath) {
    const pdfBuffer = fs.readFileSync(pdfPath);
    return pdfBuffer.toString('base64');
}