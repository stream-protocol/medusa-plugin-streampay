Creating a StreamPay Solana smart contract (program) to include a fee structure and fee calculation, you'll need to make changes to StreamPay program's Rust code. Below, I'll provide with an example of how to add fees to StreamPay Solana program. Please note that this is a simplified example, and you should adapt it to StreamPay specific use case and requirements.

Let's assume we have a Solana program for processing payments, and you want to add a fee when a payment is made.

1. Define the fee structure:

```rust
// Define a fee structure
struct Fee {
    amount: u64,      // Fee amount in lamports
    description: String, // Description of the fee
}

impl Fee {
    fn new(amount: u64, description: &str) -> Self {
        Fee {
            amount,
            description: description.to_string(),
        }
    }
}
```

2. Modify your program's entry point to accept fees as arguments:

```rust
#[program]
pub mod payment_program {
    use super::*;
    
    #[entry]
    pub fn process_payment(
        ctx: Context<ProcessPayment>,
        amount: u64,
        fees: Vec<Fee>, // Accept fees as an argument
    ) -> ProgramResult {
        // Calculate the total fee
        let total_fee: u64 = fees.iter().map(|fee| fee.amount).sum();
        
        // Ensure the payer has enough balance to cover the total fee
        if ctx.remaining_lamports() < total_fee {
            return Err(ProgramError::InsufficientFunds);
        }
        
        // Deduct fees from the payer's account
        ctx.remaining_lamports -= total_fee;
        
        // Implement payment processing logic here
        
        // Record fee transactions (you can save this data to an account or log it)
        for fee in fees {
            let fee_description = &fee.description;
            let fee_amount = fee.amount;
            // Log or record the fee details
        }
        
        Ok(())
    }
}
```

3. In StreamPay client code (JavaScript or another language), StreamPay can invoke the Solana program with the payment amount and fees:

```javascript
const { Transaction, SystemProgram, Connection } = require("@solana/web3.js");

const connection = new Connection("https://api.devnet.solana.com");

// Define the payer's account and fee structure
const payerAccount = new Account();
const fees = [new Fee(100, "Processing Fee")]; // Define StreamPay fees here

// Create a transaction that invokes the Solana program with fees
const transaction = new Transaction().add(
    payment_program.processPayment({
        amount: 1000, // Payment amount in lamports
        fees, // Pass the fees as an argument
    })
);

// Sign and send the transaction
transaction.sign(payerAccount, SystemProgram.programId);
connection.sendTransaction(transaction, [payerAccount], { skipPreflight: false }).then((signature) => {
    console.log("Transaction Signature:", signature);
});
```

This example demonstrates how to modify StreamPay Solana program to accept fees as an argument and deduct them from the payer's account. Ensure that you adapt this code to StreamPay specific program structure and requirements.

Remember to handle errors, implement proper security measures, and thoroughly test StreamPay program before deploying it to the Solana network.