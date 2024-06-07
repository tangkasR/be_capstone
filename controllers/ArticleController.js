import axios from "axios";
export const getArticle = async (req, res) => {
  const country = "id";
  const category = "health";
  const apiKey = "8b674514515b4cdbbab8b073868b5bce";
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  try {
    axios({
      method: "get",
      url: url,
      responseType: "json"
    }).then(function (response) {
      return res.status(201).json(response.data.articles);
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};
