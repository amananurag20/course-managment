import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

const FormControls = ({ formControls = [], formData, setFormData }) => {
  const renderComponentByType = (getControlItem) => {
    let element;

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
          />
        );
        break;

      case "textarea":
        element = (
          <Textarea
            id={getControlItem.name}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            type={getControlItem.type}
          />
        );
        break;

      case "select":
        element = (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.label} />
            </SelectTrigger>

            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.value}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;
    }

    return element;
  };
  return (
    <div className="flex flex-col gap-3">
      {formControls.map((controlItem) => (
        <div key={controlItem.name}>
          <Label htmlFor={controlItem.name}>{controlItem.label}</Label>

          {renderComponentByType(controlItem)}
        </div>
      ))}
    </div>
  );
};

export default FormControls;

// const [formData, setFormData]= useState

// <input >user Name</input> //const [userName, setUserName]= useState("")
// <input >Emali</input>//  const [email, setEmail]= useState("")
// <input >password</input> // const [password, setPassword]= useState("")

// // const [formData, setFormData]= useState({userName:"", email:"", password:""});

// userName-> onchange=(e)=>{ setFormData({...formData,userName:e.target.value})}
// email-> onchange=(e)=>{ setFormData({...formData,email:e.target.value})}
