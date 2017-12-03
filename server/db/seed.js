const db = require('./models');

const Student = db.Student;
const Campus = db.Campus;

var data = {
  campus: [
    {name: "Walley School of Medicine", imgUrl: "../../public/img/walley.jpg", description: "Lorem ipsum pre-clinical education, award-winning Independent Study initiative. Become the best physician you can be."},
    {name: "Moore Institute of Physical Science", imgUrl: "../../public/img/moore.jpg", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {name: "Kimball Conservatory", imgUrl: "../../public/img/kimball.jpg", description: "Dedicated for over a century to training the finest minds in music and the arts. Our beautiful campus is open year-round for enrolled students practice and work in their own personal studio spaces."}
  ]
}

db.sync({force: true})
  .then(() => {
    console.log("Database ready to populate...");
    console.log('________________________');
    return Promise.map(Object.keys(data), function(name) {
      return Promise.map(data[name], function(item) {
        return db.model(name)
        .create(item)
      });
    });
  })
  .then(() => {
    console.log("Finished adding data.")
  })
  .catch((err) => {
    console.error("An error occurred somewhere! BAH!", err, err.stack)
  });
