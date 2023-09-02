import { modules, students, mentors, classes } from "./hyf.js";
const possibleMentorsForModule = (moduleName) => {
  const mentorsNAmes = mentors
    .map((item) => (item.canTeach.includes(moduleName) ? item.name : null))
    .filter((item) => item !== null);
  return mentorsNAmes;
};
console.log(possibleMentorsForModule("using-apis"));

const findMentorForModule = (moduleName) => {
  const mentorsNAmes =possibleMentorsForModule(moduleName);
  const RandomNum = Math.floor(Math.random() * mentorsNAmes.length);
  const randomMentor = mentorsNAmes[RandomNum];
  return `random mentor for ${moduleName} is : ${randomMentor}`;
};
// You can uncomment out this line to try your function
console.log(findMentorForModule("javascript"));
