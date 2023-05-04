import React from "react";
import { Link } from "gatsby"

const UserProfile = ({ location }) => {
  let user = location?.state?.user || {}

  return (
    <>
    <div className="bg-slate-100 min-h-screen">
      <div className=" mx-auto px-16 pt-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-black rounded-2xl p-4">
            <h1 className="text-white text-4xl font-bold mb-3 md:mb-0 md:mr-3 md:ml-2">Github Users</h1>
            <div className="input-group md:mx-5 ">
              <button className="rounded-lg ">
                <Link to="/" className=" text-2xl text-white font-bold">Home</Link>
              </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-3 my-16 mx-40 py-4 flex flex-row shadow-xl">
        <div className="flex flex-col md:my-10 md:mr-5 items-center justify-center w-1/3">
          <img src={user?.avatar_url} alt={user?.name} className="w-44 h-44 rounded-full mb-6" />
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <p className="mb-4">@{user?.login}</p>
          <p className="mb-2">{user?.location}</p>
          <p className="mb-2"><a href={user?.blog} className="text-blue-500 hover:underline">{user?.blog}</a></p>
        </div>
        <div className="md:mt-24 w-2/3">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold mb-1">{user?.public_repos}</p>
              <p className="">Public Repositories</p>
            </div>
            <div className="flex flex-col items-center">
              <p className=" text-3xl font-bold mb-1">{user?.followers}</p>
              <p className="">Followers</p>
            </div>
            <div className="flex flex-col items-center mr-16">
              <p className=" text-3xl font-bold mb-1">{user?.following}</p>
              <p className="">Following</p>
            </div>
          </div>
          <div className= "mt-16">
            <p className="mb-6 text-lg"><strong>Biography:</strong> {user?.bio ? user?.bio : "Nothing here yet!"}</p>
            <p className="mb-6 text-lg"><strong>Company:</strong> {user?.company ? user?.company : "Nothing here yet!"}</p>
            <p className="text-lg"><strong>Twitter:</strong> {user?.twitter_username ? user?.twitter_username : "Nothing here yet!"}</p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default UserProfile;

export const Head = () => <title>User</title>
