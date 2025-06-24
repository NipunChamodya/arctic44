// InfiniteScrollIcons.jsx
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaGitAlt,
  FaJava,
  FaAndroid,
  FaSwift,
} from 'react-icons/fa';
import styles from './InfiniteScrollIcons.module.css';

export default function InfiniteScrollIcons() {
  const icons = [
    FaJava,
    FaAndroid,
    FaSwift,
    FaFigma,
    FaGitAlt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
  ];

  const repeatedIcons = [...icons, ...icons, ...icons, ...icons];

  return (
    <div className={styles.scrollerWrapper}>
      <div className={styles.scroller}>
        {repeatedIcons.map((Icon, index) => (
          <div key={index} className={styles.iconBox}>
            <div className={styles.glow}></div>
            <Icon size={48} className={styles.icon} />
          </div>
        ))}
      </div>
    </div>
  );
}
