import React from 'react'
import GrandChild from './GrandChild'

const Children = ({user}:{user:any}) => {
  return (
    <div>
      <GrandChild user={user} />
    </div>
  )
}

export default Children
