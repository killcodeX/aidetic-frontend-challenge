// to fetch data

export const fetchUser = (data: any) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};

export const fetchEditProfile = (id: any) => {
  return {
    type: "FETCH_UPDATED_DATA",
    payload: id,
  };
};
