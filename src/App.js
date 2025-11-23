import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  // Original
  // const [selectedId, setSelectedId] = useState(null);

  // const selectedCount = 1;

  // TODO: allow multiple selection

  // Set method
  const [selectedIds, setSelectedIds] = useState(new Set());
  const selectedCount = selectedIds.size;

  function handleToggle(toggledId) {
    // Original
    // setSelectedId(toggledId);
    // TODO: allow multiple selection

    // Set method
    let nextSelectedIds = new Set([...selectedIds]);
    if (selectedIds.has(toggledId)) {
      nextSelectedIds.delete(toggledId);
    } else {
      nextSelectedIds.add(toggledId);
    }
    setSelectedIds(nextSelectedIds);
  }

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

              // Set method
              selectedIds.has(letter.id)
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
