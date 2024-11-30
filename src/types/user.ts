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

type UserAddress = {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
};

export type UserByIdResponse = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  gender: "male" | "female";
  email: string;
  dateOfBirth: string;
  phone: string;
  location: UserAddress;
  registerDate: string;
  updatedDate: string;
};
