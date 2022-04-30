import PropTypes from 'prop-types';

function Card({ name, image, department }) {
  return (
    <div className="items-center mb-4 ">
      <div className="flex flex-col">
        <div className="w-28 h-20 ">
          <img alt="member" src={image} className=" rounded-full" />
        </div>
        <h2 className=" font-bold mt-14">{name}</h2>
        <p className="font-medium">{department}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  department: PropTypes.string.isRequired,
};

export default Card;
