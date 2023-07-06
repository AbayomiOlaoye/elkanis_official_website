import React from 'react';
import Top from '../sections/jumbotron/top';
import style from '../sections/css/terms.module.scss';
import img from '../../assets/backgrounds/product_bg.svg';
import Footer from '../Nav/Footer';

const Privacy = () => (
  <div className={`${style.fullContainer} flex column a-i-c`}>
    <Top
      title="Privacy Policy"
      img={img}
    />
    <div className={`${style.container} w--80 flex column a-i-c j-c-c`}>
      <div className={style.content}>
        <p>
          <b>Effective Date:</b>
          4th July, 2023
        </p>
        <h3>Introduction</h3>
        <p>
          El-kanis and Partners (&#34;El-kanis,&#34;
          &#34;we&#34;, &#34;us&#34;, or &#34;our&#34;) are committed to protecting the
          privacy and confidentiality of your personal information. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your personal information
          when you visit our website (&#34;Site&#34;) or use our services. By accessing
          the Site or using our services, you consent to the practices described in this
          Privacy Policy.
        </p>

        <h3>Information We Collect</h3>
        <p>
          We may collect personal information that you voluntarily provide to us, such
          as your name, email address, contact details, and any other information you
          provide through forms or inquiries on the Site. Additionally, we may gather
          certain non-personal information automatically, including your IP address,
          browser type, internet service provider, referring/exit pages, and date/time
          stamps. This data is collected using cookies and other tracking technologies
          to enhance your browsing experience.
        </p>

        <h3>How We Use Your Information</h3>
        <p>We use your personal information for the following purposes:</p>
        <ul className={style.disc}>
          <li>
            To provide and maintain the Site and our services;
          </li>
          <li>
            To respond to your inquiries and communicate with you;
          </li>
          <li>
            To improve and personalize your experience on the Site;
          </li>
          <li>
            To analyze and understand how users interact with the Site;
          </li>
          <li>To comply with legal obligations;</li>
          <li>
            To send promotional and marketing materials, subject to your consent where
            required by law.
          </li>
          <li>
            Legal Basis for Processing
          </li>
        </ul>

        <p>
          We process your personal information based on one or more of the following legal grounds:
        </p>
        <ul className={style.circle}>
          <li>
            <b>Performance of a contract: </b>
            Processing is necessary to fulfill our
            contractual obligations with you.
          </li>
          <li>
            <b>Consent: </b>
            You have given us your explicit consent to process your personal information
            for specific purposes.
          </li>
          <li>
            <b>Legitimate interests: </b>
            Processing is necessary for our legitimate interests or the
            legitimate interests of third parties, provided that your fundamental rights and
            freedoms do not override those interests.
          </li>
          <li>
            <b>Legal obligations: </b>
            Processing is necessary to comply with applicable
            laws and regulations.
          </li>
        </ul>

        <h3>Data Sharing and Disclosure</h3>
        <p>
          We may share your personal information with third-party service providers to
          assist us in operating the Site or providing services to you. These providers
          have access to your personal information only to perform specific tasks on our
          behalf and are obligated not to disclose or use it for any other purpose. We
          may also disclose your personal information if required to do so by law or in
          response to valid requests by public authorities (e.g., law enforcement or
          government agencies).
        </p>

        <h3>Data Retention</h3>
        <p>
          We will retain your personal information for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, unless a longer retention
          period is required or permitted by law.
        </p>

        <h3>Your Data Protection Rights</h3>
        <p>
          If you are a resident of the European Economic Area (EEA), you have certain
          data protection rights, including:
        </p>
        <ul className={style.roman}>
          <li>
            <b>Right of access: </b>
            You have the right to request a copy of the personal
            information we hold about you.
          </li>
          <li>
            <b>Right of rectification: </b>
            You can request that we correct any inaccurate or
            incomplete personal information.
          </li>
          <li>
            <b>Right to object: </b>
            You have the right to object to the processing of your
            personal information for certain purposes.
          </li>
          <li>
            <b>Right of restriction: </b>
            You can request the restriction of processing under
            certain conditions.
          </li>
          <li>
            <b>Right to data portability: </b>
            You can request a copy of your personal information
            in a structured, commonly used, and machine-readable format.
          </li>
          <li>
            <b>Right to withdraw consent: </b>
            If we rely on your consent to process your personal
            information, you have the right to withdraw that consent at any time.
          </li>
        </ul>
        <p>
          To exercise your data protection rights or request any other information,
          please contact us using the details provided at the end of this Privacy Policy.
        </p>

        <h3>Third-Party Links and Privacy Policies</h3>
        <p>
          The Site may contain links to third-party websites or services that are not
          operated by El-kanis. We have no control over the content and privacy practices
          of these third parties. We encourage you to review their privacy policies and
          practices before providing any personal information or using their services.
        </p>

        <h3>Children&apos;s Information</h3>
        <p>
          The Site is not intended for children under the age of 13. We do not knowingly
          collect personal identifiable information from children. If you believe that
          your child has provided us with personal information, please contact us
          immediately, and we will make reasonable efforts to remove such information
          from our records.
        </p>

        <h3>Changes to the Privacy Policy</h3>
        <p>
          We reserve the right to modify or update this Privacy Policy at any time.
          Any changes will be effective immediately upon posting the revised Privacy
          Policy on the Site. We encourage you to review this Privacy Policy
          periodically to stay informed about how we collect, use, and protect your information.
        </p>

        <h3>Contact Us</h3>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy
          Policy, please contact us at:
          <p>
            {/* <address>El-kanis and Partners</address> */}
            <address>
              1 Enen Afaha Street,
              <br />
              Uyo, Akwa Ibom State,
              <br />
              Nigeria.
            </address>
            Email:
            <a href="mailto:info@elkanisgroup.com">info@elkanisgroup.com</a>
          </p>
        </p>
        <p>
          By using the El-kanis website, you acknowledge that you have read, understood,
          and agree to be bound by the above Privacy Policy. It is recommended to read
          the complete Privacy Policy on the El-kanis website for a comprehensive understanding.
        </p>
        <br />
        <small>
          Last updated: 4th July 2023
        </small>
      </div>
    </div>
    <Footer />
  </div>
);

export default Privacy;
