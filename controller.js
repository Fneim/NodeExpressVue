const User = require("./model.js");

module.exports = function() {
  app.post("/signup", (req, res) => {
    const newUser = new User(req.body);

    newUser.save((err, doc) => {
      if(err) {
        console.log(err);
      } else {
        console.log(doc);
      }
    })
  })

}
