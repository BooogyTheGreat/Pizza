// Pizza Order

// Add an Event Lizten to the button to run the placeOrder function

// Story order code in a function
function placeOrder() {
  //Input
  let size = prompt("Enter the size of your pizza. (small, medium, or large)");
  let topping1 = prompt("what is your first topping?");
  let topping2 = prompt("what is your second topping?");
  //Process
  let Order = `Your ${size} pizza with ${topping1} and ${topping2} will be ready soon!`;

  //Output
  alert(Order);
}
