import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const Subscription = () => {
  return (
    <div className="mt-[100px] px-3 flex flex-col">
      <h1 className="text-[#FFFF] mb-2 text-sm">Subscribe to our Newsletter</h1>
      <Formik className=""
        initialValues={{
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={() => {
          // same shape as initial values
        }}
      >
        {({ errors, touched }) => (
          <Form className='flex'>
            <Field className="bg-[#D8F4EC] text-sm text-center text-[#FF7338] w-[110px] h-[45px] rounded-l-lg font-small" name="email" type="email" placeholder="Enter Your Email" data-testid="subscription"/>
            <button type="submit" className="text-[#FF7338] bg-[#FFFF] w-[80px] h-[45px] rounded-r-lg font-small" data-testid='subscriptionButton'>
              Subscribe
            </button>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Subscription;
