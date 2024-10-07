import "./groupStyles.css";
import { Input } from "../UI";
interface GroupInputProps{
    label:string,
    name:string,
    type:string,
    value:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
    alert:string,
    stateAlert: boolean,
    placeholder:string,
}
export default function GroupInput({label,name, type, value, onChange,alert,stateAlert, placeholder}: GroupInputProps):React.ReactElement{
    return(
        <div className="group-input">
            <label className="input-label">{label}</label>
            <Input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            />
            {stateAlert ? <p className="alert-validation">{alert}</p> : null}
        </div>
    )
}