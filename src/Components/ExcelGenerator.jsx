import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import Book1 from "../Components/templateFile/Book1.xlsx";
import Swal from "sweetalert2"; // Import Swal for error handling

export function generateAndDownloadExcelDocument(data) {
  const templateURL = Book1;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", templateURL, true);
  xhr.responseType = "arraybuffer";

  xhr.onload = function () {
    const templateData = new Uint8Array(xhr.response);
    const workbook = XLSX.read(templateData, { type: "array" });

    const sheetName = "Sheet1";

    // Check if the sheet exists in the workbook
    if (!workbook.Sheets[sheetName]) {
      Swal.fire(
        "Error",
        `Sheet '${sheetName}' not found in the template`,
        "error"
      );
      return;
    }

    // Update the existing sheet with the provided data
    const worksheet = workbook.Sheets[sheetName];
    const serialNumber = "12345"; // Replace this with your actual serial number value
    worksheet["D15"].v = worksheet["D15"].v.replace("{CAT}", data.CAT);
    worksheet["D9"].v = worksheet["D9"].v.replace("{SERIAL}", data.SERIAL);
    worksheet["D12"].v = worksheet["D12"].v.replace("{ZONE}", data.ZONE);
    worksheet["H9"].v = worksheet["H9"].v.replace("{DATE}", data.DATE);
    worksheet["D18"].v = worksheet["D18"].v.replace("{TOPIC}", data.TOPIC);

    const excelBlob = new Blob(
      [XLSX.write(workbook, { type: "array", bookType: "xlsx" })],
      {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }
    );

    saveAs(excelBlob, "filled_template.xlsx");
  };

  xhr.onerror = function () {
    Swal.fire("Error", "Failed to fetch the Excel template.", "error");
  };

  xhr.send();
}
