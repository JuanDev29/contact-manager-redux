export default function PeopleList(props) {

  function handleDelete(index) {
    props.handleDelete(index)
    console.log(index)
    //e.preventDefault();
  }

  const arr = props.data;
  //console.log(arr)
  const listItems = arr.map((val, index) =>
    <li key={index}>
      {val}
      <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  );

  return <ul>{listItems}</ul>;
}