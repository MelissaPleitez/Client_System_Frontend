import { makeAutoObservable, runInAction } from "mobx";

class ClientStore {
  clients: Array<{ name: string; nationality: string; occupation: string; email: string }> = [];
  isLoading: boolean = false;
  darkMode: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  async fetchClients() {
    this.isLoading = true;
    try {
      const response = await fetch("https://localhost:5001/api/clients");
      const data = await response.json();
      
      runInAction(()=>{
        this.clients = data;
      });
    } catch (error) {
      console.error("Failed to fetch clients", error);
    } finally {
      this.isLoading = false; 
    }
  }
}

export const clientStore = new ClientStore();