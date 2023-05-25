/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';
import Md from '../assets/team/md.svg';
import Ed from '../assets/team/ed.svg';
import Gm from '../assets/team/gm.svg';
import Op from '../assets/team/operations.svg';
import Pm from '../assets/team/products.svg';
import Tech from '../assets/team/software.svg';

const Team = [
  {
    id: uuidv4(),
    designation: 'Managing Director',
    name: 'Ekanikpong Ben',
    image: Md,
    headshot: 'After spending nearly 2 decades working with energy and development sector in Nigeria, Ekanikpong is currently playing an important role in the development of agriculture in Southern Nigeria.',
    Intro: 'After spending nearly 2 decades working with energy and development sector in Nigeria, Ekanikpong is currently playing an important role in the development of agriculture in Southern Nigeria. He is pioneering the digitization of the agricultural sector and the development of digital solutions and database that support farmers with improved inputs, market access and weather information, while supporting them grow their income and helping their businesses remain sustainable.He holds BSc. in Engineering Management from University of Lincoln.',
    expertise: [
      'Project Management and Operations',
      'Business Design and Development',
      'Risk Management',
    ],
    skills: [
      'Forward planning and strategic thinking',
      'Problem solving and decision-making',
      'Commercial awareness Performance Tracking',
      'Ideation Leadership',
      'Forecasting',
      'Scope Management',
      'Project Lifecycle Management',
      'Negotiation',
    ],
  },
  {
    id: uuidv4(),
    designation: 'Executive Director',
    name: 'Moses Akpan',
    image: Ed,
    headshot: 'Moses has over 35 years of experience as an expert Agricultural Economist and an agronomist of high repute who retired as a director with the Ministry of Agriculture.',
    Intro: 'Moses has over 35 years of experience as an expert Agricultural Economist and an agronomist of high repute who retired as a director with the Ministry of Agriculture. He specializes in Agricultural market research, data gathering and analysis, monitoring and evaluation methodologies and holds in-depth knowledge of the workability of the crop and livestock industries. He has worked on several agricultural projects for State Governments and development agencies. Moses holds MSc. in Agricultural Economics from Enugu State University of Science and Technology.',
    expertise: [
      'Finance',
      'Agricultural Inputs & Services',
      'Market Systems',
      'Nutrition',
      'Private Sector Engagement',
      'Resilience',
      'Research and Data Analysis',
    ],
    skills: [
      'Communication',
      'Collaboration',
      'Accounting',
      'Adaptability',
      'Negotiation',
      'Financial Modeling',
      'Profit and Loss',
    ],
  },
  {
    id: uuidv4(),
    designation: 'Chief Operations Officer',
    name: 'Fidel Akpaninyang',
    image: Op,
    headshot: 'A Crop Physiology specialist, Fidel has over 10 years extensive expertise and experience in food production and sustainable standards.',
    Intro: 'A Crop Physiology specialist, Fidel has over 10 years extensive expertise and experience in food production and sustainable standards. She has worked as a trainer and implementation expert with smallholders, large enterprises, and private and public sectors. Fidel has been supporting food SMEs on business development opportunities aimed at supporting market access through adoption of sustainable food production. She holds MSc and Ph.D. in Crop Production and Physiology from the Michael Okpara University of Agriculture, Umudike, Nigeria.',
    expertise: [
      'Gender',
      'Market Systems',
      'Nutrition',
      'Resilience',
      'Sustainable Agriculture',
    ],
    skills: [
      'Conflict Resolution',
      'Empathy',
      'Customer Service',
      'Decision Making Management',
    ],
  },
  {
    id: uuidv4(),
    designation: 'Product Manager',
    name: 'Eunice Temitope',
    image: Pm,
    headshot: 'Eunice has over five years of experience working as a registered Veterinary Doctor. As a veterinary surgeon her area of work covers safeguarding the health and welfare of animals.',
    Intro: 'Eunice has over five years of experience working as a registered Veterinary Doctor. As a veterinary surgeon her area of work covers safeguarding the health and welfare of animals and also responsible for the medical and surgical treatment of a range of animals. She uses her practical skills and knowledge of animal physiology, nutrition and medicine to diagnose illnesses, prescribe medicines and perform surgery. Eunice holds a Masters of Science (M.Sc.) in Veterinary Anatomy and Doctor of Veterinary Medicine (DVM) from the University of Ibadan and Federal University of Agriculture, Abeokuta.',
    expertise: [
      'Gender',
      'Market Systems',
      'Nutrition',
      'Resilience',
      'Sustainable Agriculture',
    ],
    skills: [
      'Medicine Administration',
      'Decision-Making',
      'Written and verbal communication',
      'Teamwork and collaboration',
      'Empathy',
    ],
  },
  {
    id: uuidv4(),
    designation: 'General Manager',
    name: 'David Etim',
    image: Gm,
    headshot: 'David is an Administrative specialist with over eight years of experience in creating impactful communication and administrative functions.',
    Intro: 'David is an Administrative specialist with over eight years of experience in creating impactful communication and administrative functions. Adept in human resource management and business strategy, David had previously worked for the Akwa Ibom State Government to improve business operations through communications and research. He holds Bsc in Banking and Finance from the University of Uyo',
    expertise: [
      'Finance',
      'Customer service',
      'Decision-making',
      'Attention to detail',
      'Human Resource Management',
    ],
    skills: [
      'Office Coordination',
      'Interpersonal Skills',
      'Teamwork',
      'Organizational Skills',
      'Writing',
      'Scope Management',
      'Communication',
      'Time Management',
    ],
  },
  {
    id: uuidv4(),
    designation: 'Software Engineer',
    name: 'Samuel Udoh',
    image: Tech,
    headshot: 'A confident and reliable Software Engineer with over eight years of extensive practical experience of Web application, Data Analysis and Data Visualization.',
    Intro: 'A confident and reliable Software Engineer with over eight years of extensive practical experience of Web application, Data Analysis and Data Visualization. Samuel has received 95% client satisfaction scores. He has proven ability to administer, analyze and interpret all sorts of data with various tools/languages. He is an excellent communicator who can relate well with people at all levels and have the flexibility of working with diverse clients. Sam holds Bsc in Electrical/Electronics Engineering from the University of Uyo.',
    expertise: [
      'Process Automation',
      'Software Development',
      'Testing & Quality Assurance',
    ],
    skills: [
      'Product Knowledge',
      'Full-Stack Development',
      'Customer Needs Analysis',
      'Business Strategy',
      'Business Development',
      'Scope Management',
      'Emotional Intelligence',
      'Critical Thinking',
    ],
  },
];

export default Team;
