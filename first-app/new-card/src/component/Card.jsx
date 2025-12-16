const Card = ({ image, name, status, species, location, firstSeen }) => {
  return (
    <div className="character-card">
      <img src={image} alt={name} className="character-image" />

      <div className="character-details">
        <h2 className="name">{name}</h2>

        <p className="status">
          <span className={`status-dot ${status.toLowerCase()}`}></span>
          {status} - {species}
        </p>

        <p className="title">Last known location:</p>
        <p className="value">{location}</p>

        <p className="title">First seen in:</p>
        <p className="value">{firstSeen}</p>
      </div>
    </div>
  );
};

export default Card;































// function Card({ title, description, image }) {
//   return (
//     <div className="card" style={styles.card}>
//       <img src={image} alt={title} style={styles.image} />
//       <h2 style={styles.title}>{title}</h2>
//       <p style={styles.text}>{description}</p>
//     </div>
//   );
// }

// const styles = {
//   card: {
//     border: "1px solid #ccc",
//     borderRadius: "12px",
//     padding: "16px",
//     width: "250px",
//     textAlign: "center",
//     boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
//     margin: "10px"
//   },
//   image: {
//     width: "100%",
//     borderRadius: "10px"
//   },
//   title: {
//     fontSize: "1.2rem",
//     margin: "10px 0"
//   },
//   text: {
//     fontSize: "0.9rem",
//     color: "#555"
//   }
// };

// export default Card;

// ---------------------------------------------

