// Example batch of orders retrieved by HTTP request
var orderJSON =[
    {
        "order_id": "6b12f807-53a5-4c5b-a39c-86d8a86d4db7",
        "items": [
            {
                "item": "Probiotic",
                "quantity": 4,
                "msrp": 19.61,
                "retail_price": 17.45
            },
            {
                "item": "Multivitamin",
                "quantity": 4,
                "msrp": 18.94,
                "retail_price": 17.8
            }
        ],
        "shipping": 20.29,
        "taxes": 7.86
    },
    {
        "order_id": "7993354c-9000-4227-9cd6-d76b9742cd47",
        "items": [
            {
                "item": "Vitamin C",
                "quantity": 2,
                "msrp": 12.24,
                "retail_price": 10.89
            },
            {
                "item": "Vitamin B",
                "quantity": 5,
                "msrp": 14.31,
                "retail_price": 12.16
            }
        ],
        "shipping": 24.49,
        "taxes": 6.61
    },
    {
        "order_id": "9126ee8e-be14-4c22-bb68-a4331f17028e",
        "items": [
            {
                "item": "Vitamin A",
                "quantity": 2,
                "msrp": 17.33,
                "retail_price": 15.08
            },
            {
                "item": "Vitamin C",
                "quantity": 2,
                "msrp": 12.68,
                "retail_price": 12.3
            },
            {
                "item": "Zinc",
                "quantity": 1,
                "msrp": 10.23,
                "retail_price": 9.41
            }
        ],
        "shipping": 22.33,
        "taxes": 5.26
    },
    {
        "order_id": "108fd255-744c-42dc-8004-b2b9d5a4ddc6",
        "items": [
            {
                "item": "Multivitamin",
                "quantity": 5,
                "msrp": 11.35,
                "retail_price": 10.9
            }
        ],
        "shipping": 21.24,
        "taxes": 6.31
    },
    {
        "order_id": "203c0777-1653-4862-a46d-40a1858c6d9a",
        "items": [
            {
                "item": "Probiotic",
                "quantity": 3,
                "msrp": 19.16,
                "retail_price": 17.05
            },
            {
                "item": "Vitamin A",
                "quantity": 2,
                "msrp": 17.44,
                "retail_price": 16.74
            }
        ],
        "shipping": 24.22,
        "taxes": 6.99
    },
    {
        "order_id": "a3d703a9-6c9e-48bd-9039-5f024ed31de9",
        "items": [
            {
                "item": "Vitamin B",
                "quantity": 5,
                "msrp": 17.2,
                "retail_price": 15.31
            }
        ],
        "shipping": 27.85,
        "taxes": 5.65
    },
    {
        "order_id": "592118e8-b462-4c5a-b408-5d9f5054231b",
        "items": [
            {
                "item": "Vitamin A",
                "quantity": 3,
                "msrp": 15.77,
                "retail_price": 14.82
            }
        ],
        "shipping": 23.78,
        "taxes": 7.6
    },
    {
        "order_id": "f7c791a3-f35d-4916-a29a-c8e14ceaa038",
        "items": [
            {
                "item": "Zinc",
                "quantity": 5,
                "msrp": 11.91,
                "retail_price": 11.31
            },
            {
                "item": "Vitamin C",
                "quantity": 2,
                "msrp": 18.22,
                "retail_price": 17.49
            }
        ],
        "shipping": 25.12,
        "taxes": 6.69
    },
    {
        "order_id": "9392edc4-80bc-4d9f-a303-2988f4907860",
        "items": [
            {
                "item": "Vitamin A",
                "quantity": 1,
                "msrp": 14.85,
                "retail_price": 14.7
            },
            {
                "item": "Vitamin B",
                "quantity": 4,
                "msrp": 12.3,
                "retail_price": 11.93
            }
        ],
        "shipping": 27.34,
        "taxes": 6.91
    },
    {
        "order_id": "f87ff9a2-f049-46ba-8da6-450c92256b84",
        "items": [
            {
                "item": "Probiotic",
                "quantity": 5,
                "msrp": 10.06,
                "retail_price": 8.65
            },
            {
                "item": "Vitamin C",
                "quantity": 5,
                "msrp": 11.6,
                "retail_price": 10.56
            }
        ],
        "shipping": 25.95,
        "taxes": 7.67
    },
    {
        "order_id": "dc3171cc-242f-469d-96d1-c82e7635fca9",
        "items": [
            {
                "item": "Probiotic",
                "quantity": 3,
                "msrp": 11.67,
                "retail_price": 10.85
            },
            {
                "item": "Vitamin B",
                "quantity": 3,
                "msrp": 17.77,
                "retail_price": 15.46
            }
        ],
        "shipping": 27.73,
        "taxes": 5.12
    },
    {
        "order_id": "545d19da-49ab-42e8-b462-ad4f784ef85c",
        "items": [
            {
                "item": "Zinc",
                "quantity": 4,
                "msrp": 10.69,
                "retail_price": 10.37
            }
        ],
        "shipping": 21.01,
        "taxes": 7.58
    },
    {
        "order_id": "c6ea03e2-e103-4153-abc2-6f826d271a10",
        "items": [
            {
                "item": "Zinc",
                "quantity": 1,
                "msrp": 14.25,
                "retail_price": 13.82
            },
            {
                "item": "Vitamin A",
                "quantity": 1,
                "msrp": 16.53,
                "retail_price": 15.7
            },
            {
                "item": "Multivitamin",
                "quantity": 1,
                "msrp": 14.62,
                "retail_price": 14.04
            }
        ],
        "shipping": 21.35,
        "taxes": 7.51
    },
    {
        "order_id": "f7ab30c1-2a06-437e-b912-1e12fa5a935d",
        "items": [
            {
                "item": "Probiotic",
                "quantity": 1,
                "msrp": 10.34,
                "retail_price": 10.03
            },
            {
                "item": "Vitamin C",
                "quantity": 3,
                "msrp": 17.67,
                "retail_price": 15.02
            },
            {
                "item": "Vitamin A",
                "quantity": 1,
                "msrp": 17.24,
                "retail_price": 15.69
            }
        ],
        "shipping": 25.72,
        "taxes": 7.61
    },
    {
        "order_id": "fd3176da-4555-4b42-b9a9-2f2c63b4d093",
        "items": [
            {
                "item": "Vitamin B",
                "quantity": 2,
                "msrp": 18.45,
                "retail_price": 17.53
            },
            {
                "item": "Vitamin A",
                "quantity": 5,
                "msrp": 11.53,
                "retail_price": 10.72
            }
        ],
        "shipping": 21.43,
        "taxes": 5.49
    },
    {
        "order_id": "37ae0aa1-7503-4552-9684-d54d4b46ce10",
        "items": [
            {
                "item": "Vitamin C",
                "quantity": 1,
                "msrp": 14.69,
                "retail_price": 13.81
            },
            {
                "item": "Multivitamin",
                "quantity": 3,
                "msrp": 13.16,
                "retail_price": 11.58
            },
            {
                "item": "Zinc",
                "quantity": 2,
                "msrp": 14.77,
                "retail_price": 12.7
            }
        ],
        "shipping": 24.82,
        "taxes": 6.7
    },
    {
        "order_id": "5c6354d2-de1f-487c-8740-4366eb267662",
        "items": [
            {
                "item": "Multivitamin",
                "quantity": 4,
                "msrp": 13.33,
                "retail_price": 12.53
            },
            {
                "item": "Vitamin A",
                "quantity": 2,
                "msrp": 18.13,
                "retail_price": 16.5
            },
            {
                "item": "Vitamin B",
                "quantity": 5,
                "msrp": 19.15,
                "retail_price": 18.38
            }
        ],
        "shipping": 22.46,
        "taxes": 6.04
    },
    {
        "order_id": "f5cdf339-a198-4be2-9061-7aedd76311c7",
        "items": [
            {
                "item": "Vitamin B",
                "quantity": 4,
                "msrp": 14.36,
                "retail_price": 12.21
            },
            {
                "item": "Zinc",
                "quantity": 3,
                "msrp": 19.89,
                "retail_price": 17.5
            }
        ],
        "shipping": 24.8,
        "taxes": 5.37
    },
    {
        "order_id": "10aab241-3c5d-46ca-b767-121fdce80f21",
        "items": [
            {
                "item": "Multivitamin",
                "quantity": 1,
                "msrp": 19.27,
                "retail_price": 18.88
            },
            {
                "item": "Vitamin B",
                "quantity": 4,
                "msrp": 16.16,
                "retail_price": 14.06
            },
            {
                "item": "Vitamin A",
                "quantity": 5,
                "msrp": 11.12,
                "retail_price": 10.68
            }
        ],
        "shipping": 24.37,
        "taxes": 5.95
    },
    {
        "order_id": "eed8c298-6c8c-4f4b-a5a8-145cf3d2d756",
        "items": [
            {
                "item": "Vitamin C",
                "quantity": 2,
                "msrp": 11.39,
                "retail_price": 11.05
            },
            {
                "item": "Vitamin B",
                "quantity": 1,
                "msrp": 14.06,
                "retail_price": 13.5
            }
        ],
        "shipping": 23.79,
        "taxes": 6.02
    }
];

/**
 * This class takes in a Batch of Orders in the form of a JSON array and returns them by HTTP Request in the form
 * of individual Financial Orders
 *
 * Note: To fix rounding issues all prices are multiplied by 100 and treated as cents and then converted back to dollars
 * at the very end.
 */

// Loops through all of the orders in a batch
for (var index in orderJSON) {
    var order = orderJSON[index];

    // Tracks the initial shipping and tax values in order to compare at the end
    var sumShipping = Math.round(order.shipping * 100);
    var sumTaxes = Math.round(order.taxes * 100);
    console.log("SUM " + sumShipping + ":" + sumTaxes);

    // Total Discount Quantity and Amounts to be summed
    var discountQuantity = 0;
    var discountAmount = 0;

    // Sum the total item cost in order to split the Taxes/Shipping evenly among all items
    var totalCost = 0;
    for (var itemIndex in order.items) {
        totalCost += order.items[itemIndex].quantity * order.items[itemIndex].msrp * 100;
    }

    // These are used in the formula to calculate total shipping and tax cost for each item
    var shippingRatio = sumShipping / totalCost;
    var taxRatio = sumTaxes / totalCost;

    // Loops through all of the items in a given order
    for (var itemIndex in order.items) {
        var items = order.items[itemIndex];
        // Adds the quantity to the sum total which is appended at the end to the Discount item
        discountQuantity += items.quantity;
        // Sums the total discount amount for an order which is added to the Discount item
        discountAmount += items.quantity * (items.retail_price - items.msrp);

        // MSRP price which is used as the value for the "amount" for each item
        var price = items.msrp;

        // Remove the msrp and retail_price fields from the orders
        delete items.msrp;
        delete items.retail_price;

        // Add the new field "amount" as well as the shipping and taxes for each item
        items.amount = price;

        var shipping = items.quantity * price * shippingRatio;
        var taxes = items.quantity * price * taxRatio;

        sumShipping -= Math.round(shipping * 100);
        sumTaxes -= Math.round(taxes * 100);


        /**
         *  For the last item, do a check to see if the combined shipping and tax values
         *  match up, if there is a discrepancy then add it to this order's amount
         */

        if (itemIndex == order.items.length - 1) {
            console.log(sumShipping + " : " + sumTaxes);
            if (sumShipping == 0) {
                items.shipping = round(shipping);
            }
            else if (sumShipping == 1) {
                items.shipping = round((shipping * 100 + 1)/100);
            }
            else if (sumShipping == -1) {
                items.shipping = round((shipping * 100 - 1)/100);
            }

            if (sumTaxes == 0) {
                items.taxes = round(taxes);
            }
            else if (sumTaxes == 1) {
                items.taxes = round((taxes * 100 + 1)/100);
            }
            else if (sumTaxes == -1) {
                items.taxes = round((taxes * 100 - 1)/100);
            }

        } else {
            items.shipping = round(shipping);
            items.taxes = round(taxes);
        }
    }

    // Remove the total shipping and taxes from the bottom of the order
    delete order.shipping;
    delete order.taxes;

    // Add the discount item to the end of each order
    order.items.push(
        {
            "item": "Discount",
            "quantity": discountQuantity,
            "amount": round(discountAmount),
            "shipping": 0,
            "taxes": 0
        });
    console.log(order);
    // postFinanceOrder(order);
}


function postFinanceOrder(foJSON) {

    var username = 'user1305';
    var password = 'vFestGKYiEGEquBbjDppyNoa';
    var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    var request = require('request');
    var url = 'https://ops-interview.p.fullscript.io/orders';

    request.post({
        url: url,
        headers: {
            "Authorization": auth
        },
        json: foJSON
    }, function(error, response, body) {
        console.log('body : ', body);
    });
}

function getOrderBatch() {
    var username = 'user1305';
    var password = 'vFestGKYiEGEquBbjDppyNoa';
    var auth = 'Basic ' + Buffer.from(username + ':' + password).toString('base64');
    var request = require('request');
    var url = 'https://ops-interview.p.fullscript.io/orders';

    return request.get({
        url: url,
        headers: {
            "Authorization": auth
        }
    }, function(error, response, body) {
        console.log('body : ', body);
    });
}

// Helper function for rounding to 2 decimals.
function round(value) {
    return Math.round(value * 100) / 100;
}


