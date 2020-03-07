const mongoose = require("mongoose");
const db = require("../models")
const dbConfig = require("../db/config");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/devNetwork_DB", { 
  useNewUrlParser: true, 
  useFindAndModify: false,
  useUnifiedTopology: true
});

const jobPostings = [
  {
    title: "Jr Back End Developer",
    position: "Back End",
    empType: "Full-Time",
    salary: 60000,
    applicants: [],
    company: "",
    description: "",
  }
];

const companies = [
  {
    userName: "southface_admin",
    password: "012345",
    companyName: "The SouthFace Clothing Company",
    email: "southface@southface.com",
    phone: "1-800-555-6666",
    location: "West Coast",
    about: "We're better than NorthFace!",
    posted: "Job"
  },
  {
    userName: "soni_admin",
    password: "567890",
    companyName: "Soni",
    email: "soni@soni.com",
    phone: "1-800-555-1234",
    location: "East Coast",
    about: "More affordable than Sony",
    posted: "Job"
  },
  {
    userName: "snapbook_admin",
    password: "111111",
    companyName: "SnapFace",
    email: "snapbook@snapbook.com",
    phone: "1-800-333-4444",
    location: "West Coast",
    about: "Snapchat + Facebook! We're best of both worlds!",
    posted: "Job"
  },
  {
    userName: "ambassader_admin",
    password: "999999",
    companyName: "Ambassader",
    email: "ambassader@ambassader.com",
    phone: "1-800-999-8576",
    location: "Mid-West",
    about: "Tech giant based in Detroit, Michigan.",
    posted: "Job"
  },
  {
    userName: "sizzle_admin",
    password: "abcde1",
    companyName: "Sizzle",
    email: "sizzle@sizzle.com",
    phone: "1-800-555-2222",
    location: "Mid-West",
    about: "We're the hottest thing to come out of Minnesota!",
    posted: "Job"
  }
]

db.Job.remove({}, (err, res) => {
  if (err)
  console.log(res)});

db.Job.insertMany(jobPostings, (err, res) => {
  console.log(res)
})
