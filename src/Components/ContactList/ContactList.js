import { Component } from 'react';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PhoneBookOperations, PhoneBookSelectors } from '../../Redux/PhoneBook';

class ContactList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.initContacts();
    console.log('+');
  }

  render() {
    const { removeContact, searchedContacts } = this.props;
    console.log(this.state);
    return (
      <ul className={styles.contactList}>
        {searchedContacts &&
          searchedContacts.map(({ name, number, id }) => (
            <li key={id} className={styles.contactListItem}>
              <p className={styles.contactData}>
                {name}: {number}
              </p>
              <button
                className={styles.removeButton}
                type="button"
                onClick={() => removeContact(id)}
              >
                X
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

// const ContactList = ({ contacts, removeContact, filter }) => {
//   return (
//     <>
//       <ul className={styles.contactList}>
//         {contacts
//           .filter(contactItem =>
//             contactItem.name.toLowerCase().includes(filter.toLowerCase()),
//           )
//           .map(({ id, name, number }) => (
//             <li key={id} className={styles.contactListItem}>
//               <p className={styles.contactData}>
//                 {name}: {number}
//               </p>
//               <button
//                 onClick={() => removeContact(id)}
//                 className={styles.removeButton}
//               >
//                 X
//               </button>
//             </li>
//           ))}
//       </ul>
//     </>
//   );
// };

const mapStateToProps = state => ({
  searchedContacts: PhoneBookSelectors.getSearchData(state),

  filterValue: PhoneBookSelectors.getFilterValue(state),
});

const mapDispatchToProps = {
  removeContact: id => PhoneBookOperations.removeContact(id),
  initContacts: PhoneBookOperations.initContacts,
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),

  filterValue: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
