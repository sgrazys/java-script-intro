console.clear();

import { Student } from "./Student.js";

const petras = new Student('Petras', 1986);

petras.addMarks(10, 0, 2, 22);
petras.addMarks(-22);
petras.addMark(8);
petras.addMark(3.14);
petras.addMark(-3.14);
petras.addMark(4);
petras.addMark(6);
petras.addMark(NaN);

petras.marks = [10];

console.log(petras.name, petras.getName());
console.log(petras.marks);
console.log(petras.marksAverage());
