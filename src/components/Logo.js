import LogoPicture from '../assets/images/logo.png';

function Logo() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-4 p-4 ">
      <img
        className="w-[110px] h-[95px] m-[-30px]"
        src={LogoPicture}
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
