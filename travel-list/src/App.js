const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Tootbrush", quantity: 2, packed: true },
  { id: 4, description: "Boxers", quantity: 10, packed: false },
];

export default function App() {
  return (
    <div>
      <Header />
      <Form />
      <PackingList />
      <Report />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>🏝️ Far Away 🧳</h1>
    </header>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Take what you need for your tavels 😉</h3>

      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input type="text" placeholder="item..." />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Report() {
  return (
    <footer className="stats">
      <em>You have packed X items on your list, you are at (X%) completion</em>
    </footer>
  );
}
