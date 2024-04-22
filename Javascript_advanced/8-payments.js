function processPayment(amount) {
    console.log(`Collecting payment of ${amount}`);
}

function processOrder(orderId, amount) {
    console.log(`${orderId} is being processed`);
    processPayment(amount);
    console.log(`${orderId} has been fully processed`);
}

console.log("Processing orders");

const orders = [
    { orderId: 12321, amount: 10.99 },
    { orderId: 12322, amount: 12.99 },
    { orderId: 12323, amount: 15.0 }
];

orders.forEach(order => processOrder(order.orderId, order.amount));

console.log("All the orders have been processed");
