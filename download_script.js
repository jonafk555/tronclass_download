function downloadPDFFile() {
  // Replace the URL below with the actual URL of the PDF file
  // 把 {你檔案的網址} 刪掉，放入你檔案的網址
  var url = '{你檔案的網址}';
  
  function urlDecode(encodedString) {
  var decodedString = decodeURIComponent(encodedString);
  return decodedString;
}

  var file = urlDecode(url);
  // Create a temporary link element
  var link = document.createElement('a');
  link.href = file;

  // Programmatically click the link to trigger the download
  link.click();
}

// Call the function to download the PDF file
downloadPDFFile();
