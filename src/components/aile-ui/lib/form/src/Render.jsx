const CustomRender = (props) => {
  return (
    props.render(props.form, props.rootForm, props.scope) || (
      <span className="aile-form-item__placeholder">
        {props.mergeConfig.emptyText}
      </span>
    )
  );
};

export default CustomRender;
