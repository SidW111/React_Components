import React, { createContext } from "react";

type User = { name: string };
export const UserContext = createContext<User | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const user = { name: "Siddhant" };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
