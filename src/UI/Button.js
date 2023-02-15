import "./Button.scss";

const Button = props => {
    return <a className="btn">{props.children}</a>
}

export default Button;