import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Report from "./Report";
import PackingList from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddingItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleToggleItem(itemId) {
    setItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmation = window.confirm(
      "Are you sure you want delete all items"
    );
    if (confirmation) setItems([]);
  }

  return (
    <div>
      <Header />
      <Form onAddingItems={handleAddingItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Report items={items} />
    </div>
  );
}
