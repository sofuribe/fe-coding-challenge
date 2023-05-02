import * as React from "react"
import { useState, useEffect } from "react"
import { navigate } from 'gatsby'

const IndexPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users", {
          headers: {
            Authorization: `Bearer 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`
          }
        })
        const usernames = (await response.json()).map((user) => user.login)

        const usersData = []
        for (const username of usernames.slice(0, 9)) {
          const userResponse = await fetch(`https://api.github.com/users/${username}`, {
            headers: {
              Authorization: `Bearer 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`
            }
          })
          usersData.push(await userResponse.json())
        }
        setUsers(usersData)
      } catch (error) {
        console.log(error)
      }
  }

    fetchUsers()
  }, [])

  return (
    <>
      <div className="bg-slate-100 mx-auto px-12 py-10">
        <h1 className="p-3 pl-4 text-white text-4xl m-3 bg-blue-900 rounded-2xl font-bold">Github Users</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {users.map(user => (
              <div className="my-5 mx-8 p-3 bg-white hover:-translate-y-2 shadow-xl rounded-lg overflow-hidden flex flex-col items-center justify-center" key={user.id}>
                <img className="w-40 h-40 mt-6 rounded-full object-cover" src={user.avatar_url} alt={user.name} />
                <div className="p-4">
                  <h2 className="mt-2 font-bold text-2xl">{user.name}</h2>
                  <p className="text-gray-700 text-md text-center">@{user.login}</p>
                </div>
                <button className="mb-5 p-2 text-white px-4 text-md bg-blue-900 hover:bg-blue-950 rounded-2xl"
                  // onClick={() => navigate(`/profile/${user.login}`, { state: { username: user.login } })}
                  onClick={() => navigate(`/profile/${user.login}`)}> View Profile
                </button>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}

export default IndexPage

export const Head = () => <title>Github User Viewer - Coding Challenge</title>
