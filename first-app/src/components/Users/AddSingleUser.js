const AddSingleUser = (props) => {
  console.log("in AddsingleUSer");
  return (
    <div className="added-user">
      <p>
        ${props.name} ${props.age} 31 years old
      </p>
    </div>
  );
};

export default AddSingleUser;
