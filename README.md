# react.dev-multipleSelection

Created with CodeSandbox

## Challenge (Main Branch)

Challenge 4 of 4: Implement multiple selection
In this example, each Letter has an isSelected prop and an onToggle handler that marks it as selected. This works, but the state is stored as a selectedId (either null or an ID), so only one letter can get selected at any given time.

Change the state structure to support multiple selection. (How would you structure it? Think about this before writing the code.) Each checkbox should become independent from the others. Clicking a selected letter should uncheck it. Finally, the footer should show the correct number of the selected items.

## Solutions

This repository also contains alternative solutions implemented using different techniques, each residing in its own branch.

- **`array-method` Branch:** Solves using an array in state. [Link to array-method branch](https://github.com/travisjupp/react.dev-multipleSelection/tree/array-method)

- **`object-method` Branch:** Solves using an object in state (better performance than array-method). [Link to object-method branch](https://github.com/travisjupp/react.dev-multipleSelection/tree/object-method)

- **`set-method` Branch:** Solves using a set in state (best performance especially when scaled up). [Link to set-method branch](https://github.com/travisjupp/react.dev-multipleSelection/tree/object-method)

Forked from: https://react.dev/learn/choosing-the-state-structure#implement-multiple-selection
