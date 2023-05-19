import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

const esquemaValidacion = Yup.object({
    colorFavorito: Yup.string().required("Campo requerido"),
    aceptaTerminos: Yup.boolean().oneOf([true], "Debe aceptar los términos y condiciones"),
});

const FormSelect = () => {
    const formik = useFormik({
        initialValues: { colorFavorito: "", aceptaTerminos: false },
        validationSchema: esquemaValidacion,
        onSubmit: (values) => { console.log(values) },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="colorFavorito">
                <Form.Label>Color favorito</Form.Label>
                <Form.Control
                    name="colorFavorito"
                    as="select"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.colorFavorito}
                    isInvalid={ formik.errors.colorFavorito && formik.touched.colorFavorito }
                >
                    <option value="">Selecciona un color</option>
                    <option value="rojo">Rojo</option>
                    <option value="verde">Verde</option>
                    <option value="azul">Azul</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {formik.errors.colorFavorito}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="aceptaTerminos">
                <Form.Check
                    name="aceptaTerminos"
                    type="checkbox"
                    label="Acepto los términos y condiciones"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.aceptaTerminos}
                    isInvalid={ formik.errors.aceptaTerminos && formik.touched.aceptaTerminos }
                    feedback={formik.errors.aceptaTerminos}
                    feedbackType="invalid"
                />
                           
            </Form.Group>

            <Button variant="primary" type="submit">Enviar</Button>
        </Form>
    );
};

export default FormSelect;