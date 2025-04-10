// Importing specific icons from 'react-icons/fa' to represent various job titles
import {
  FaUserNurse,
  FaUserTie,
  FaDog,
  FaCode,
  FaUserMd,
  FaUserShield,
} from "react-icons/fa";
import { Job } from "./types";
// Array of job objects, each job has a title, an associated icon, and optionally an 'active' status
export const jobs: Job[] = [
  { title: "Nursing Assistant", icon: <FaUserNurse /> },
  { title: "Nursing Assistant", icon: <FaUserNurse /> },
  { title: "Web Designer", icon: <FaCode /> },
  { title: "Marketing Coordinator", icon: <FaUserTie />, active: true },
  { title: "Dog Trainer", icon: <FaDog /> },
  { title: "Nursing Assistant", icon: <FaUserNurse /> },
  { title: "Web Designer", icon: <FaCode /> },
  { title: "Medical Assistant", icon: <FaUserMd /> },
  { title: "Marketing Coordinator", icon: <FaUserTie /> },
  { title: "Marketing Coordinator", icon: <FaUserTie /> },
  { title: "Web Designer", icon: <FaCode /> },
  { title: "President of Sales", icon: <FaUserShield /> },
];
