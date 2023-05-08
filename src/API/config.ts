import axios from "axios";

const token =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYW5kaWRhdGVfbmFtZSI6ImFhcXVpYjUwNzZAZ21haWwuY29tIiwiaXNfY2FuZGlkYXRlIjp0cnVlLCJpYXQiOjE2ODM0Njg1NjUsImV4cCI6MTY4NDA3MzM2NX0.iQjpLayGXzcxFYx-kNzzteo1nVRD6F6Lib4eAZm7QZY";

export const API = axios.create({
	baseURL: "https://api.poc.graphql.dev.vnplatform.com/graphql",
	headers: {
    "Authorization":"Bearer " + token,
		'Content-Type': 'application/json',
	},
});
