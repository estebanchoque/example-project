import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Debe contener más de cinco caracteres")
    .max(50, "Debe contener menos de 50 caracteres")
    .required("Required"),
  lastName: Yup.string()
    .min(3, "Debe contener 8 o más caracteres")
    .max(50, "Debe contener menos de 50 caracteres")
    .required("Required"),
  email: Yup.string().email("Email incorrecto").required("Required"),
});
