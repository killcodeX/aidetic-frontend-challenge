// to fetch data

export const fetchUser = (data: any) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};

export const fetchEditProfile = (id: string) => {
  return {
    type: "FETCH_UPDATED_DATA",
    payload: id,
  };
};

export const deleteProfile = (id: string) => {
  return {
    type: "DELETE_DATA",
    payload: id,
  };
};
