import { ReactNode } from 'react';

export type NavbarButtonType = {
  icon:ReactNode,
  text?:string,
  href:string
}
export type PatientMedicalIssue = {
  description: string; 
  assignedDoctorId: string; 
  status: "In Progress" | "Completed"; 
};
export type PatientInfoType = {
  profileImage?: string;
  patientId: string;
  name: string;
  password: string;
  age: number;
  contactNumber: string;
  emailAddress: string;
  location: string;
  gender?: "Male" | "Female" | "Other"; // Optional field for gender
  bloodType?: string; 
  allergies?: string[]; 
  medicalHistory?: string[];
  medicalIssues:PatientMedicalIssue[]

};
export type DoctorInfoType = {
  profileImage?: string;
  doctorId: string;
  name: string;
  password: string;
  age: number;
  specialization: string;
  contactNumber: string;
  emailAddress: string;
  location: string;
  yearsOfExperience: number;
  isDoctorVerified: boolean;
};


export type Comment = {
  image: string,
  comment: string,
  commentator: string,
  date:string
}

export type Post = {
  id: number
  title: string
  body:string
  date:string
}
export type Link={
  
    title: string,
    url: string,
    icon:string
  }
export type Appointment={
  with:string
  date:string
  time:string
}

export type DatePickerEvent=  { title: string, date: string, display: string,id:string }
