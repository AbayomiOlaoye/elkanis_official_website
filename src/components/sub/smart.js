import Corn from '../../assets/generic/corn.png';
import Worker from '../../assets/generic/workman.png';
import Drone from '../../assets/generic/wk_drone.png';
import Rice from '../../assets/generic/rice_trans.png';
import Pepper from '../../assets/generic/pepper.png';
import AgTech from '../../assets/generic/agritech.png';

const Smart = () => (
  <figure className="gallery flex ml--120">
    <img src={Corn} alt="healthy corn from smart tech" />
    <img src={Worker} alt="a farmer in the rice field" />
    <img src={Drone} alt="buzzing drone on the farm" />
    <img src={Rice} alt="farmer transporting processed rice" />
    <img src={Pepper} alt="harvested hybrid pepper" />
    <img src={AgTech} alt="internet of things (IoT) on the farm" />
  </figure>
);

export default Smart;
