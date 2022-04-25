import LogoPicture from '../../assets/images/logo.png';

function Logo() {
  return (
    <img
      className="self-start sm:ml-2 xs:mr-auto sm:mr-auto  md:mt-12  md:mr-auto md:ml-5  lg:ml-12 lg:mr-56  lg:-mt-1 w-[120px] h-[100px] lg:m-[-30px]"
      src={LogoPicture}
      alt="Logo"
    />
  );
}

export default Logo;
