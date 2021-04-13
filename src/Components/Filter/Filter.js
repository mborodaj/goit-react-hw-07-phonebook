import React, { Component } from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PhoneBookAction, PhoneBookSelectors } from '../../Redux/PhoneBook';

class Filter extends Component {
  filterHandler = event => {
    const { value } = event.currentTarget;
    const { filterContacts } = this.props;
    filterContacts(value);
  };

  render() {
    const { filterValue } = this.props;
    return (
      <div className={styles.filterContainer}>
        <label className={styles.formLabel}>
          Contact search
          <input
            type="text"
            name="filter"
            value={filterValue}
            onChange={this.filterHandler}
            className={styles.inputForm}
          ></input>
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filterValue: PhoneBookSelectors.getFilterValue(state),
});

const mapDispatchToProps = {
  filterContacts: PhoneBookAction.filterContacts,
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
