import { useState } from 'react'
import './App.css'
import { useContactList } from '../logic/useContactList'

function AppContactList() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const {contacts, newContact, delContact, delAllContacts} = useContactList();

    const clickHandle = () => {
        if (name === "" || number.length < 5 || number === "") {
            alert('Inserta los datos correctamente')
            return
        }
        newContact({name: name.trim(), number: number.trim()})
    }
    return (
        <main>
            <h1>Contact List</h1>
            <section className='contact_form'>
                <form>
                    <input type='text' placeholder='Contact name' value={name} onChange={(e) => setName(e.target.value)}></input>
                    <input type='number' placeholder='Contact number' maxLength={12} value={number} onChange={(e) => setNumber(e.target.value)}></input>
                    <button type='button' onClick={clickHandle}>Add</button>
                </form>
            </section>
            <section>
                <ul>
                {
                    contacts.length >= 1 ? 
                    contacts.map((contact, index) => {
                        return (
                            <li key={index}>{contact.name} --- {contact.number}  <button type='button' onClick={() => delContact(index)}>x</button></li>
                        )
                    }) : <h1>No hay ningun contacto</h1>
                }
                {<button type='button' onClick={delAllContacts}>Borrar todos</button>}
                </ul>
            </section>
        </main>
    )
}

export default AppContactList