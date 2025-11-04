import { useEffect, useState } from "react";

export default function FetchAPI() {
  useEffect(() => {
    const fetchTOdo = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=20"
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("error fetching todos", error);
      }
    };
    // fetchTOdo()

    // fetch returns a promise
    //the first .then() gives the response
    //then .json() or .text() or .blob() to read the body

    //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //       .then((res) => res.json())
    //       .then((data) => console.log(data))
    //       .catch((err) => console.log(err));

    //ALways set content-type to application/json when sending json
    //convert data to string using  JSON.stringify()

    const sendData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "My new Post",
          body: "Hello World!",
          userId: 1,
        }),
      });

      console.log("Sent");
    };
    // sendData()

    //fetch does not throw errors for HTTP failures like (404, 500)

    //must check res.ok manually
    //fetch() only rejects on network errors - not on HTTP errors

    const resStat = async () => {
      const res = await fetch("https://api.example.com/data");
      if (!res.ok) {
        throw new Error(`HTTP ERROr! status: ${res.status} `);
      }

      const data = await res.json();
    };

    // resStat()

    // we can send custom headers or tokens easily

    //useful for JWT Auth, API key, Custom server headers

    const headers = async () => {
      const res = await fetch("dejlwe", {
        headers: {
          Authorization: "Bearer Token",
          Accept: "Application/json",
        },
      });
    };

    //ERROR HANDLING AND TRYCATCH

//Always wrap fetch calls in try...catch for safe handling

//Network errors (like “no internet”) trigger the catch block.
// HTTP errors (like 404) don’t — you have to check res.ok.

  });

  return <div></div>;
}
