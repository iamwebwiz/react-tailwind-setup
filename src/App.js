import React, { Fragment } from "react";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <Fragment>
      <div className="w-screen h-screen bg-gray-200 grid justify-center items-center">
        <ProfileCard />
      </div>
    </Fragment>
  );
}
