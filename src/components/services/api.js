import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.unsplash.com",
  });

export const requestImages = async () => {
    const { data } = await instance.get("/photos/?client_id=Py_iDo0pAQqvEYoMBPZrJ7mc9_8W17Y3JqrImjifwlY");
        return data;
    
};

export const requestImagesByQuery = async (query = "") => {
    const { data } = await instance.get(`/search/photos?q=${query}`);
  
    return data;
};