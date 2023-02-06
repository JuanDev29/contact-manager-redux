import React, { useState } from 'react'
import AddPerson from './AddPerson'
import PeopleList from './PeopleList'

export default function ContactManager(props) {
  const [ contacts, setContacts ] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }  

  return (
    <div>
      <AddPerson handleSubmit={addPerson}/>
      <PeopleList data={contacts} />
    </div>
  );
} 