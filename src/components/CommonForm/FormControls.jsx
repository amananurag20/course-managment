import { Label } from "../ui/label"


const FormControls = ({formControls=[], formData, setFormData}) => {

    const renderComponentByType=(getControlItem)=>{
        let element;
        //logic of returning correct input field

    }
  return (
    <div className="flex flex-col gap-3">
        {
            formControls.map((controlItem)=>(

                <div key={controlItem.name}>
                    <Label htmlFor={controlItem.name}>{controlItem.label}</Label>
                     
                     {renderComponentByType(controlItem)}
                </div>
            ))
        }
    </div>
  )
}

export default FormControls

// const [formData, setFormData]= useState

// <input >user Name</input> //const [userName, setUserName]= useState("")
// <input >Emali</input>//  const [email, setEmail]= useState("")
// <input >password</input> // const [password, setPassword]= useState("")

// // const [formData, setFormData]= useState({userName:"", email:"", password:""});

// userName-> onchange=(e)=>{ setFormData({...formData,userName:e.target.value})}
// email-> onchange=(e)=>{ setFormData({...formData,email:e.target.value})}

