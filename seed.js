const db = require('./server/db');
const Campus = require('./server/db/models/campus');
const Student = require('./server/db/models/student');

const campuses = [
  {name: "Walley School of Medicine", imageUrl: "https://assets3.thrillist.com/v1/image/1302701/size/tmg-article_default_mobile;jpeg_quality=20.jpg", description: "Lorem ipsum pre-clinical education, award-winning Independent Study initiative. Become the best physician you can be."},
  {name: "Moore Institute of Physical Science", imageUrl: "https://cdn.bestdegreeprograms.org/wp-content/uploads/2015/02/Furman-University-Most-Beautiful-Campus.jpg", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
  {name: "Kimball Conservatory", imageUrl: "https://i.pinimg.com/originals/fc/c1/24/fcc124caa172c2c7c632aedae879b599.jpg", description: "Dedicated for over a century to training the finest minds in music and the arts. Our beautiful campus is open year-round for enrolled students practice and work in their own personal studio spaces."},
  {name: "Widger School of Agriculture & Technology", imageUrl: "http://bestchoiceschools.aly2ctnzw.maxcdn-edge.com/wp-content/uploads/2017/09/JOhnston-hall-big-450x300.jpg", description: "Lorem ipsum Widger Ag Tech..."}
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
  {firstName: 'Lorin', lastName: 'Schulz',  email: 'lo-schulz@su.edu', gpa: 3.2, campus_id: 3},
  {firstName: 'Didrik', lastName: 'Allen',  email: 'di-allen@su.edu', gpa: 3.8, campus_id: 4},
  {firstName: 'Stephanie', lastName: 'Boorman',  email: 'st-boorman@su.edu', gpa: 2.1, campus_id: 4},
  {firstName: 'Natasha', lastName: 'Grolier',  email: 'na-grolier@su.edu', gpa: 2.0, campus_id: 3},
  {firstName: 'Tyson', lastName: 'DuMaurier',  email: 'ty-dumaurier@su.edu', gpa: 3.8, campus_id: 2},
  {firstName: 'Morgan', lastName: 'Patchett',  email: 'mo-patchett@su.edu', gpa: 2.9, campus_id: 3},
  {firstName: 'Clifford', lastName: 'Elba',  email: 'cl-elba@su.edu', gpa: 3.7, campus_id: 4},
  {firstName: 'Wallace', lastName: 'Everitt',  email: 'wa-everitt@su.edu', gpa: 2.3, campus_id: 1},
  {firstName: 'Candace', lastName: 'Lawrence',  email: 'ca-lawrence@su.edu', gpa: 3.0, campus_id: 4},
  {firstName: 'Joy', lastName: 'Cornish',  email: 'jo-cornish@su.edu', gpa: 3.5, campus_id: 1},
  {firstName: 'Henrie', lastName: 'Ranier',  email: 'he-ranier@su.edu', gpa: 2.8, campus_id: 3},
  {firstName: 'Samuel', lastName: 'Vasquez',  email: 'sa-vasquez@su.edu', gpa: 3.8, campus_id: 2},
  {firstName: 'Rachel', lastName: 'Hunter',  email: 'ra-hunter@su.edu', gpa: 3.4, campus_id: 1},
  {firstName: 'Holly', lastName: 'Burke',  email: 'ho-burke@su.edu', gpa: 3.9, campus_id: 1},
  {firstName: 'Hank', lastName: 'Fisher',  email: 'ha-fisher@su.edu', gpa: 3.5, campus_id: 1},
  {firstName: 'Jill', lastName: 'Jones',  email: 'ji-jones@su.edu', gpa: 4.0, campus_id: 1},
  {firstName: 'Chloe', lastName: 'Lambert',  email: 'ch-lambert@su.edu', gpa: 2.9, campus_id: 1},
  {firstName: 'Dennis', lastName: 'Williams',  email: 'de-williams@su.edu', gpa: 2.3, campus_id: 2},
  {firstName: 'Florence', lastName: 'Foster',  email: 'fl-foster@su.edu', gpa: 3.6, campus_id: 2},
  {firstName: 'Nancy', lastName: 'Vaughan',  email: 'na-vaughan@su.edu', gpa: 3.1, campus_id: 2},
  {firstName: 'April', lastName: 'Clark',  email: 'ap-clark@su.edu', gpa: 3.9, campus_id: 2},
  {firstName: 'Lincoln', lastName: 'Acton',  email: 'li-acton@su.edu', gpa: 3.2, campus_id: 2},
  {firstName: 'Thomas', lastName: 'Talbot',  email: 'th-talbot@su.edu', gpa: 2.5, campus_id: 3},
  {firstName: 'Sylvie', lastName: 'Ennis',  email: 'sy-ennis@su.edu', gpa: 3.7, campus_id: 3},
  {firstName: 'Yves', lastName: 'Renaud',  email: 'yv-renaud@su.edu', gpa: 3.0, campus_id: 3},
  {firstName: 'George', lastName: 'Abbott',  email: 'ge-abbott@su.edu', gpa: 4.0, campus_id: 3},
  {firstName: 'Gloria', lastName: 'Bennet',  email: 'gl-bennet@su.edu', gpa: 3.9, campus_id: 3},
  {firstName: 'Pedro', lastName: 'Alvarado',  email: 'pe-alvarado@su.edu', gpa: 2.8, campus_id: 4},
  {firstName: 'June', lastName: 'Washington',  email: 'ju-washington@su.edu', gpa: 3.0, campus_id: 4},
  {firstName: 'Imelda', lastName: 'Morris',  email: 'im-morris@su.edu', gpa: 3.1, campus_id: 4},
  {firstName: 'Leticia', lastName: 'Clovis',  email: 'le-clovis@su.edu', gpa: 3.6, campus_id: 4},
  {firstName: 'Quinn', lastName: 'Forester',  email: 'qu-forester@su.edu', gpa: 3.5, campus_id: 4}
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
