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
