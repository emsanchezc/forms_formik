import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PetRegistrationForm = () => {

    const validationSchema = Yup.object({
        nombre: Yup.string().required('Campo requerido'),
        tipo: Yup.string().required('Campo requerido'),
        edad: Yup.number().required('Campo requerido'),
        raza: Yup.string().required('Campo requerido'),
        vacunado: Yup.boolean(),
        color: Yup.string(),
        comentarios: Yup.string(),
    });

    return (
        <Formik
            initialValues={{ 
                nombre: '', 
                tipo: '', 
                edad: '', 
                raza: '', 
                vacunado: false, 
                color: '', 
                comentarios: '' 
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label htmlFor="nombre">Nombre</label>
                    <Field type="text" name="nombre" />
                    <ErrorMessage name="nombre" />

                    <label htmlFor="tipo">Tipo de mascota</label>
                    <Field as="select" name="tipo">
                        <option value="">Selecciona un tipo</option>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                        <option value="otro">Otro</option>
                    </Field>
                    <ErrorMessage name="tipo" />

                    <label htmlFor="edad">Edad</label>
                    <Field type="number" name="edad" />
                    <ErrorMessage name="edad" />

                    <label htmlFor="raza">Raza</label>
                    <Field type="text" name="raza" />
                    <ErrorMessage name="raza" />

                    <div>
                        <label>Vacunado:</label>
                        <label>
                            <Field type="radio" name="vacunado" value="si" />
                            Sí
                        </label>
                        <label>
                            <Field type="radio" name="vacunado" value="no" />
                            No
                        </label>
                    </div>
                    <ErrorMessage name="vacunado" />

                    <label htmlFor="color">Color</label>
                    <Field type="text" name="color" />
                    <ErrorMessage name="color" />

                    <label htmlFor="comentarios">Comentarios</label>
                    <Field as="textarea" name="comentarios" />
                    <ErrorMessage name="comentarios" />

                    <button type="submit" disabled={isSubmitting}>Registrar</button>
                </Form>
            )}
        </Formik>
    );
};

export default PetRegistrationForm;