export interface IAPIResponse<T> {
  $id: string | number;
  code: number;
  message: string;
  data: T;
}
export interface INavbarItem {
  itemName: string;
  to: string;
}
export interface IDataTourist {
  $id: string;
  createdat: string;
  id: string;
  tourist_email: string;
  tourist_profilepicture: string;
  tourist_location: string;
  tourist_name: string;
}
