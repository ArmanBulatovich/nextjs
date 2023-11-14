import React from 'react'
import { getProject } from '@/app/lib/users/data'

const Page = ({params}: any) => {
  const { id } = params;
  const project = getProject(id);
  return (
    <div>Page</div>
  )
}

export default Page