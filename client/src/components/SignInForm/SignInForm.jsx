import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import './SignInForm.scss';

const SignInSchema = Yup.object({
  login: Yup.string()
    .min(2, 'Must be longer than 2 characters')
    .max(15, 'Nice try, nobody has a login that long')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Must be longer than 5 characters')
    .max(10, 'Not longer than 10 characters')
    .required('Required field'),
})

export default function SignInForm({ handleSignIn }) {
  return (
    <div className='SignInForm'>
      <h2>Registered:</h2>
      <Formik
        initialValues={({
          login: '',
          password: '',
        })}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          handleSignIn({
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
            <input className="btn" type='submit' value="Sign In" />
          </Form>
        )}

      </Formik>
    </div>
  )
}