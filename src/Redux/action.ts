// to fetch data

export const fetchUser = (data: any) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};
