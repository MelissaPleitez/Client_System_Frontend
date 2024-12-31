import { makeAutoObservable } from "mobx";
import Swal from "sweetalert2"; 


class UserStore {
    email: string = "";
    password: string = "";
    error: string = "";
    isAuthenticated: boolean = false;
  
    constructor() {
        makeAutoObservable(this);
    }
  
    setEmail(email: string) {
      this.email = email;
    }
  
    setPassword(password: string) {
      this.password = password;
    }
  
    setError(error: string) {
      this.error = error;
    }
  
    setAuthenticated(auth: boolean) {
      this.isAuthenticated = auth;
    }

    async login() {
      try {
        const response = await fetch("https://localhost:5001/api/Auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.email, password: this.password }),
        });
  
        if (response.ok) {
          this.setAuthenticated(true);
          this.setError("");
        } else {
          this.setError("Invalid credentials. Please try again.");
          Swal.fire({
            icon: 'error',
            title: 'Authentication Failed',
            text: 'Invalid credentials. Please check your email and password.',
          })
        }
      } catch (error) {
        this.setError("An error occurred. Please try again.");
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred. Please try again later.',
          });
      }
    }
  }
  
  export const userStore = new UserStore();