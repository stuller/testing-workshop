import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from '../item-list';

// Your job:
// Test the case where the items provided is empty:
//   <ItemList items={[]} />

test('renders no "no items" when the item list is empty', () => {
    // arrange
    const container = document.createElement('div');
    ReactDOM.render(<ItemList items={[]} />, container);
    // act (not needed here)
    // assert
    expect(container.textContent).toMatch('no items');
});

// Test the case where there are items in the list:
//   <ItemList items={['apple', 'orange', 'pear']} />


test('renders the items in the list', () => {
    // arrange
    const container = document.createElement('div');
    const items = ['apple', 'orange', 'pear'];
    ReactDOM.render(<ItemList items={items} />, container);
    // act (not needed here)
    // assert
    expect(container.textContent).toMatch('apple');
    expect(container.textContent).toMatch('orange');
    expect(container.textContent).toMatch('pear');
});

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=basic%20react%20test&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false; // change this when you've submitted!
  expect(submitted).toBe(true)
});
////////////////////////////////
