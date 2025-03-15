import { ReactNode } from 'react';

export type NavbarButtonType = {
  icon:ReactNode,
  text?:string,
  href:string
}
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