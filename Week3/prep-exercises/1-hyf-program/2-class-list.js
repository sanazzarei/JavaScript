import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {
  const classInfo = classes.find((classItem) => classItem.name === className);
  if (!classInfo) {
    return [];
  }
  const moduleName = classInfo.currentModule;
  const listOfStudents = students
    .filter((student) => student.class === className)
    .map((student) => ({ name: student.name, role: "student" }));

  const listOfMentors = mentors
    .filter((mentor) => mentor.nowTeaching === moduleName)
    .map((mentor) => ({ name: mentor.name, role: "mentor" }));
  return [...listOfStudents, ...listOfMentors];
};
console.log(getPeopleOfClass('class34'));
const getActiveClasses = () => {
  const activeClasses = classes
    .filter((classItem) => classItem.active)
    .map((classItem) => classItem.name);

  const obj = {};

  activeClasses.forEach((activeClass) => {
    obj[activeClass] = getPeopleOfClass(activeClass);
  });

  return obj;
};
console.log(getActiveClasses());
