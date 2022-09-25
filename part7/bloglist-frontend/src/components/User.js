/* eslint-disable */

// import { useParams } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const User = ({ user }) => {
  // const users = useSelector((state) => state.users)
  // const { _id } = useParams()
  // const user = users.filter((user) => user._id === _id)
  // console.log({ user })

  if (!user) return null

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Added blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default User
