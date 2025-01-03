import React from "react";

const BulkBuy = () => {
  const bulkBuyItems = [
    { actionId: "A101", productName: "Paracetamol", quantity: "100 packs", startPrice: "$200", deliveryLocation: "New York", deliveryTimeline: "3 Days" },
    { actionId: "A102", productName: "Bluetooth Speaker", quantity: "50 units", startPrice: "$1500", deliveryLocation: "California", deliveryTimeline: "7 Days" },
    { actionId: "A103", productName: "Fairy Lights", quantity: "200 sets", startPrice: "$400", deliveryLocation: "Texas", deliveryTimeline: "5 Days" },
    { actionId: "A104", productName: "Notebooks", quantity: "500 units", startPrice: "$600", deliveryLocation: "Florida", deliveryTimeline: "4 Days" },
    { actionId: "A105", productName: "Moisturizer", quantity: "300 bottles", startPrice: "$900", deliveryLocation: "Ohio", deliveryTimeline: "6 Days" },
    { actionId: "A106", productName: "Hoodie", quantity: "150 units", startPrice: "$1200", deliveryLocation: "Nevada", deliveryTimeline: "7 Days" },
    { actionId: "A107", productName: "Chocolate Cookies", quantity: "250 packs", startPrice: "$500", deliveryLocation: "Illinois", deliveryTimeline: "3 Days" },
    { actionId: "A108", productName: "Yoga Mat", quantity: "100 units", startPrice: "$700", deliveryLocation: "Arizona", deliveryTimeline: "5 Days" },
    { actionId: "A109", productName: "Ibuprofen", quantity: "80 packs", startPrice: "$300", deliveryLocation: "Georgia", deliveryTimeline: "4 Days" },
    { actionId: "A110", productName: "Smartphone", quantity: "60 units", startPrice: "$5000", deliveryLocation: "Washington", deliveryTimeline: "8 Days" },
    { actionId: "A111", productName: "Hand Sanitizer", quantity: "500 bottles", startPrice: "$400", deliveryLocation: "New York", deliveryTimeline: "5 Days" },
    { actionId: "A112", productName: "Face Mask", quantity: "1000 units", startPrice: "$300", deliveryLocation: "California", deliveryTimeline: "4 Days" },
    { actionId: "A113", productName: "Wireless Mouse", quantity: "200 units", startPrice: "$600", deliveryLocation: "Texas", deliveryTimeline: "6 Days" },
    { actionId: "A114", productName: "LED Bulbs", quantity: "500 units", startPrice: "$200", deliveryLocation: "Florida", deliveryTimeline: "7 Days" },
    { actionId: "A115", productName: "Winter Jacket", quantity: "100 units", startPrice: "$1500", deliveryLocation: "Nevada", deliveryTimeline: "7 Days" },
    { actionId: "A116", productName: "Electric Kettle", quantity: "150 units", startPrice: "$800", deliveryLocation: "Illinois", deliveryTimeline: "5 Days" },
    { actionId: "A117", productName: "Laptop Stand", quantity: "200 units", startPrice: "$350", deliveryLocation: "Ohio", deliveryTimeline: "6 Days" },
    { actionId: "A118", productName: "Water Bottle", quantity: "1000 units", startPrice: "$1000", deliveryLocation: "Georgia", deliveryTimeline: "4 Days" },
    { actionId: "A119", productName: "Blender", quantity: "150 units", startPrice: "$1200", deliveryLocation: "Arizona", deliveryTimeline: "5 Days" },
    { actionId: "A120", productName: "Backpack", quantity: "300 units", startPrice: "$1500", deliveryLocation: "Washington", deliveryTimeline: "6 Days" },
    { actionId: "A121", productName: "Desk Chair", quantity: "50 units", startPrice: "$2000", deliveryLocation: "New York", deliveryTimeline: "7 Days" },
    { actionId: "A122", productName: "Smartwatch", quantity: "60 units", startPrice: "$2500", deliveryLocation: "California", deliveryTimeline: "8 Days" },
  ];

  return (
    <div className="p-5 bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-xl font-semibold py-4 border-b border-gray-200">
          Bulk Buy Request
        </h2>
        <div className="max-h-[300px] overflow-y-auto scrollbar-hide">
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-2 px-3 font-medium">Action ID</th>
                <th className="py-2 px-3 font-medium">Product Name</th>
                <th className="py-2 px-3 font-medium">Quantity</th>
                <th className="py-2 px-3 font-medium">Start Price</th>
                <th className="py-2 px-3 font-medium">Delivery Location</th>
                <th className="py-2 px-3 font-medium">Delivery Timeline</th>
                <th className="py-2 px-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {bulkBuyItems.map((item, index) => (
                <tr
                  key={item.actionId}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="py-2 px-3">{item.actionId}</td>
                  <td className="py-2 px-3">{item.productName}</td>
                  <td className="py-2 px-3">{item.quantity}</td>
                  <td className="py-2 px-3">{item.startPrice}</td>
                  <td className="py-2 px-3">{item.deliveryLocation}</td>
                  <td className="py-2 px-3">{item.deliveryTimeline}</td>
                  <td className="py-2 px-3">
                    <span
                      className="text-green-500 hover:underline cursor-pointer mr-3"
                      onClick={() => alert("Accepted")}
                    >
                      Accept
                    </span>
                    <span
                      className="text-red-500 hover:underline cursor-pointer"
                      onClick={() => alert("Declined")}
                    >
                      Decline
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BulkBuy;
