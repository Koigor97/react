import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  return (
    <main>
      <Input id="name" label="Username" type="text" />
      <Input id="email" label="Email" type="email" disabled />
      <p>
        <Container
          className="button"
          as={Button}
          onClick={() => console.log("Polymorphism")}
        >
          Click Me
        </Container>
      </p>
      <p>
        <Button
          className="button"
          href="https://api.github.com/users/koigor97"
          target="blank"
        >
          "My Api"
        </Button>
      </p>
    </main>
  );
}

export default App;
