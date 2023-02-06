import { connect } from 'react-redux'

function PeopleList(props) {
  const arr = props.contacts;
  //console.log(arr)
  const listItems = arr.map((val, index) =>
    <li key={index}>
      {val}
    </li>
  );
  return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(PeopleList)