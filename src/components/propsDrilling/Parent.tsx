import Children from "./Children"


const Parent = ({user}:{user:any}) => {
  return (
    <div>
      <Children user={user}/>
    </div>
  )
}

export default Parent
