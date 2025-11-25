import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";


export function renderPaymentSummary() {
  let productPriceRupees = 0;
  let shippingPriceRupees = 0;
cart.forEach((cartItem) => {
 const product =  getProduct(cartItem.productId);
 productPriceRupees += product.priceRupees * cartItem.quantity;

const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
 shippingPriceRupees += deliveryOption.priceRupees
});

const totalBeforeTaxRupees = productPriceRupees + shippingPriceRupees;
const TaxRupees = Math.round(totalBeforeTaxRupees * 0.18);
const TotalRupees = totalBeforeTaxRupees + TaxRupees;

const paymentSummaryHTML = `
<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">₹ ${productPriceRupees}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">₹ ${shippingPriceRupees}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">₹ ${totalBeforeTaxRupees}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (18%):</div>
            <div class="payment-summary-money">₹ ${TaxRupees}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">₹ ${TotalRupees}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
`;

document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;
};
