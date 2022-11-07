import { user } from "../utils";
import { createContext, useState } from "react";
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [nivel, setNivel] = useState(0);
  const listUser = user.users;
  localStorage.setItem("listUser", JSON.stringify(listUser));
  console.log(listUser);
  const [list, setList] = useState(listUser);
  console.log("users", list);
  const handleActive = (activo, nivelU) => {  
    setActive(activo);
    setNivel(nivelU);
  };

  const handleListUser = (newUser) => {
    setList([...list, { ...newUser }]);
  };

  console.log("active context", active);
  const data = {
    list,
    handleActive,
    active,
    nivel,
    handleListUser,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
export { UserProvider };
