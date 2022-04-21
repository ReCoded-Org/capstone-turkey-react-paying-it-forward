import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Please add a valid email'),
});

function SubscriptionForm() {
  return (
    <div className="md:px-0 md:mt-10 w-full md:block md:mx-2 lg:mr-8 ">
      <h1 className="text-[#FFFF] mb-2 text-md  ml-[2px]">
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
          <Form className="  w-full flex-column lg:mr-0">
            <div className=" p-0  w-full">
              <Field
                className="bg-[#D8F4EC] text-[12px]  text-center text-[#FF7338] md:w-[140px] lg:w-[140px] h-[45px] rounded-l-lg font-small"
                name="email"
                type="email"
                placeholder="Enter Your Email Address"
                data-testid="subscription"
              />
              <button
                type="submit"
                className="text-[#FF7338] bg-[#FFFF] md:w-[85px] lg:w-[90px] h-[46px] rounded-r-lg "
                data-testid="subscriptionButton"
              >
                Subscribe
              </button>
            </div>
            <div className=" lg:p-2 lg:ml-[20px]">
              {errors.email && touched.email ? (
                <div data-testid="error">{errors.email}</div>
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
