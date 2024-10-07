
interface InputProps{
    type:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    name:string,
    value:string
}
export default function Input({type, onChange, name,value}:InputProps):React.ReactElement{
    return(
        <input type={type} onChange={onChange} name={name} value={value} />
    )
}