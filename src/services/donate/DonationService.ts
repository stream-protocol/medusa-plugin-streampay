import { Donation } from './donation'; // Import the Donation interface or model

// Simulated database to store donation data (replace with your actual data source)
const donationDatabase: Donation[] = [];

export class DonationService {
  // Method to add a new donation
  static addDonation(donation: Donation): Donation {
    // Generate a unique ID (you can use a library like uuid for this)
    const uniqueId = Math.floor(Math.random() * 1000);
    donation.id = uniqueId;

    // Set the donation date to the current date and time
    donation.date = new Date();

    // Add the donation to the database
    donationDatabase.push(donation);

    return donation;
  }

  // Method to get all donations
  static getAllDonations(): Donation[] {
    return donationDatabase;
  }

  // Method to get a specific donation by ID
  static getDonationById(id: number): Donation | undefined {
    return donationDatabase.find((donation) => donation.id === id);
  }

  // Method to update a donation by ID
  static updateDonation(id: number, updatedDonation: Donation): Donation | undefined {
    const index = donationDatabase.findIndex((donation) => donation.id === id);

    if (index !== -1) {
      // Update the donation in the database
      donationDatabase[index] = {
        ...donationDatabase[index],
        ...updatedDonation,
      };

      return donationDatabase[index];
    }

    return undefined; // Donation not found
  }

  // Method to delete a donation by ID
  static deleteDonation(id: number): boolean {
    const index = donationDatabase.findIndex((donation) => donation.id === id);

    if (index !== -1) {
      // Remove the donation from the database
      donationDatabase.splice(index, 1);
      return true; // Deletion successful
    }

    return false; // Donation not found
  }
}
