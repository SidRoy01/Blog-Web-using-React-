import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(config.appwriteUrl).setProject(
      config.appwriteProjectid
    );
    this.account = new Account(this.Client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //add login methode
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
