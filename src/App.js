import logo from './logo.svg';
import './App.css';
 import Header from './components/Header/Header'
import Message from './components/Message/Message';

// function Header(){
//   return <h1>my title</h1>
// }

function App() {
  let student={firstName:'tamar',lastName:'cohen'}
  let student2={firstName:'tamar',lastName:'cohen'}
  return (
    <div>
   <Header></Header>
   {/* <Message myMessage="נשמר בהצלחה"   />
   <Message myMessage="נמחק בהצלחה"/> */}
   <Message myMessage={student}/>
   <Message myMessage={student2}/>
   </div>
  );
}

export default App;
