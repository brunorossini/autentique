const pdf = require("html-pdf");

// Create Local PDF
// const createImageOfPDF = ({ html, options, name }) =>
//   new Promise((resolve, reject) => {
//     pdf.create(html, options).toFile(name, (err, buffer) => {
//       if (err !== null) {
//         reject(err);
//       } else {
//         resolve(buffer);
//       }
//     });
//   });

const createPDF = ({ html, options }) =>
  new Promise((resolve, reject) => {
    pdf.create(html, options).toBuffer((err, buffer) => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(buffer);
      }
    });
  });

module.exports = async ({ html, options }) => {
  try {
    return createPDF({ html, options });
  } catch (e) {
    return false;
  }
};
