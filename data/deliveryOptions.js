export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceRupees: 0,
  },
  {
    id: "2",
    deliveryDays: 3,
    priceRupees: 49,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceRupees: 99,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption =
    deliveryOptions.find((o) => o.id === deliveryOptionId) ||
    deliveryOptions[0];

    return deliveryOption || deliveryOptions[0];
}
