import Jumbotron from './components/jumbotron'
import jumbodata from './fixtures/jumbo.json'

export default function App() {
  return (
    <Jumbotron.Container>
      {jumbodata.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <p>children</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

 
