// Appwrite project id:
const APPWRITE_PROJECT_ID = "68503d23003b8a9b4d2e";
const APPWRITE_PROJECT_URL = "shelfie.stevenmodimo.com";

import { Client, Account, ID, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setProject(APPWRITE_PROJECT_ID)
  .setPlatform(APPWRITE_PROJECT_URL);

export const account = new Account(client);
export const avatars = new Avatars(client);
