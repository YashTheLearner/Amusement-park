document.getElementById('payButton').onclick = function() {
    // Retrieve the number of tickets and amount
    var numberOfTickets = parseInt(document.getElementById('tickets').value);
    var baseAmount = 699; // Base amount per ticket

    // Calculate the total amount
    var totalAmount = numberOfTickets * baseAmount;

    // Payment options
    var options = {
        key: 'rzp_test_0yx0AGbEbJaWtH', // Enter your Razorpay API Key here
        amount: totalAmount * 100, // Amount is in currency subunits. 100 refers to 100 paise = ₹1
        currency: 'INR',
        name: 'Kanha FunCity',
        description: 'Payment for ' + numberOfTickets + ' Ticket(s)',
        image: 'https://example.com/logo.png', // Your company logo
        handler: function(response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            // You can handle the payment success response here
        },
        prefill: {
            name: document.getElementById('name').value, // Pre-fill user's name
            email: document.getElementById('email').value, // Pre-fill user's email
            contact: document.getElementById('mobile').value // Pre-fill user's phone number
        },
        notes: {
            address: 'Razorpay Corporate Office' // Add any additional notes if required
        },
        payment_method: {
            external: ['upi'] // Enable UPI payment option
        }
    };

    // Create Razorpay instance and open checkout
    var rzp = new Razorpay(options);
    rzp.open();
}
function sendMail() {
    // You can add your email sending logic here
    let parms = {
        name: document.getElementById("name").value,
        email : document.getElementById("email ").value,
        subject : document.getElementById("subject ").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_wr1gqbs","template_elrgqbw",parms).then(alert('Email sent successfully!'));
}
