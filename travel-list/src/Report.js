export default function Report({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add travel items to your travel packing list 📋</em>
      </p>
    );

  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const completionPercentage = Math.round(
    (numOfPackedItems / numOfItems) * 100
  );

  return (
    <footer className="stats">
      <em>
        {completionPercentage === 100
          ? "You are fully packed and ready to go ✈️"
          : `You have ${numOfItems} on your list. You've already packed ${numOfPackedItems} items on
        your list, you are at (${completionPercentage}%) completion`}
      </em>
    </footer>
  );
}
