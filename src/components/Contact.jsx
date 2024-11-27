import React from "react";
import contactSVG from "../assets/contact.svg";
import contactSchema from "../schemas/contactSchema";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const labelsStyles = "text-white text-base sm:text-lg";
const errorsStyles =
  "flex items-center justify-center text-secondaryText tracking-wider";
const inputsStyles =
  "bg-tertiary/10 rounded-md p-2 border tracking-wider border-tertiary outline-none font-paragraph text-white";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      userPhone: "",
      userEmail: "",
      userMessage: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(false);
        const { userName, userPhone, userEmail, userMessage } = values;
        const emailParams = {
          from_name: userName,
          userEmail: userEmail,
          to_name: "Arun Katoch",
          userPhone: userPhone,
          message: userMessage,
        };
        const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
        const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;
        emailjs
          .send(serviceId, templateId, emailParams, {
            publicKey,
          })
          .then(() => {
            console.log("Mail send successfully.");
            alert("Your message sent to Arun successfully...");
          });
      } catch (error) {
        console.log("failed to sent mail.", error.text);
        alert("Oops! Some error occured... Failed to sent your message");
      }

      resetForm();
    },
  });
  return (
    <section className="w-full pt-2 px-1 sm:px-5 flex gap-2" id="contact">
      <div className="flex flex-col w-full sm:w-[70%] h-full">
        <div className="flex items-center">
          <span className="font-title text-tertiary text-3xl sm:text-5xl">
            &lt;Contact&gt;
          </span>
        </div>
        <form
          autoComplete="off"
          onSubmit={formik.handleSubmit}
          className="flex flex-col p-5 sm:w-[80%] gap-2"
        >
          <label htmlFor="userName" className={labelsStyles}>
            Name:
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            className={inputsStyles}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <div className={errorsStyles}>{formik.errors.userName}</div>
          ) : null}

          <label htmlFor="userPhone" className={labelsStyles}>
            Phone:
          </label>
          <input
            id="userPhone"
            name="userPhone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userPhone}
            className={inputsStyles}
          />
          {formik.touched.userPhone && formik.errors.userPhone ? (
            <div className={errorsStyles}>{formik.errors.userPhone}</div>
          ) : null}

          <label htmlFor="userEmail" className={labelsStyles}>
            Email Address:
          </label>
          <input
            id="userEmail"
            name="userEmail"
            type="userEmail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userEmail}
            className={inputsStyles}
          />
          {formik.touched.userEmail && formik.errors.userEmail ? (
            <div className={errorsStyles}>{formik.errors.userEmail}</div>
          ) : null}

          <label htmlFor="userMessage" className={labelsStyles}>
            Message
          </label>
          <textarea
            id="userMessage"
            name="userMessage"
            type="userMessage"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userMessage}
            className={`${inputsStyles}  h-32 justify-start flex resize-none`}
          />
          {formik.touched.userMessage && formik.errors.userMessage ? (
            <div className={errorsStyles}>{formik.errors.userMessage}</div>
          ) : null}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="flex items-center justify-center bg-textPrimary hover:bg-textPrimary/60 hover:shadow-xl py-2 rounded-md text-white my-4"
          >
            {formik.isSubmitting ? "Wait..." : "Submit"}
          </button>
        </form>
        <div className="flex items-center mt-2">
          <span className="font-title text-tertiary text-3xl">
            &lt;/Contact&gt;
          </span>
        </div>
      </div>
      <div className="hidden  w-[30%] sm:flex items-center justify-center">
        <motion.img
          animate={{
            x: -15,
            y: 10,
            scale: 1.1,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            type: "easeIn",
          }}
          src={contactSVG}
          alt="contact svg"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Contact;
