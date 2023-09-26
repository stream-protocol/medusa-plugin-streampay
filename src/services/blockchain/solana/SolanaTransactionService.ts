// Import the fetchTransactionDetails function
import { fetchTransactionDetails } from './fetchTransactionDetails'; // Adjust the import path as needed

// Transaction ID to fetch details for (replace with your actual transaction ID)
const transactionId = 'your_transaction_id';

// Call the function to fetch Solana transaction details
fetchTransactionDetails(transactionId)
  .then((transactionDetails) => {
    if (transactionDetails) {
      console.log('Transaction Details:', transactionDetails);
      // Process transactionDetails as needed
    } else {
      console.error('Transaction not found or error in response');
    }
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
