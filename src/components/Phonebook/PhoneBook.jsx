import s from './Phonebook.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contactsOperations';
import { selectFilteredContacts } from 'redux/contactsSelectors';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <ul className={s.contactsList}>
      {filterContacts?.map(({ name, number, id }) => {
        return (
          <li className={s.contactsItem} key={id}>
            <p>
              {name} : {number}
            </p>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContactThunk(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
