import Form from "./login.models";
interface RegisterForm extends Form {
  confirmPassword: string;
}

export default RegisterForm;
