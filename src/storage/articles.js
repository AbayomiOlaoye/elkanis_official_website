// Featured Images
import fLiveImg from '../assets/products/livestock_hd.png';
import fFiemsImg from '../assets/products/fiems_hd.svg';
import fRiceImg from '../assets/products/rice_hd.png';

// Icons
import farmChick from '../assets/icons/man_chick.svg';
import inputIcon from '../assets/icons/man_rice.svg';
import yieldIcon from '../assets/icons/rice.svg';
import landIcon from '../assets/icons/land.svg';
import farmersIcon from '../assets/icons/farmers.svg';

// Product Images
import pLiveImg from '../assets/products/live_bg.png';
import pFiemsImg from '../assets/products/fiems_bg.svg';
import pRiceImg from '../assets/products/rice_bags.png';
import mobImg from '../assets/products/mobile_app.png';

const ARTICLES = [
  {
    id: 'livestock',
    featureImg: fLiveImg,
    featureHeadline: 'El-kanis Livestock Supplements',
    productImage: pLiveImg,
    intro: [
      'El-kanis and Partners also specializes in livestock supplement production. As the demand for meat and animal-based products continues to rise, the need for high-quality and sustainable livestock feed becomes increasingly important.',
      'El-kanis and Partners harnesses technology to develop innovative livestock supplements that are formulated to meet the nutritional needs of animals, while also minimizing the use of harmful additives and promoting animal welfare.',
    ],
    result: '',
    stats: {
      yields: {},
      farmer: {
        icon: farmChick,
        counter: 12670,
        info: 'Livestock Farmers',
      },
      input: {
        icon: inputIcon,
        counter: 860,
        info: 'Agro Input Suppliers',
      },
      land: {},
    },
  },
  {
    id: 'fiems',
    featureImg: fFiemsImg,
    featureHeadline: 'Farmers Information & Enterprise Management System (FIEMS)',
    productImage: pFiemsImg,
    addImg: mobImg,
    intro: [
      'A digital platform that assist farmers in managing various aspects of their agricultural operations and other related activities. FIEMS typically provide farmers with tools and features that help them make informed decisions, optimize their resources, and improve their productivity and profitability.',
      'FIEMS support online and offline data collection, facilitate record keeping, and generate easily shareable reports for agricultural efficiency.',
    ],
    result: [
      'From the data, we build trade capacities through deployment of drone and satellite technology to map and digitize thousands of hectares of farmland, monitor soil condition, crop growth, crop health, crop performance and yield estimate, which currently increases yield by 40 percent annually for 25,000 farmers.',
      "Decision support and checklists increase adherence to protocols, improving extension agents' performance and efficiency.",
      'FIEMS send reminders to extension agents to follow up on low-performing farmers.',
    ],
    stats: {
      yields: {},
      farmer: {
        icon: farmChick,
        counter: 12670,
        info: 'Livestock Farmers',
      },
      input: {
        icon: inputIcon,
        counter: 860,
        info: 'Agro Input Suppliers',
      },
      land: {},
    },
  },
  {
    id: 'elkanRice',
    featureImg: fRiceImg,
    featureHeadline: 'El-kanis Parboiled Rice',
    productImage: pRiceImg,
    intro: [
      'El-kanis premium parboiled rice is a high-quality rice product that has undergone a specialized parboiling process that helps to preserve its nutritional content and enhance its texture and flavor.',
      'The parboiling process involves soaking the rice in water and then steaming it under pressure before removing the hull and bran layers. This process helps to retain more of the nutrients found in the rice, including thiamin, niacin, and vitamin B6, while also making it easier to digest.',
      'El-kanis premium parboiled rice is carefully sourced through outgrower programs with thousands of rural farmers and also from our farms, processed internally by El-kanis Mills to ensure the highest quality and consistency. It is available in a range of packaging sizes ranging from 5kg, 10kg, 25kg, and 50kg to meet the needs of different consumers and can be found in grocery stores and supermarkets across Nigeria and beyond.',
      'If you are looking for a high-quality rice product that is nutritious, flavourful, and versatile, El-kanis premium parboiled rice is an excellent choice.',
    ],
    result: '',
    stats: {
      yields: {
        icon: yieldIcon,
        counter: 11439,
        info: 'Metric tons of rice paddy processed',
      },
      farmer: {
        icon: farmersIcon,
        counter: 28652,
        info: 'Rice Farmers (50% women)',
      },
      input: {},
      land: {
        icon: landIcon,
        counter: 64652,
        info: 'Hectares of rice fields',
      },
    },
  },
];

export {
  farmersIcon, landIcon,
};

export default ARTICLES;
