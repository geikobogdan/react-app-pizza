import classNames from "classnames";

function Button({ onClick,  className, outline, children, }) {
  return (
    <button
      className={classNames("button", className, {
        "button--outline": outline,
      })}
      onClick={onClick}
    >
      {children}
     
    </button>
  );
}

export default Button;
