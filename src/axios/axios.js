import axios from "axios";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dwostx6bt";

export const uploadImage = async (formData) => {
  try {
    let response = await axios.post(`${CLOUDINARY_URL}/upload`, formData);
    return response.data.secure_url;
  } catch (error) {
    alert(error);
  }
};
