export default interface IPostItem {
  _id: string;
  origem: string;
  upvotes: number;
  comentarios: number;
  criadoEm: Date;
  legenda: string;
  link: string;
  imagens: {
    resolucaoPadrao: {
      url: string;
    };
  };
  usuario: {
    username: string;
  };
}
