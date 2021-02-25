const {
  listDocument,
  listDocuments,
  removeDocument,
  createDocument,
} = require("./autentique/index");

const signatures = [
  {
    public_id: "f05c4796709d11eba44a42010a2b600c",
    name: null,
    email: "tech@contacafe.com.br",
    created_at: "2021-02-16T21:28:40.000000Z",
    action: null,
    link: null,
    user: {
      id: "1228443666717a81a681b89e14296df196dd2eb6",
      name: "Bruno Erick Rossini",
      email: "tech@contacafe.com.br",
    },
  },
  {
    public_id: "f05e3eee709d11eba44a42010a2b600c",
    name: "Razão Social do Comprador LTDA",
    email: null,
    created_at: "2021-02-16T21:28:40.000000Z",
    action: { name: "SIGN" },
    link: { short_link: "https://assina.ae/Tbr8cSyHAXr643Mv6" },
    user: null,
  },
  {
    public_id: "f0a59d99709d11eba44a42010a2b600c",
    name: "Bruno Erick Rossini",
    email: null,
    created_at: "2021-02-16T21:28:41.000000Z",
    action: { name: "SIGN" },
    link: { short_link: "https://assina.ae/txw9E8xWVGQ19mnK6" },
    user: null,
  },
  {
    public_id: "f0deb263709d11eba44a42010a2b600c",
    name: "Razão Social da Lojista LTDA",
    email: null,
    created_at: "2021-02-16T21:28:41.000000Z",
    action: { name: "SIGN" },
    link: { short_link: "https://assina.ae/U2MgyKgfFpqyxXtAA" },
    user: null,
  },
];

(async function run() {
  console.log(
    signatures.filter(
      (signature) => signature.name === "Razão Social do Comprador LTDA"
    )
  );
})();
