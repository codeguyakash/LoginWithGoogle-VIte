import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
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
    </>
  );
};

export default Dashboard;
