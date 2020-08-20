import React, { Fragment } from "react";
import styles from "./styles";

export const ProfileCard = ({ name, role, avatar }) => {
  return (
    <Fragment>
      <div
        className="bg-white rounded-lg shadow-lg grid justify-center p-10"
        style={styles.card}
      >
        <div className="flex justify-center">
          <img
            src={avatar}
            alt={name.split(" ")[0]}
            className="rounded-full w-48 h-48"
          />
        </div>

        <h2 className="text-2xl text-gray-700 uppercase text-center my-3">
          {name}
        </h2>
        <h3 className="text-indigo-600 uppercase text-center text-sm">
          {role}
        </h3>
      </div>
    </Fragment>
  );
};
