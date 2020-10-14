import React, { cloneElement } from "react";

export default (props) => {
  // retornar um elemento filho
  // cloneElement(props.children, { ...props });
  return (
    <div>
      {/* retornar varios elementos filhos */}
      {/* {React.Children.map(props.children, (el) => {
        return cloneElement(el, props);
      })} */}
      {props.children.map((child, i) => {
        return cloneElement(child, {...props, key: i})
      })}
    </div>
  );
};
