# StreamPay Medusa Plugin
**Proof of Concept**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

The Stream**Pay** Medusa Plugin allows you to integrate StreamPay's payment processing capabilities seamlessly into the Medusa-based e-commerce platform.

## Table of Contents

- [StreamPay Medusa Plugin](#streampay-medusa-plugin)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Contributing](#contributing)
  - [License](#license)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Installation

You can install Stream**Pay** Medusa plugin using npm or yarn:

```bash
npm install streampay-medusa-plugin --save
# or
yarn add streampay-medusa-plugin
```

## Configuration

To use this plugin, you need to add it to your Medusa configuration file (usually `medusa-config.js` or `medusa-config.json`). Here is an example of how to configure and enable the plugin:

```json
{
  "plugins": [
    {
      "resolve": "streampay-medusa-plugin",
      "options": {
        "api_key": "STREAMPAY_API_KEY",
        // Your other plugin configuration options here
      }
    }
  ]
}
```

Replace `"STREAMPAY_API_KEY"` with your actual StreamPay Medusa API key, and configure any other plugin-specific options as needed.

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
│   ├── app.ts
│   ├── server.ts
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
  
