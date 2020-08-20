import React, { Fragment, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import usersList from "./users.json";

export default function App() {
  let [users] = useState(usersList);

  return (
    <Fragment>
      <div className="w-screen bg-gray-200 px-16 py-20 grid md:grid-cols-3">
        {users &&
          users.map((user, index) => (
            <ProfileCard
              name={user.name}
              role={user.role}
              avatar={user.avatar}
              key={index}
            />
          ))}
      </div>
    </Fragment>
  );
}
