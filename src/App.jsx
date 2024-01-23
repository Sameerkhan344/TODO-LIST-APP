import React from "react";
import UserList from "./features/users/UserList";
import { Route, Routes } from "react-router-dom";
import AddUser from "./features/users/AddUser";
import EditUser from "./features/users/EditUser";

const App = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32 overflow-hidden min-max-h-screen">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CURD with redux toolkit
      </h1>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
        <Route path="/edit-user/:id" element={<EditUser />}></Route>
      </Routes>
    </div>
  );
};

export default App;
