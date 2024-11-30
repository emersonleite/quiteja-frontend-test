export type User = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type UserData = {
  data: User[];
  total: number;
  page: number;
  limit: number;
};
