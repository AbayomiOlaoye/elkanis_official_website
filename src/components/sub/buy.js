// Whatsapp message
const PHONE_NUMBER = '2348035881095';

const handleOrder = (name) => {
  const message = `Hello, I would like to place an order for ${name}`;
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
};

export default handleOrder;
