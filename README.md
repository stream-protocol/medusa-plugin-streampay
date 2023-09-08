# StreamPay Medusa Plugin

The StreamPay Medusa Plugin allows you to seamlessly integrate StreamPay's web3 payment processing capabilities into your Medusa-based e-commerce platform.

## Table of Contents

- [StreamPay Medusa Plugin](#streampay-medusa-plugin)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Contributing](#contributing)
  - [License](#license)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
  - [Documentation](#documentation)

## Prerequisites

- Install Node.js
- Install git
- Install Postgres
- Install Solana web3.js

## Requirements

- Medusajs backend
- StreamPayments Merchant Portal

**Notice!** **Stream**Payments Merchant Portal is not yet developed. The Merchant Portal is based on Medusa Admin UI and requires developers. It is inspired by the Medusa Admin UI Solana Payment App (Shopify) available at [Solana Payments App](https://github.com/solana-labs/solana-payments-app).

## Installation

You can install the StreamPay Medusa plugin using npm or yarn:

```bash
npm install streampay-medusa-plugin --save
# or
yarn add streampay-medusa-plugin
```

## Configuration

To use the StreamPay web3 payment plugin, you need to add it to your Medusa configuration file (usually `medusa-config.js` or `medusa-config.json`). Here is an example of how to configure and enable the plugin:

```json
const plugins = [
  // other plugins...
  {
    resolve: `medusa-plugin-streampay`,
    options: {
      // Plugin options...
      enableUI: true, // Set to true to enable the admin UI for this plugin
      apiKey: "YOUR_STREAMPAY_API_KEY", // Replace with your StreamPay API key
      // Add other plugin-specific options here
    },
  },
];

module.exports = {
  // Your Medusa configuration...
  plugins,
};
```

Replace `"YOUR_STREAMPAY_API_KEY"` with your actual StreamPay Medusa API key and configure any other plugin-specific options as needed.

## Usage

Explain how to use your plugin, including any code examples or configurations that the user needs to apply.

```javascript
// Example code demonstrating how to use the plugin
const medusa = require("medusa");

medusa.start().then(() => {
  // Your Medusa instance is now using the StreamPay plugin
});
```

## Folder Structure

Here is the recommended folder structure when using this plugin:

```
medusajs-project-root/
├── src/
│   ├── controllers/
│   │   ├── CartController.ts
│   │   ├── ProductController.ts
│   │   ├── ...
│   ├── models/
│   │   ├── Cart.ts
│   │   ├── Product.ts
│   │   ├── ...
│   ├── routes/
│   │   ├── cartRoutes.ts
│   │   ├── productRoutes.ts
│   │   ├── ...
│   ├── services/
│   │   ├── CartService.ts
│   │   ├── ProductService.ts
│   │   ├── ...
│   ├── payment/
│   │   ├── StreamUSDCPaymentService.ts
│   │   ├── StreamSOLPaymentService.ts
│   │   ├── StreamSTRMPaymentService.ts
│   │   ├── StreamEURCPaymentService.ts
│   │   ├── StreamPaymentCore.ts
│   │   └── ...
│   ├── repositories/
│   │   ├── CartRepository.ts
│   │   ├── ProductRepository.ts
│   │   ├── ...
│   ├── types/
│   │   ├── MedusaTypes.ts
│   │   ├── StreamPayTypes.ts
├── tests/
│   ├── unit/
│   │   ├── StreamUSDCPaymentService.test.ts
│   │   ├── StreamSOLPaymentService.test.ts
│   │   ├── ...
│   ├── integration/
│   │   ├── apiRoutes.test.ts
│   │   ├── ...
│   ├── helpers/
│   │   ├── testUtils.ts
│   ├── setup.ts
├── node_modules/
├── tsconfig.json
├── package.json
├── package-lock.json
├── README.md
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This plugin is open-source and available under the [MIT License](LICENSE).

## Author

Stream Protocol / **Stream**Payments™

## Acknowledgments

- Solana Web3.js
- StreamPayments Merchant Portal (Creating a Based on Medusa Admin) Developers are welcome!
- Stream Payment Gateway - Medusajs Web3 Payment Gateway
- StreamPayments - The Solana Payment Layer
- StreamPayjs - Reactjs Framework
- StreamPay API SDK
- etc.

## Documentation

[Project Documentation](https://)
