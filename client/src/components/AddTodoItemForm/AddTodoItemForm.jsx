import axios from "axios";
import { API_TODOS, API_URL, API_DELETE, API_UPDATE } from "../../urls";
import { Formik, Field, Form } from "formik";
import './AddTodoItemForm.scss';

export default function AddTodoItemForm({ token, setTodos }) {
    return (
        <Formik
            initialValues={({
                value: ''
            })}
            onSubmit={async (values) => {

                const { data } = await axios.post(API_URL + API_TODOS, {
                    title: values.value
                }, {
                    headers: {
                        'Authorization': token
                    }
                });
                console.log(data);
                // setTodos([
                //     ...todos,
                //     { title: data.title, id: data.id }
                // ])
                setTodos(data)
            }}
        >
            <Form className="input-form">
                <Field className="field" name="value" placeholder="Enter new todo value" />
                <input className="btn add-todo" type="submit" value="Add todo" />
            </Form>
        </Formik>
    )
}