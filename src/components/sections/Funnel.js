import React from 'react';

const Funnel = () => (
  <section className="funnel--page div">
    <div className="funnel--page--container flex column">
      <h2 className="funnel--title">Get the latest news in Agritech</h2>
      <p className="funnel--description">By subscribing to our newsletter</p>
      <form action="" method="POST" className="funnel--form flex column">
        <input type="email" name="email" id="email" placeholder="Enter your email" className="funnel--input" />
        <button type="submit" className="funnel--btn">Subscribe</button>
      </form>
    </div>
  </section>
);

export default Funnel;
