const Input = (props) => {
  return (
    <div id="input">
      <textarea onChange={props.handleChange} id="editor" type="text" defaultValue={props.value} ></textarea>
    </div>
  );
}

export default Input