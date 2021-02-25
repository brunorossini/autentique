const { instance } = require("../config/axios");

async function listDocuments() {
  const { data } = await instance.post("/graphql", {
    query: `query { documents(limit: 60, page: 1) { total data { id name refusable sortable created_at signatures { public_id name email created_at action { name } link { short_link } user { id name email } viewed { created_at } signed { created_at } rejected { created_at } } files { original signed } } } }`,
    variables: {},
  });
  return data;
}

export { listDocuments };
