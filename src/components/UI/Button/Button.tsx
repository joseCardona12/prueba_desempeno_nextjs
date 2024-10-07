import "./buttonStyles.css";
interface ButtonProps{
    type:"button" | "submit" | "reset",
    text:string,
    onClick: () => void
}
export default function Button({type,text,onClick}: ButtonProps):React.ReactElement{
    return (
        <button className="button" type={type} onClick={onClick}>{text}</button>
    )
}