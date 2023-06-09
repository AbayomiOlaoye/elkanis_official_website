import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import FormBg from '../../../assets/backgrounds/supplies.webp';

const Funnel = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const feedBack = () => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);

      return (
        <p className="success absolute" style={{ color: '#2a310c', top: '100%', left: '30%' }}>* Registration Successful!</p>
      );
    }

    return null;
  };

  const FORM_ID = 'mqkovayr';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    try {
      const res = await axios.post(`https://formspree.io/f/${FORM_ID}/`, data);
      if (res.status === 200) {
        setEmail('');
        setStatus('SUCCESS');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };
  return (
    <section
      className="funnel--page div flex column"
      style={
      {
        position: 'relative', top: '-27vh', height: 'max-content', justifyContent: 'center', alignItems: 'center',
      }
    }
    >
      <img src={FormBg} alt="form background" loading="lazy" data-aos="fade-up" className="funnel--bg" />
      <div className="funnel--overlay image--overlay--main" style={{ height: '100%', minWidth: '100%' }} />
      <div className="funnel--page--container flex column" data-aos="fade-down" style={{ height: 'max-content' }}>
        <h2 className="funnel--title">Get the latest news in Agritech</h2>
        <p className="funnel--description" data-os="fade-right">By subscribing to our newsletter</p>
        <form onSubmit={handleSubmit} className="funnel--form" style={{ position: 'relative', display: 'inline-block' }}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="funnel--input"
            style={{ marginRight: '10px' }}
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="funnel--btn button"
          >
            Submit
          </button>
          { feedBack() }
        </form>
      </div>
    </section>
  );
};

export default Funnel;
