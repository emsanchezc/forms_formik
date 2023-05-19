import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const validationSchema = Yup.object({
    nombre: Yup.string().required('Este campo es obligatorio'),
    email: Yup.string().email('Correo no válido').required('Este campo es obligatorio'),
    mensaje: Yup.string().required('Este campo es obligatorio'),
  });

  return (
    <Formik
      initialValues={{ nombre: '', email: '', mensaje: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="contact-form">
            <label htmlFor="nombre">Nombre:</label>
            <Field type="text" name="nombre" id="nombre" className="form-field" />
            <ErrorMessage name="nombre" component="div" className="error-message" />
            
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" id="email" className="form-field" />
            <ErrorMessage name="email" component="div" className="error-message" />

            <label htmlFor="mensaje">Mensaje:</label>
            <Field as="textarea" name="mensaje" id="mensaje" className="form-field" />
            <ErrorMessage name="mensaje" component="div" className="error-message" />

            <button type="submit" disabled={isSubmitting} className="submit-button">
            Enviar
            </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
