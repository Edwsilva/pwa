import axios from "axios";
// import { load } from "cheerio";

// type Path = "users" | "outro";

const fetchUrl = async (path) => {
  const url = `http://localhost:4000/${path}`;

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const html = response.data;
      console.log("####", html);
      return html;
    }
  } catch (error) {
    console.log("Error ao buscar os dados ", error);
  }
};

export { fetchUrl };
