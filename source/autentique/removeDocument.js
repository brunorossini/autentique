const { instance } = require("../config/axios");

async function removeDocument({ documentId }) {
  const { data } = await instance.post("/graphql", {
    query: `mutation { deleteDocument(id: \"${documentId}\") }`,
    variables: {},
  });
  return data;
}

export { removeDocument };
