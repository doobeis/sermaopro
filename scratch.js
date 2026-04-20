const fs = require('fs');
const PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync("extracted.txt", pdfParser.getRawTextContent());
    console.log("Done");
});

pdfParser.loadPDF("arsenal-de-mensagens-para-pregadores-1_compress.pdf");
