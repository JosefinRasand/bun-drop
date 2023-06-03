export class PaymentManager {
  static authorizePayment({ payment }) {
    if (
      payment.creditcardnum.length === 16 &&
      payment.streetnum >= 1 &&
      payment.postalcode.length === 5 &&
      payment.cvc.length === 3 &&
      payment.firstname.length >= 2 &&
      payment.lastname.length >= 2 &&
      payment.address.length >= 3 &&
      payment.city.length >= 3
    ) {
      return true;
    }
    return false;
  }

  static checkMobileNumber(number) {
    if (number.length === 10) {
      return true;
    }
    return false;
  }
}
