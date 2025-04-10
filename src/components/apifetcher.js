import axios from "axios";
const ACCESS_KEY = "Jks_C-r64pYCQ6dMTgQVIgmCcNv_v1SUu9CPzKhoeQs";
const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: ACCESS_KEY,
    orientation: "landscape",
    per_page: "12",
  },
});

export const getPhotos = async (query, page) => {
  const { data } = await instance.get(`search/photos`, {
    params: { query, page },
  });
  return {
    results: data.results,
    totalPages: data.total_pages,
  };
};
