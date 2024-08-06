import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  // useEffect(() => {
  //   let url = "http://localhost:4000s/users";
  //   fetch(url)
  //     .then((response) => {
  //       response.json().then((result) => {
  //         console.warn(result);
  //         setData(result);
  //         localStorage.setItem("usuarios", JSON.stringify(result));
  //       });
  //     })
  //     .catch((err) => {
  //       setMode("offline");
  //       console.log("OFFLINE ");
  //       let collection = localStorage.getItem("usuarios");
  //       setData(JSON.parse(collection));
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:4000/users";

      try {
        // Check if online
        if (navigator.onLine) {
          console.log("ON LINNNNNNWEEEE");
          const response = await fetch(url);
          const result = await response.json();
          console.warn("RESULT ", result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
          setMode("online");
        } else {
          throw new Error("Offline");
        }
      } catch (err) {
        // console.log("OFFLINE ", err);
        setMode("offline");
        const collection = localStorage.getItem("users");
        if (collection) {
          setData(JSON.parse(collection));
        }
      }
    };

    fetchData();

    // Event listeners for online and offline status
    const handleOnline = () => {
      console.log("handleOnLine ");
      setMode("online");
      fetchData(); // Optional: re-fetch data when going online
    };

    const handleOffline = () => {
      console.log("handleOffline ");
      setMode("offline");
      const collection = localStorage.getItem("usuarios");
      if (collection) {
        setData(JSON.parse(collection));
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div>
      <div>
        {mode === "offline" ? (
          <div className="alert alert-warning" role="alert">
            you are in offline mode or some issue with connection
          </div>
        ) : null}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstname}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
