const { instance } = require("../config/axios");
const FormData = require("form-data");
const fs = require("fs");
var streamBuffers = require("stream-buffers");

const stream = require("stream");

let readStream = new stream.PassThrough();

const query = {
  query:
    "mutation CreateDocumentMutation($document: DocumentInput!, $signers: [SignerInput!]!, $file: Upload!) {createDocument(document: $document, signers: $signers, file: $file) {id name refusable sortable created_at signatures { public_id name email created_at action { name } link { short_link } user { id name email }}}}",
  variables: {
    document: { name: "CPR TESTE" },
    signers: [
      {
        email: "brunorossini@live.com",
        action: "SIGN",
      },
      {
        name: "Gabriel",
        action: "SIGN",
      },
      {
        name: "Authur",
        action: "SIGN",
      },
    ],
    file: null,
  },
};

async function createDocument({ file }) {
  // console.log(
  //   fs.createReadStream(
  //     "source/documents/Bruna Bittencourt/Cedula_Produtor_665_1.pdf"
  //   )
  // );

  // console.log(bufferToStream(file));

  const formData = new FormData();
  formData.append("operations", JSON.stringify(query));
  formData.append("map", JSON.stringify({ file: ["variables.file"] }));
  formData.append(
    "file",
    // readStream.end(file)
    fs.createReadStream(file)
    // fs.createReadStream(
    //   "source/documents/Bruna Bittencourt/Cedula_Produtor_665_1.pdf"
    // )
  );

  const { data } = await instance.post("/graphql", formData, {
    headers: formData.getHeaders(),
  });

  return data;
}

export { createDocument };
