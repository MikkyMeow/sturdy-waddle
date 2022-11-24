import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";

export const apiGetNewsIds = () =>
  axios.get(`${baseUrl}/topstories.json`).then(({ data }) => data);

export const apiGetNewsItem = (id) => {
  axios.get(`${baseUrl}/item/${id}`).then(({ data }) => data);
};

export const apiGetComment = (id) => {
  axios.get(`${baseUrl}/item/${id}.json`);
};

export const apiGetKidsComment = (id) => {
  axios.get(`${baseUrl}/item/${id}.json`);
};
