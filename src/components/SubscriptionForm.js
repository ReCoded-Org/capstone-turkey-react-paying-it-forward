import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Please add a valid email'),
});

function SubscriptionForm() {
  return (
    <div className="sm:mb-[1000px] md:mt-[100px] lg:mt-[50px] ml-[100px] px-3 flex flex-col">
      <h1 className="text-[#FFFF] mb-2 text-md  ml-[15px]">
        Subscribe to our Newsletter
      </h1>
      <Formik
        className=""
        initialValues={{
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={() => {}}
      >
        {({ errors, touched }) => (
          <Form className="d-flex flex-column">
            <div className="p-2 ml-[5px]">
              <Field
                className="bg-[#D8F4EC] text-sm text-center text-[#FF7338] w-[200px] h-[45px] rounded-l-lg font-small"
                name="email"
                type="email"
                placeholder="Enter Your Email Address"
                data-testid="subscription"
              />
              <button
                type="submit"
                className="text-[#FF7338] bg-[#FFFF] w-[100px] h-[45px] rounded-r-lg font-small"
                data-testid="subscriptionButton"
              >
                Subscribe
              </button>
            </div>
            <div className="p-2 ml-[20px]">
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : (
                <div id="sub" className="hidden">
                  Subscribed to our service
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SubscriptionForm;
