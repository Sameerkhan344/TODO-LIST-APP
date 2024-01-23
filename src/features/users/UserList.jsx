import React, { useRef } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../Redux/ReducerSlice/UserSlice";
import { motion } from "framer-motion";

const UserList = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  const renderCard = () =>
    users.map((user, id) => (
      <motion.div
        key={user.id}
        drag
        dragConstraints={ref}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        className="bg-gray-300 p-5 flex items-center justify-between h-32 cursor-pointer"
      >
        <div className="">
          <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div className="flex gap-5">
          <Link to={`edit-user/${user.id}`}>
            <FaEdit size={20} className="cursor-pointer" />
          </Link>

          <RiDeleteBin6Fill
            size={20}
            className="cursor-pointer"
            onClick={() => handleRemoveUser(user.id)}
          />
        </div>
      </motion.div>
    ));

  return (
    <div className="">
      <Link to="/add-user">
        <Button>Add User</Button>
      </Link>
      <div
        ref={ref}
        className="grid gap-5 md:grid-cols-2 w-full bg-blue-400 h--screen w-full mb-10"
      >
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
