export class ApiHelper {
  static async getBurgers() {
    try {
      const response = await fetch("http://localhost:7000/burgers");
      const data = await response.json();
      return data;
    } catch {
      throw new Error("Failed to fetch");
    }
  }

  static async getBurger(burgerId) {
    try {
      const response = await fetch(`http://localhost:7000/burgers/${burgerId}`);
      const data = await response.json();
      return data;
    } catch {
      throw new Error("Failed to fetch");
    }
  }
}
