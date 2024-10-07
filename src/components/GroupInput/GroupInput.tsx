import { Input } from "../UI"
interface GroupInputProps{
    label:string,
    name:string,
    type:string,
    value:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}
export default function GroupInput({label,name, type, value, onChange}: GroupInputProps):React.ReactElement{
    return(
        <div>
            <label>{label}</label>
            <Input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}