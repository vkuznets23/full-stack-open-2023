import React from 'react';

const Form = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
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
    )
}

export default Form