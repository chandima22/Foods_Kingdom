document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orderForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            // Get form values
            const name = document.getElementById('name').value;
            const foodItem = document.getElementById('food-item').value;
            const quantity = document.getElementById('quantity').value;
            const address = document.getElementById('address').value;

            // Construct the confirmation message
            const confirmationMessage = `
                ✅ Order Submitted Successfully!

                Thank you, ${name}! Your order details:
                
                Item: ${foodItem}
                Quantity: ${quantity}
                Delivery Address: ${address}

                Your meal will be delivered shortly!
            `;

            // Display the result in a more detailed alert
            alert(confirmationMessage);
            
            // Optional: Reset the form fields after successful submission
            form.reset();
        });
    } else {
        console.error("Order form not found. Check the ID 'orderForm' in HTML.");
    }
});