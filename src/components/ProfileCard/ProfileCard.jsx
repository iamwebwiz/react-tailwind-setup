import React, { Fragment } from "react";
import styles from "./styles";

export const ProfileCard = () => {
  return (
    <Fragment>
      <div
        className="bg-white rounded-lg shadow-lg grid justify-center p-10"
        style={styles.card}
      >
        <div className="flex justify-center">
          <img
            src="https://pbs.twimg.com/profile_images/1295121021503188995/EtTIzjFQ_400x400.jpg"
            alt="iamwebwiz"
            className="rounded-full w-48 h-48"
          />
        </div>

        <h2 className="text-2xl text-gray-700 uppercase text-center">
          Ezekiel Oladejo
        </h2>
        <h3 className="text-lg text-blue-400 uppercase text-center text-sm">
          Senior Software Engineer
        </h3>
      </div>
    </Fragment>
  );
};
