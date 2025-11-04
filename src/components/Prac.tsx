import { useEffect, useState } from "react";

export default function Prac() {
  const [user, setUser] = useState({ name: "Tom", age: 20 });

  user.age = 22;
  setUser({...user, age:21});
 

  return <div></div>;
}
