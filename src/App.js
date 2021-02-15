import React, {useState} from "react"; 
import Tweet from './Tweet';

function App(){
const [users, setUsers] = useState([
  {name:"Ed", message: "Hello there"},
  {name: "John", message: "I am John snow"},
  {name: "traversy", message: "I am awesome"}
]);
 
  
  return( //javascript(JSX) compiled to html. curly braces allow javascript
    <div className="app">
       {users.map(user => (
         <Tweet name={user.name} message ={user.message} />
       ))}
    </div>
  );
}

export default App;
