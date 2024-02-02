export interface IAPIResponse<T> {
  $id: string | number;
  code: number;
  message: string;
  data: T;
}
