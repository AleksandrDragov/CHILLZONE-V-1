import styles from './menu.module.css';
const Card = ({ title, name, price, logo }) => (
  <div className={styles.container}>
    <img
      src={`${process.env.PUBLIC_URL}/images/${logo}`}
      alt="Logo"
      className={styles.logo}
    />
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.name}> {name}</p>
    <p className={styles.price}>Price: {price} Kč</p>
  </div>
);

const Menu = ({ data }) => {
  return (
    <div className={styles.menu}>
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};
export default Menu;
