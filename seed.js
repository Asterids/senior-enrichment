const db = require('./server/db');
const Campus = require('./server/db/models/campus');
const Student = require('./server/db/models/student');

const campuses = [
  {name: "Walley School of Medicine", imgUrl: "../../public/img/walley.jpg", description: "Lorem ipsum pre-clinical education, award-winning Independent Study initiative. Become the best physician you can be."},
  {name: "Moore Institute of Physical Science", imgUrl: "../../public/img/moore.jpg", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {name: "Kimball Conservatory", imgUrl: "../../public/img/kimball.jpg", description: "Dedicated for over a century to training the finest minds in music and the arts. Our beautiful campus is open year-round for enrolled students practice and work in their own personal studio spaces."}
];

const students = [
  {firstName: 'Madeleine', lastName: 'VanHoort',  email: 'ma-vanhoort@su.edu', gpa: 3.0, campus_id: 2},
  {firstName: 'Colin', lastName: 'Smith',  email: 'co-smith@su.edu', gpa: 3.4, campus_id: 3},
  {firstName: 'Olivia', lastName: 'Pettit',  email: 'ol-pettit@su.edu', gpa: 3.8, campus_id: 2},
  {firstName: 'Esther', lastName: 'Wood',  email: 'es-wood@su.edu', gpa: 3.8, campus_id: 3},
  {firstName: 'Josephine', lastName: 'Nelson',  email: 'jo-nelson@su.edu', gpa: 3.3, campus_id: 1},
  {firstName: 'Patricia', lastName: 'Jackson',  email: 'pa-jackson@su.edu', gpa: 4.0, campus_id: 1},
  {firstName: 'Pru', lastName: 'Davis',  email: 'pr-david@su.edu', gpa: 2.9, campus_id: 2},
  {firstName: 'Ellis', lastName: 'Porto',  email: 'el-porto@su.edu', gpa: 3.7, campus_id: 1},
  {firstName: 'Lorin', lastName: 'Schulz',  email: 'lo-schulz@su.edu', gpa: 3.2, campus_id: 3}
];

const seed = () =>
  Promise.all(campuses.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
    Promise.all(students.map(student =>
      Student.create(student))
    )
  )
  .catch(err => {
    console.log('Caught ', err)
  })

const main = () => {
  console.log('Syncing database...');
  db.sync({force: true})
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      console.log('Seeding successful!');
      db.close();
      return null;
    });
};

main();
