import DoctorProfile from '@/components/common/doctorProfile'
import Header from '@/components/common/header'
import React from 'react'

const SingleDoctorPage = () => {
  return (
      <div className=" w-full pt-6">
          <Header>Doctor Detail</Header>
      <DoctorProfile/>
    </div>
  )
}

export default SingleDoctorPage
