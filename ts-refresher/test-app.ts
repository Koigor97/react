type User = {
  name: string;
  age: number;
  job: string;
  degree: string[];
};

const sam: User = {
  name: "Sam Brewah",
  age: 26,
  job: "Software Developer",
  degree: ["Bachelor in History and Politics", "Pathway Connect Certificate"],
};

console.log(sam);

function add(a: number, b: number)  {
  const result = a + b;
  return result;
};

console.log(function add(3, 13));