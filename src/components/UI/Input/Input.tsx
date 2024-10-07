import "./inputStyles.css";
interface InputProps{
    type:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    name:string,
    value:string,
    placeholder:string
}
export default function Input({type, onChange, name,value,placeholder}:InputProps):React.ReactElement{
    return(
        <input className="input" type={type} onChange={onChange} name={name} value={value} placeholder={placeholder} />
    )
}