import styles from './MeetProfessionals.module.css';
import { useState, useEffect } from 'react';

export default function MeetProfessionals() {
  const [isMobile, setIsMobile] = useState(false);

  const triggerVibration = () => {
    if (navigator.vibrate) navigator.vibrate([20, 10, 20]);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className={styles.container}>
      <p className={styles.subheading}>Our Service</p>
      <h2 className={styles.heading}>
        <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>Meet</span>{' '}
        <strong style={{ color: '#66ccff' }}>Professionals</strong>
      </h2>
      <p className={styles.description}>
        Connect with experienced professionals across diverse tech fields.
      </p>

      <div className={styles.calendarBox} onClick={triggerVibration}>
        {isMobile ? (
          <a
            href="https://calendar.google.com/calendar/appointments/AcZssZ3nvJBplVzF43NV4tXEZsI6aki__75JFSOShfs=?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileButton}
          >
            Book a 60-min Appointment
          </a>
        ) : (
          <iframe
            src="https://calendar.google.com/calendar/appointments/AcZssZ3nvJBplVzF43NV4tXEZsI6aki__75JFSOShfs=?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Company Booking Calendar"
          ></iframe>
        )}
      </div>
    </section>
  );
}
