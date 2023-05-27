import React from 'react';
import FormBg from '../../assets/backgrounds/form_bg.png';

const Funnel = () => (
  <section
    className="funnel--page div flex column"
    style={
      {
        position: 'relative', top: '100px', height: 'max-content', justifyContent: 'center', alignItems: 'center',
      }
    }
  >
    <img src={FormBg} alt="form background" className="funnel--bg" style={{ width: '100%', height: '100%' }} />
    <div className="funnel--overlay image--overlay--main" style={{ height: '100%', width: '100%' }} />
    <div className="funnel--page--container flex column" style={{ position: 'absolute', top: '400px', height: 'max-content' }}>
      <h2 className="funnel--title">Get the latest news in Agritech</h2>
      <p className="funnel--description">By subscribing to our newsletter</p>
      <form action="#" method="POST" className="funnel--form" style={{ position: 'relative', display: 'inline-block' }}>
        <input type="email" name="email" id="email" placeholder="Enter your email" className="funnel--input" style={{ marginRight: '10px' }} />
        <button
          type="submit"
          className="funnel--btn button"
          style={{
            position: 'absolute',
            right: '15px',
            top: '74%',
            transform: 'translateY(-50%)',
            padding: '5px 10px',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default Funnel;
