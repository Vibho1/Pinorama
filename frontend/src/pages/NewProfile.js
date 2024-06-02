import React from "react";
// import ProfileHeader from "../components/Profile/ProfileHeader";
import SideBar from "../components/Profile/SideBar";
import Card from "../components/Profile/Card";

export default function NewProfile({loggedUser, setCount}) {

  return (
    <div className="flex flex-wrap justify-around" style={{ backgroundImage: `url(${loggedUser.bg})` }}>
      <SideBar loggedUser={loggedUser} setCount={setCount}/>
      <div className="flex max-h-screen justify-around">
      <div className="flex flex-col items-center overflow-scroll">
        {loggedUser.posts.map((post, index) => (
          <Card loggedUser={loggedUser} key={index} post={post} setCount={setCount}/>
          ))}
      </div>
      </div>
    </div>
  );
}
