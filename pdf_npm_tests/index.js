#!/usr/bin/env node
const pdfFiller = require('pdffiller');

var sourceFile = './hf_anmeldung.pdf';
 
// Override the default field name regex. Default: /FieldName: ([^\n]*)/
var nameRegex = null;  

var FDF_data = pdfFiller.generateFDFTemplate( sourceFile, nameRegex, function(err, fdfData) {
    if (err) throw err;
    console.log(fdfData);
});