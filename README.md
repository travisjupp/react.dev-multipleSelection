# react.dev-multipleSelection

Created with CodeSandbox

Challenge 4 of 4: Implement multiple selection
In this example, each Letter has an isSelected prop and an onToggle handler that marks it as selected. This works, but the state is stored as a selectedId (either null or an ID), so only one letter can get selected at any given time.

Change the state structure to support multiple selection. (How would you structure it? Think about this before writing the code.) Each checkbox should become independent from the others. Clicking a selected letter should uncheck it. Finally, the footer should show the correct number of the selected items.

Forked from: https://react.dev/learn/choosing-the-state-structure#implement-multiple-selection
