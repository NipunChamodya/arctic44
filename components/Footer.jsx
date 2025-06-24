// components/Footer.jsx

import styles from './Footer.module.css';
import { FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const triggerVibration = () => {
    if (navigator.vibrate) {
      navigator.vibrate([20]); // simple haptic tap
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <div className={styles.footerColumn}>
          <h3>CONTACT</h3>
          <p>We Love Getting Emails</p>
          <p>
            <a href="mailto:contact@arctic44.com" onClick={triggerVibration}>
              <FaEnvelope size={22} /> contact@arctic44.com
            </a>
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3>LINKS</h3>
          <p><a href="#home" onClick={triggerVibration}> Home</a></p>
          <p><a href="#service" onClick={triggerVibration}> Service</a></p>
          <p><a href="#blogs" onClick={triggerVibration}> Blogs</a></p>
          <p><a href="#about" onClick={triggerVibration}> About Us</a></p>
        </div>

        <div className={styles.footerColumn}>
          <h3>SECURITY</h3>
          <p><a href="#privacy" onClick={triggerVibration}> Privacy Policy</a></p>
          <p><a href="#terms" onClick={triggerVibration}> Terms & Conditions</a></p>
          <p><a href="#data" onClick={triggerVibration}> Data Usage Policy</a></p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2025</span>
        <span>Arctic44 (PVT) LTD</span>
        <span>V 1.023</span>
      </div>
      <p className={styles.footerColumnnn}>owned by Arctic44</p>
    </footer>
  );
}
