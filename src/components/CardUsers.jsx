import React, { useState, useEffect, Suspense } from "react";
import Card from "./Card";

export default function CardUsers() {
  const [userData, setUserData] = useState([]);

  const [ListUsers, setAddListUsers] = useState([]);

  // const fetchUserData = () => {
  // useEffect(()=>{
  //   const response = fetch("https://randomuser.me/api/?gender=female");
  //   if (!response.ok) {
  //     throw new Error("Error al obtener los datos");
  //   }
  //   const api = response.json();
  //   setUserData([...userData, api]);
  //   // console.log(api.results[0]);
  //   response
  // }
  // )

  // };

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?gender=female");
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      var apiData = await response.json();
      apiData = apiData.results[0];
      // console.log("api", apiData);
      // setUserData([...userData, apiData]);
      setUserData([apiData]);
      // setAddListUsers([...AddUser, apiData]);
    } catch (error) {
      console.error("Hubo un error al obtener los datos:", error);
    }

    ListUsers;
  };

  // // useEffect se ejecutará cada vez que userData cambie
  // useEffect(() => {
  //   fetchData();
  // }, [userData]);

  const AddUser = () => {
    fetchData();

    console.log("user data", userData[0].name.first);

    let user = {
      id: Date.now(),
      firstName: userData[0]?.name.first,
      lastName: userData[0]?.name.last,
      img: userData[0]?.picture.large,
      suspended: false,
    };

    setAddListUsers((prevUsers) => (user.id ? [...prevUsers, user] : ""));

    // console.log(ListUsers);
  };

  const handleCardSuspended = (id, suspended) => {
    // console.log(id, suspended);
    const updateCard = ListUsers.map((user) => {
      if (user.id === id) {
        // Actualizar el estado directamente aquí
        setAddListUsers((prevSuspended) => {
          return prevSuspended.map((prevSuspended) => {
            if (prevSuspended.id === id) {
              return { ...prevSuspended, suspended };
            }
            return prevSuspended;
          });
        });
        // Devolver la tarea actualizada
        return { ...suspended, suspended };
      }
    });
  };

  const handleDeleteUser = () => {
    const updateSuspendedFiltrer = ListUsers.filter(
      (user) => user.suspended === false
    );
    setAddListUsers(updateSuspendedFiltrer);
  };

  return (
    <div>
      <div className="justify-center items-center flex">
        <button className="m-4 bg-sky-600" onClick={AddUser}>
          Añadir usuario
        </button>
        <button className="m-4 bg-red-600" onClick={handleDeleteUser}>
          Eliminar suspendidas
        </button>
      </div>

      <div className="grid grid-cols-3 gap-3 p-5">
        {ListUsers.map(
          (user, index) =>
            user.firstName != undefined && (
              <Card
                onSuspended={handleCardSuspended}
                id={user.id}
                key={index}
                firstName={user.firstName}
                lastName={user.lastName}
                img={user.img}
              ></Card>
            )
        )}
      </div>
    </div>
  );
}
