function pdfExport(){

    //Get HTML we want to export:
    previewPDF = document.getElementById("pageContainer");
    exportHTML = `
        <head>
            <link rel="stylesheet" href="styles/flyerStyles.css"/>
        </head>
        <body>` + previewPDF.innerHTML + `</body>`;

    //Pump export data into iFrame:
    iframe = document.getElementById("exportFrame");
    iframe.contentDocument.write(exportHTML);

    //Print iframe:
    iframe.contentWindow.print();
}