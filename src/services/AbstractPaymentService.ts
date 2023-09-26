import axios from 'axios';

class PaymentService {
  // ... Existing code ...

  /**
   * Fetch cryptocurrency and stablecoin price data.
   * @param ids - An array of cryptocurrency and stablecoin IDs.
   * @returns A promise that resolves to the price data.
   */
  async fetchCryptoPriceData(ids: string[]): Promise<any> {
    const apiUrl = 'https://api.coingecko.com/api/v3/usdc/price';

    // Include 'usd-coin' (USDC) in the list of IDs
    ids.push('usd-coin'); 

    try {
      const response = await axios.get(apiUrl, {
        params: {
          ids: ids.join(','),
          vs_currencies: 'usd', // Use 'usd' to get prices in USD
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching cryptocurrency price data:', error);
      return {};
    }
  }
}
