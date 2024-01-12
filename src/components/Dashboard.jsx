import { useNavigate } from "react-router-dom";
import Todos from "./Todos";
import { db } from "./../Auth/firebase";
import { set, ref, get, child } from "firebase/database";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState();
  let email = localStorage.getItem("user-email");
  let name = localStorage.getItem("user-name");
  let photoURL = localStorage.getItem("user-photo");
  let phoneNumber = localStorage.getItem("phoneNumber");
  const logoutHandler = () => {
    localStorage.removeItem("refreshToken-React");
    localStorage.removeItem("user-email");
    localStorage.removeItem("user-name");
    localStorage.removeItem("user-photo");
    localStorage.removeItem("phoneNumber");
    navigate("/");
  };

  const newTodo = {
    title: "New Todo Task",
    description: "Details about the task",
    status: "incomplete",
    timestamp: Date.now(),
    date: "2024-01-15",
  };
  const instertData = async () => {
    await set(ref(db, "todos/" + "userId6"), {
      title: "title",
      description: "description",
      statu: true,
    });
  };
  useEffect(() => {
    const dbRef = ref(db);
    get(child(dbRef, `todos/`))
      .then((snapshot) => {
        setTodo(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(todo);

  return (
    <>
      <div
        className="text-2xl bg-red-600 text-white text-center py-3 mb-4 cursor-pointer"
        onClick={logoutHandler}
      >
        Log Out
      </div>
      <div className="text-1xl text-gray-700 font-semibold text-center my-2">
        Welcome
      </div>
      <img
        className="w-24 h-24 rounded-full mx-auto border-4 p-1 border-red-500"
        src={
          photoURL || "https://cdn-icons-png.flaticon.com/512/1144/1144709.png"
        }
        alt="user-image"
        width="200"
        height="200"
      />

      <h1 className="text-5xl text-gray-700 font-semibold text-center my-2">
        {name || "User"}
      </h1>
      <h2 className="text-1xl text-gray-700 font-semibold text-center">
        {email || phoneNumber}
      </h2>
      <div className="flex items-center justify-center flex-col my-3">
        <button
          className="text-2xl border-2 border-gray-400 hover:bg-gray-200 px-3 py-2 rounded-md"
          onClick={instertData}
        >
          add todo
        </button>
        <Todos />
      </div>
    </>
  );
};

export default Dashboard;
