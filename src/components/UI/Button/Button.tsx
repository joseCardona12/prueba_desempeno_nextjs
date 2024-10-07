interface ButtonProps{
    type:"button" | "submit" | "reset",
    text:string,
    onClick: () => void
}
export default function Button({type,text,onClick}: ButtonProps):React.ReactElement{
    return (
        <button type={type} onClick={onClick}>{text}</button>
    )
}