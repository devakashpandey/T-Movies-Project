import axios from "axios";
import { toast } from "react-toastify";

// API request link
const BASE_URL = "https://api.themoviedb.org/3";

const TMBD_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTEyNWUwMDZkZTFkYzJjNjQxMDJjMWU1ZTk4NzZhZiIsInN1YiI6IjY0MDFiNDc4OWYxYmU3MDBjZDYyZTAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Eb4u5g_2_TP9kXWIh6jKwRQMjDBqxzEzeptZvTwuPEY";

const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params, // for filtering
    });
    return data;
  } catch (err) {
    toast.error(err);
    return err;
  }
};
