import "./App.css";
import GrandChild from "./components/propsDrilling/GrandChild";
import Parent from "./components/propsDrilling/Parent";
// import Prac from "./components/prac";
// import List from "./components/Lists";
// import PaginatedTodos from "./components/Paginated";
// import FetchAPI from "./components/FetchAPI";
// import FormValidation from "./components/FormValidation";
// import StepCounter from "./components/StepCounter";
// import Counter from "./components/Counter";
// import Todo from "./components/Todo";

function App() {
  const user = {name:'Siddhant'}
  return (
    <>
      {/* <Counter /> */}
      {/* <Todo />  */}
      {/* <StepCounter /> */}
      {/* <FormValidation /> */}
      {/* <FetchAPI /> */}
      {/* <PaginatedTodos /> */}
      {/* <List /> */}
      {/* <Prac/> */}
      <Parent user={user} />
    </>
  );
}

export default App;
