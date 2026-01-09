export interface Destination {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  category_id: number;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
}
