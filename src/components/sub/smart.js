import Corn from '../../assets/generic/corn.svg';
import Worker from '../../assets/generic/workman.svg';
import Drone from '../../assets/generic/wk_drone.svg';
import Rice from '../../assets/generic/rice_trans.svg';
import Pepper from '../../assets/generic/pepper.svg';
import AgTech from '../../assets/generic/agritech.svg';

const Smart = () => (
  <figure className="gallery flex">
    <img src={Corn} alt="healthy corn from smart tech" />
    <img src={Worker} alt="a farmer in the rice field" />
    <img src={Drone} alt="buzzing drone on the farm" />
    <img src={Rice} alt="farmer transporting processed rice" />
    <img src={Pepper} alt="harvested hybrid pepper" />
    <img src={AgTech} alt="internet of things (IoT) on the farm" />
  </figure>
);

export default Smart;
