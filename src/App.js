import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  // Original
  // const [selectedId, setSelectedId] = useState(null);

  // const selectedCount = 1;

  // TODO: allow multiple selection

  // Array method
  const [selectedIds, setSelectedIds] = useState([]);

  function handleToggle(toggledId) {
    // Original
    // setSelectedId(toggledId);

    // TODO: allow multiple selection

    // Array method
    let nextIds;
    if (selectedIds.includes(toggledId)) {
      nextIds = selectedIds.filter((id) => id !== toggledId);
    } else {
      nextIds = [...selectedIds, toggledId];
    }
    setSelectedIds(nextIds);
  }

  // Array method
  const selectedCount = selectedIds.length;

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // Original
              // letter.id === selectedId

              // TODO: allow multiple selection

              // Array method
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
