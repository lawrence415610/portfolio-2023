import "./Button.scss";

const Button = props => {
    return <a className="btn" href={props.link} download="Yelin's Resume">{props.children}</a>
}

export default Button;