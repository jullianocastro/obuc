import React from "react";

function Administrator() {
  fetch(
    "https://pt.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Administra%C3%A7%C3%A3o",
    {
      method: "GET",
      headers: {
        cookie:
          "WMF-Last-Access-Global=02-Aug-2021; GeoIP=BR%3AMG%3AArax__%3A-19.61%3A-46.98%3Av4; WMF-Last-Access=02-Aug-2021",
      },
    }
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  return (
    <>
      <h1>Administrator</h1>
    </>
  );
}

export default Administrator;
