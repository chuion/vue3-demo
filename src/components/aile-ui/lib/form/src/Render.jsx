const CustomRender = (props) => {
  return (
    props.render(props.form, props.rootForm, props.scope) || (
      <span className="aile-form-item__placeholder">
        {props.scope.emptyWords}
      </span>
    )
  );
};

export default CustomRender;
