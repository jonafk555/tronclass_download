function downloadPDFFile() {
  // Replace the URL below with the actual URL of the PDF file
  var url = '{your file url}';

  // Create a temporary link element
  var link = document.createElement('a');
  link.href = url;

  // Set the download attribute to force download
  // 'document.pdf'可以更改成任一檔名
  link.download = 'document.pdf';

  // Programmatically click the link to trigger the download
  link.click();
}

// Call the function to download the PDF file
downloadPDFFile();
