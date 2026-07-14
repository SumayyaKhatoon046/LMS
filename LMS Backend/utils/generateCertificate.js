const PDFDocument = require("pdfkit");

const generateCertificate = (res, studentName, courseName) => {

    const doc = new PDFDocument({ size: "A4" });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
        "Content-Disposition",
        `attachment; filename=certificate.pdf`
    );

    doc.pipe(res);

    doc.fontSize(28).text("Certificate of Completion", {
        align: "center"
    });

    doc.moveDown(2);

    doc.fontSize(18).text("This is to certify that", {
        align: "center"
    });

    doc.moveDown();

    doc.fontSize(24).text(studentName, {
        align: "center"
    });

    doc.moveDown();

    doc.fontSize(18).text("has successfully completed", {
        align: "center"
    });

    doc.moveDown();

    doc.fontSize(22).text(courseName, {
        align: "center"
    });

    doc.moveDown(2);

    doc.fontSize(16).text(
        `Date: ${new Date().toLocaleDateString()}`,
        {
            align: "center"
        }
    );

    doc.end();
};

module.exports = generateCertificate;