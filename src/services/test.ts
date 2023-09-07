  // In a service in your plugin
  class MyService extends TransactionBaseService {
    constructor(container, options) {
      super(container)
      // options contains plugin options
      const { enableUI, ...otherOptions } = options
      // pass otherOptions to a third-party service
      const client = new Client(otherOptions)
    }
    // ...
  }