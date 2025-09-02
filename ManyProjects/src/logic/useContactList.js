import { useState } from "react";

export function useContactList(){
    const [contacts, setContacts] = useState([])

    const newContact = (newContact) => {
        if (contacts.some(c => c.name.toLowerCase() === newContact.name.toLowerCase()) || contacts.some(c => c.number === newContact.number)) {
            return
        }
        setContacts([...contacts, newContact])
        console.log('Aray: ', contacts)
    }

    const delContact = (index) => {
        setContacts(contacts.filter((_, i) => i !== index))
    }

    const delAllContacts =() => {
        setContacts([])
    }
    return { contacts, newContact, delContact, delAllContacts }
}