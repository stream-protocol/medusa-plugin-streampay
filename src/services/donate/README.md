A specific responsibility within Medusa Donation plugin.

Donation-related code into separate folders and files, which is a good practice for maintaining a clean and structured project. Overview of each component within the "donations" folder and file structure:

- **controllers/**: This is where you define the controller logic for handling donation-related operations. `DonationController.ts` likely contains functions for creating, updating, listing, and deleting donations. These controllers should handle incoming HTTP requests and interact with the service layer.

- **models/**: In the "models" folder, you define the data model for donations. `Donation.ts` likely includes the structure and schema of a donation, specifying its properties like `id`, `amount`, `donor`, `wallet_address`, `date`, and `trx_id`. This model helps ensure consistency when working with donation data.

- **repositories/**: The "repositories" folder typically contains database interaction code. `DonationRepository.ts` likely includes functions for database operations related to donations, such as saving new donations, fetching donations by ID or criteria, and updating donation records. These repositories serve as an abstraction layer between the database and services.

- **services/**: The "services" folder houses the business logic for donations. `DonationService.ts` likely contains functions responsible for handling the core donation-related operations. These functions may include validating donations, applying business rules, and orchestrating interactions between controllers and repositories.

- **routes/**: The "routes" folder defines the API routes for donation-related endpoints. `donationRoutes.ts` is where you specify the route paths, HTTP methods (e.g., GET, POST), and associated controller methods. These routes define how clients interact with StreamPay donation API.
