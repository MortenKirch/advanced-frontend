import { getDatabase, ref, get } from "firebase/database";

const fetchUserRole = async (uid) => {
  try {
    const db = getDatabase();
    const userRef = ref(db, `users/${uid}/role/`);
    console.log(db)
    console.log(userRef)
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.error(`Role not found for user with UID: ${uid}`);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
};

export default fetchUserRole;
