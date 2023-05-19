import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Button } from 'react-bootstrap';

const RegistrationSchema = Yup.object({
    nombre: Yup.string().required('Campo requerido'),
})

const FormSimple = () => {
    const formik = useFormik({
        initialValues: { nombre: '' },
        validationSchema: RegistrationSchema,
        onSubmit: values => { console.log(values) },
    });

    return (
        <Form onSubmit={ formik.handleSubmit }>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    name='nombre'
                    type="text"
                    placeholder="Ingrese su nombre"
                    onChange={ formik.handleChange } 
                    onBlur={ formik.handleBlur } 
                    value={ formik.values.nombre }
                    isInvalid={ formik.touched.nombre && formik.errors.nombre }
                />
                <Form.Control.Feedback type="invalid">
                    { formik.errors.nombre }
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="danger" type="submit">Enviar</Button>
        </Form> 
    );
};

export default FormSimple;