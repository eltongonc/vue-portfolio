var express = require("express"),
    axios = require("axios");

var router = express.Router();

var api =  {
    base_url:"https://api.github.com/users/eltongonc/repos",
    key: process.env.ACCESS_TOKEN,
    withToken:function(base){return base+"?access_token="+this.key}
};
/****************
** About page.
*****************/
router.get("/", function(req, res) {
    axios.get(api.withToken(api.base_url))
    .then(response=>{
        if (response.status === 200) {
            var skills = [];
            var data  = response.data;
            data.forEach((repo)=>{
                axios.get(api.withToken(repo.languages_url))
                .then(response2=>{
                    skills.push(response2.data);
                    // checks if its the last item in this loop to render the Page
                    if (data[data.length - 1] === repo) {
                        renderPage(skills);
                    }
                }).catch(error=>{
                    throw error;
                });
            });
        }
    })
    .catch(error=>{
		throw error;
    });

    function renderPage(skills){
        res.send(skills);
    }
});

module.exports = router;
