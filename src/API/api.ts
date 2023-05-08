import { API } from "./config"

const baseUrl = "https://api.poc.graphql.dev.vnplatform.com/graphql";

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
    variables: {"orderBy":{"key":"is_verified","sort":"desc"},"rows":10,"page":0,"searchString":""}
  });

export const fectchUserApi = async () => {
    try{
        let res = await API.post(baseUrl, data)
        return res
    }catch(error){
        console.error(error)
    }
}