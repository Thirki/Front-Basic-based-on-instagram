export default interface IPostItem {
  _id: string;
  origem: string;
  upvotes: number;
  comentarios: number;
  criadoEm: Date;
  legenda: string;
  imagens: {
    thumbnail: {
      url: string;
    };
  };
  usuario: {
    username: string;
  };
}
