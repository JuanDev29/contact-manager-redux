import React from 'react'
import AddPerson from './AddPerson'
import PeopleList from './PeopleList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import { addPerson } from '../actions/actionCreator'

const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        contacts: [...state.contacts, action.data]
      }
  }
}

const store = createStore(reducer)

export default function ContactManager() {
  //const [ contacts, setContacts ] = useState(props.data);

  return (
    <div>
      <Provider store={store}>
        <AddPerson/>
        <PeopleList/>
      </Provider>
    </div>
  );
} 