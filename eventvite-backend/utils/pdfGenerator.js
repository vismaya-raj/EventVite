const PDFDocument = require("pdfkit");
const fs = require("fs");

async function generatePDF(data, filePath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50 });

    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Background color
    doc.rect(0, 0, doc.page.width, doc.page.height).fill("#fbe4ff");

    // Card background
    doc
      .fillColor("white")
      .roundedRect(70, 100, 460, 500, 20)
      .fill();

    const centerX = doc.page.width / 2; // Calculate the horizontal center

    // Title
    doc
      .fontSize(28)
      .fillColor("#800080")
      .font("Times-Bold")
      .text(`${data.eventType} Invitation`, 70, 140, { // Start at the left margin
        align: "center",
        width: 460, // Use the width of the card background for centering
      });

    // Subtitle
    doc
      .moveDown()
      .fontSize(20)
      .fillColor("#333333")
      .font("Times-Italic")
      .text(`You're invited, ${data.name}!`, 70, undefined, { // 'undefined' to flow vertically
        align: "center",
        width: 460,
      });

    // Event Date
    doc
      .moveDown()
      .fontSize(16)
      .fillColor("#444444")
      .font("Times-Roman")
      .text(`Date: ${data.eventDate}`, 70, undefined, {
        align: "center",
        width: 460,
      });

    // Event Time
    doc
      .moveDown(0.5)
      .font("Times-Roman")
      .text(`Time: ${data.time}`, 70, undefined, {
        align: "center",
        width: 460,
      });

    // Description
    doc
      .moveDown(0.5)
      .font("Times-Roman")
      .text(`Event Details: ${data.description}`, 70, undefined, {
        align: "center",
        width: 460,
      });

    doc.end();

    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

module.exports = generatePDF;