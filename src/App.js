//import './App.css';
import ContactManager from './components/ContactManager'

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

function App() {
  return (

    <ContactManager data={contacts} />

  );
}

export default App;
