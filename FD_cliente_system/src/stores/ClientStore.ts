import { makeAutoObservable, runInAction } from "mobx";

class ClientStore {
  clients: Array<{ name: string; nationality: string; occupation: string; email: string }> = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchClients() {
    try {
      const response = await fetch("https://localhost:5001/api/clients");
      const data = await response.json();
      
      runInAction(()=>{
        this.clients = data;
      });
    } catch (error) {
      console.error("Failed to fetch clients", error);
    }
  }
}

export const clientStore = new ClientStore();