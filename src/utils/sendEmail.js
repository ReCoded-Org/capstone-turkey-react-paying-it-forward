import emailjs from 'emailjs-com';

const sendEmail = (values, modelRef) => {
  emailjs
    .send('service_va0wqwg', 'template_l4l91a5', values, 'JrpFs7BlCv1nsgafI')
    .then(
      () => {
        modelRef.current.style.display = 'block';
        modelRef.current.childNodes[0].style.display = 'block';
        modelRef.current.childNodes[1].style.display = 'none';
      },
      () => {
        modelRef.current.style.display = 'block';
        modelRef.current.childNodes[1].style.display = 'block';
        modelRef.current.childNodes[0].style.display = 'none';
      },
    );
};

export default sendEmail;
