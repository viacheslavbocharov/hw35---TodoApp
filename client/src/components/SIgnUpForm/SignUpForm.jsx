import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './SignUpForm.scss';

const SignUpSchema = Yup.object({
  login: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(15, 'Nice try, nobody has a login that long')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Must be longer than 5 characters')
    .max(10, 'Not longer than 10 characters')
    .required('Required field'),
})

export default function SignUpForm({ handleSignUp }) {
  return (
    <div className='SignUpForm'>
      <h2>New user:</h2>
      <Formik
        initialValues={({
          login: '',
          password: '',
        })}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          handleSignUp({
            login: values.login,
            password: values.password,
          })
        }}
      >
        {({ errors }) => (
          <Form>
            <p>
              {errors.login && (<div className='error'>{errors.login}</div>)}
              <Field
                name="login"
                placeholder="Login"
              />
            </p>
            <p>
              {errors.password && <div className='error'>{errors.password}</div>}
              <Field
                name="password"
                type="password"
                placeholder="Password"
              />
            </p>
            <input className="btn" type='submit' value="Sign Up" />
          </Form>
        )}

      </Formik>
    </div>
  )
}