export type ITarget = {
  like: number;
  comments: number;
};

export interface IMetrics {
  target: ITarget;
  reach: {
    like: number;
    comments: number;
  };
}
