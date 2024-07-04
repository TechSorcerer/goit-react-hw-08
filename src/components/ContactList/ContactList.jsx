import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/contacts /contactsOps";
import { selectFilteredContacts } from "../../redux/filters /filtersSel";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number: phone }) => (
        <li key={id}>
          {name}: {phone}
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
