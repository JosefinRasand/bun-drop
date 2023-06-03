export class LocalStorageManager {
  static addToLocalStorage(id, amount) {
    let orderList = localStorage.getItem("orderList");

    if (!orderList) {
      orderList = [];
    } else {
      orderList = JSON.parse(orderList);
    }

    const existingItem = orderList.find((item) => item.id === id);

    if (existingItem) {
      existingItem.amount = amount; // Update the amount if the item already exists
    } else {
      orderList.push({ id, amount });
    }

    localStorage.setItem("orderList", JSON.stringify(orderList));
  }

  static removeFromLocalStorage(id) {
    let orderList = localStorage.getItem("orderList");

    if (!orderList) {
      orderList = [];
    } else {
      orderList = JSON.parse(orderList);
    }

    const updatedList = orderList.filter((item) => item.id !== id);

    localStorage.setItem("orderList", JSON.stringify(updatedList));

    return updatedList;
  }
}
