import React from 'react'
import { useParams } from 'react-router-dom';

function Profile() {
  const params = useParams();
  return (
    <div>
      Profilepage of {params.username}
    </div>
  )
}

export default Profile;