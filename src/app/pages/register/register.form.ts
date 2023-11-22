import { Validators } from "@angular/forms";
import { SSNValidator } from "./ssn.validator";

export const RegisterForm = {
    email : ["lb@lb.be", [Validators.required, Validators.email], []] ,
    nationality : ["be", [Validators.required]],
    ssn : ["91.06.01-379.89", [Validators.required, SSNValidator.ssn]]
}