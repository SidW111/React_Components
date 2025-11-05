import { useContext } from "react"
import { UserContext } from "../../context/UserContext"


const GrandChild = () => {
  const user = useContext(UserContext);
  return (
    <div>
      Hello {user?.name ?? "GUEST"}
    </div>
  )
}

export default GrandChild
