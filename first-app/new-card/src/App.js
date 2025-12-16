import logo from './logo.svg';
import './App.css';
import Card from './component/Card.jsx'
import Rick from './Image/rick.jpeg'

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <Card
        image={Rick}
        name="Bootleg Portal Chemist Rick"
        status="Dead"
        species="Human"
        location="Citadel of Ricks"
        firstSeen="The Ricklantis Mixup"
      />

      <Card
        image="https://rickandmortyapi.com/api/character/avatar/404.jpeg"
        name="Michael Jackson"
        status="Alive"
        species="Humanoid"
        location="Earth(Phone Dimension)"
        firstSeen="Rixty Minutes"
      />

      <Card
        image="https://rickandmortyapi.com/api/character/avatar/469.jpeg"
        name="Morphizer-XE "
        status="Unknown"
        species="Alien"
        location="Earth(Replacement Dimension)"
        firstSeen="The Whirly Dirly Conspiracy"
      />

      <Card
        image="https://rickandmortyapi.com/api/character/avatar/472.jpeg"
        name="Baby Rick"
        status="Alive"
        species="Human"
        location="Citadel of Ricks"
        firstSeen="The Ricklantis Mixup"
      />

      <Card
        image="https://rickandmortyapi.com/api/character/avatar/725.jpeg"
        name="Tony Galopagus"
        status="Alive"
        species="Human"
        location="Earth(Replacement Dimension)"
        firstSeen="A Rickconveninent Mort"
      />

      <Card
        image="https://rickandmortyapi.com/api/character/avatar/732.jpeg"
        name="Blazen"
        status="Dead"
        species="Human"
        location="Earth(Replacement Dimension)"
        firstSeen="Rickdependence Spray"
      />


    </div>
    
  );
}

export default App;






