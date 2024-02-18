

import * as XLSX from 'xlsx';

const generateAndDownloadExcel = (data) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Save the workbook to a file
  XLSX.writeFile(wb, 'exported_data.xlsx');
};

export { generateAndDownloadExcel };

