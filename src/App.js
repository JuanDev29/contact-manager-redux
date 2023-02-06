//import './App.css';
import AddPersonForm from './components/AddPerson'
import PeopleList from './components/PeopleList'

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

function App() {
  return (
    <div className="App">

      <AddPersonForm/>

      <PeopleList data={contacts} />

    </div>
  );
}

export default App;
