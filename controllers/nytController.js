//module exports find all with the API key, pass params, call to mongo, 


const axios = require("axios");
const db = require("../models");
require("dotenv").config();

module.exports = {

    findAll: function(req, res) {
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        const APIKEY = process.env.NYT_API_KEY;
        console.log("in nyt controller find all");
    axios.get(BASEURL + APIKEY + "&q=" + q)
    .then(response => {
        console.log("in .then of nytimes call");
        res.send(response.data.response.docs)
    })
    .catch(err => {
        console.log("in .catch of nytimes call");
        console.log(err)
        res.status(422).json(err)
    })
  }

};
  

// return axios.get(BASEURL + APIKEY + "&q=" + query + "&begin_date=" + begin + "0101&end_date=" + end + "0101");

// if(this.state.startYear && this.state.end_year) {
//     API.search("&q=" + this.state.search + "&begin_date=" + this.state.start_year + "&end_date=" + this.state.end_year)
//           .then(res => {
//             this.setState({ results: res.data })
//             this.handleResetButton();
//           })
//       } else {
//         API.search("&q=" + this.state.search)
//         .then(res => {
//           this.setState({ results: res.data })
//           this.handleResetButton();
//         });

// })
//   .then(res =>
//     this.setState({ 
//         articles: res.data,
//         message: !res.data.length
//             ? "No articles found. Please try another search."
//             : "" 
//     })
//   )
//   .catch(err => console.log(err));
// };




    //     const params = Object.assign(
    //         { api_key: "?api-key=" + process.env.NYT_API_KEY },
    //         req.query
    //     );
    //     console.log("nytController");
    //     axios
    //       .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {params})
    //       .then(response => {
    //         db.Article
    //           .find()
    //           .then(dbArticles =>
    //             response.data.response.docs.filter(articles => 
    //               dbArticles.every(
    //                 dbArticle => dbArticle._id.toString() !== article._id
    //               )
    //             )
    //           )
    //           .then(articles => res.json(articles))
    //           .catch(err => res.status(422).json(err));
    //       });
    // }
// };