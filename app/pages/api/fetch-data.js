// pages/api/fetch-data.js
import { get, ref } from "firebase/database";
import { database } from "../../firebaseConfig";

export default async function handler(req, res) {
  try {
    const dbRef = ref(database, "/menu/drikkevarer"); // Replace with your data path
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
      res.status(200).json(snapshot.val());
    } else {
      res.status(404).json({ message: "No data found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
