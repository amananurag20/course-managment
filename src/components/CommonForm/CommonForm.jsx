import { signUpFormControls } from "@/config/formControls"
import { Button } from "../ui/button"
import FormControls from "./FormControls"


const CommonForm = ({handleSubmit, buttonText="Submit"}) => {
  return (
    <form onSubmit={handleSubmit}>
         
         <FormControls  formControls={signUpFormControls} />
        <Button> {buttonText}</Button>
    </form>
  )
}   

export default CommonForm