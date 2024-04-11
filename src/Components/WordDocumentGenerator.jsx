

import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import form1 from '../Components/templateFile/form1.docx'; // Path to your Word template file
export function generateAndDownloadWordDocument(data) {
  // Convert rows data to a table
 
  // Load the template file
  const xhr = new XMLHttpRequest();
  xhr.open('GET', form1, true);
  xhr.responseType = 'arraybuffer';
  
  xhr.onload = function() {
    const zip = new PizZip(xhr.response);
    const doc = new Docxtemplater().loadZip(zip);
    
    // Set data to replace placeholders
    doc.setData(data);
    
    // Render the document (replace placeholders)
    try {
      doc.render();
      
      // Save the rendered document
      const outputBuffer = doc.getZip().generate({ type: 'blob' });
      saveAs(outputBuffer, 'filled_template.docx');
    } catch (error) {
      console.error('Error rendering document:', error);
    }
  };

  xhr.send();
}
