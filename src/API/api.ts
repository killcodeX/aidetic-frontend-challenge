import { API } from "./config";

const baseUrl = "https://api.poc.graphql.dev.vnplatform.com/graphql";

export const fectchUserApi = async () => {
  let data = JSON.stringify({
    query: `query GetAllProfiles($orderBy: globalOrderBy, $searchString: String, $rows: Int, $page: Int) {
      getAllProfiles(orderBy: $orderBy, searchString: $searchString, rows: $rows, page: $page) {
        size
        profiles {
          id
          first_name
          last_name
          email
          is_verified
          image_url
          description
        }
      }
    }`,
    variables: {
      orderBy: { key: "is_verified", sort: "desc" },
      rows: 10,
      page: 0,
      searchString: "",
    },
  });
  try {
    let res = await API.post(baseUrl, data);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const CreateUserApi = async (variables: any) => {
  var createData = JSON.stringify({
    query: `mutation CreateProfile($firstName: String!, $lastName: String!, $email: String!, $isVerified: Boolean!, $imageUrl: String!, $description: String!) {
    createProfile(first_name: $firstName, last_name: $lastName, email: $email, is_verified: $isVerified, image_url: $imageUrl, description: $description) {
      id
      first_name
      last_name
      email
      is_verified
      image_url
      description
    }
  }`,
    variables: variables,
  });
  try {
    let res = await API.post(baseUrl, createData);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserApi = async (variables: any) => {
  let data = JSON.stringify({
    query: `mutation UpdateProfile($updateProfileId: String!, $firstName: String!, $lastName: String!, $email: String!, $isVerified: Boolean!, $imageUrl: String!, $description: String!) {
    updateProfile(id: $updateProfileId, first_name: $firstName, last_name: $lastName, email: $email, is_verified: $isVerified, image_url: $imageUrl, description: $description) {
      id
      first_name
      last_name
      email
      is_verified
      image_url
      description
    }
  }`,
    variables: variables,
  });
  try {
    let res = await API.post(baseUrl, data);
    return res;
  } catch (error) {
    console.error(error);
  }
};
