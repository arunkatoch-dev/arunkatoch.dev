import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

let contactSchema = Yup.object({
  userName: Yup.string()
    .min(3, "(Too Short!)")
    .max(30, "(Too Long!)")
    .required("(Please your Name)"),
  userPhone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "(Phone number must be of 10 digits)")
    .required("Phone number is required.")
    .max(10, "(Phone number not greate than 10 digits)"),
  userEmail: Yup.string()
    .email("Please type a valid email")
    .required("Email is required."),
  userMessage: Yup.string()
    .min(10, "Too short")
    .max(250, "Too long!")
    .required("max 250 chars allowed"),
});

export default contactSchema;
