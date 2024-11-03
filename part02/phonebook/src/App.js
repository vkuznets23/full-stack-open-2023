import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39445323523'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = {name: newName, number: newNumber};
    
    if (!newName || !newNumber || !isFinite(newNumber)) {
      alert("Both name and phone number must be provided.");
      return;
    }
    const exist = persons.some(person => person.name === newPerson.name)
    if (!exist) {
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <div>
            name: <input 
            value={newName}
            onChange={(e) => setNewName(e.target.value)}/>
          </div>
          <div>
            phone: <input 
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}/>
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person, id) => (
          <div key={id}> {person.name} {person.number}</div>
        ))}
      </div>
    </div>
  )
}

export default App
