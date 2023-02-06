import React, { useState } from 'react'
import AddPerson from './AddPerson'
import PeopleList from './PeopleList'

export default function ContactManager(props) {
  const [ contacts, setContacts ] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  function deletePerson(index) {
    contacts.splice(index, 1)
    setContacts([...contacts])
  }

  return (
    <div>
      <AddPerson 
        handleSubmit={addPerson}
      />
      <PeopleList 
        handleDelete={deletePerson}
        data={contacts} 
      />
    </div>
  );
} 