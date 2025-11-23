import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  // Original
  // const [selectedId, setSelectedId] = useState(null);

  // const selectedCount = 1;

  // TODO: allow multiple selection
  // Object method
  // const [selectedIds, setSelectedIds] = useState({ count: 0 });

  // Array method
  const [selectedIds, setSelectedIds] = useState([]);

  function handleToggle(toggledId) {
    // Original
    // setSelectedId(toggledId);
    // TODO: allow multiple selection
    // Object method
    // const checkIdVal = selectedIds[toggledId];
    // let nextSelectedIdsState;
    // if (checkIdVal === undefined) {
    //   nextSelectedIdsState = {
    //     ...selectedIds,
    //     count: selectedIds.count + 1,
    //     [toggledId]: true,
    //   };
    // } else {
    //   if (checkIdVal) {
    //     nextSelectedIdsState = {
    //       ...selectedIds,
    //       count: selectedIds.count + -1,
    //       [toggledId]: false,
    //     };
    //   } else {
    //     nextSelectedIdsState = {
    //       ...selectedIds,
    //       count: selectedIds.count + 1,
    //       [toggledId]: true,
    //     };
    //   }
    // }
    // setSelectedIds(nextSelectedIdsState);

    // Array method
    let nextIds;
    if (selectedIds.some((id) => id === toggledId)) {
      nextIds = selectedIds.filter((id) => id !== toggledId);
    } else {
      nextIds = [...selectedIds, toggledId];
    }
    setSelectedIds(nextIds);
  }

  // Array method
  const selectedCount = selectedIds.length;

  // Object method
  // const selectedCount = selectedIds.count;

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
              // Object method
              // selectedIds[letter.id] !== undefined
              //   ? selectedIds[letter.id]
              //   : false

              // Array method
              selectedIds.some((id) => id === letter.id)
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
