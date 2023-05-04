import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("")

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
        setIsLoading(false);
      } catch (error) {
        console.log(error)
      }
  }
    fetchUsers()
  }, [])

  return (
    <>
      <div className="bg-slate-100 min-h-screen mx-auto px-16 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between bg-black rounded-2xl p-4">
        <h1 className="text-white text-4xl font-bold mb-3 md:mb-0 md:mr-3 md:ml-2">Github Users</h1>
          <div className="input-group md:mx-3 ">
            <input
              onChange={(event) => setSearch(event.target.value)}
              type="text"
              className="rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-200"
              placeholder="Search by name..."
              aria-label="search"
            />
          </div>
        </div>
        {isLoading ? (
          <p className="text-center text-xl mt-5">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {users.filter((user) => {
              return search === "" ? true : user.name.toLowerCase().includes(search.toLowerCase())
            }).map(user => (
              <div className="my-5 mx-10 p-3 bg-white md:hover:-translate-y-2 shadow-xl rounded-lg overflow-hidden flex flex-col items-center justify-center" key={user.id}>
                <img className="w-40 h-40 mt-6 rounded-full object-cover" src={user.avatar_url} alt={user.name} />
                <div className="p-4">
                  <h2 className="mt-2 font-bold text-2xl">{user.name}</h2>
                  <p className="text-gray-700 text-md text-center">@{user.login}</p>
                </div>
                <Link to={`/profile?id=${user.login}`} state={{ user: user}}>
                  <button className="mb-5 p-2 text-white px-4 text-md bg-green-900 hover:bg-green-950 rounded-2xl">
                      View Profile
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default IndexPage

export const Head = () => <title>Github User Viewer</title>
