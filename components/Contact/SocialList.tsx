/* eslint-disable @next/next/no-img-element */
import styles from "../../styles/socialListContact.module.scss";

const SocialList = () => (
  <ul className={styles.social__list}>
    <li className={styles.social__list__item}>
      <a href="#" className={styles.social__list__item__link}>
        <span className={styles.social__list__item__link__text}>Telegram</span>
        <span
          className={`${styles.social__list__item__link__icon} ${styles.social__list__item__link__icon__tg}`}
        >
          <img
            className={styles.social__list__item__link__img}
            src="/img/tg.svg"
            alt="Telegram"
          />
        </span>
      </a>
    </li>
  </ul>
);

export default SocialList;
