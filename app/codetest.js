// "use client";
// // Import the functions you need from the SDKs
// import { initializeApp } from "firebase/app";
// import { getFirestore, setDoc, doc } from "firebase/firestore";
// // Import the functions you need from the SDKs you need

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBL4HhWbrJ_NB-0poSg6KARziNgMeG1o_A",
//   authDomain: "madkammeret-b04c3.firebaseapp.com",
//   databaseURL: "https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "madkammeret-b04c3",
//   storageBucket: "madkammeret-b04c3.firebasestorage.app",
//   messagingSenderId: "615563151759",
//   appId: "1:615563151759:web:bc7a31a01d442bdb6f63fa"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app); // Ensure db is initialized before usage
// console.log("hello world?")


// // Upload drinks data
// const uploadData = async () => {
//   try {
//     console.log("Attempting to upload drinks data...");
//     await setDoc(doc(db, "drinks", "menu"), testData); // Replace `testData` with your actual drinksData
//     console.log("Drinks data successfully uploaded!");
//   } catch (error) {
//     console.error("Error uploading drinks data:", error.message);
//   }
// };

// // Call the functions

// uploadData();




//   // const drinksData = {
// //     "Drikkevarer": [
// //       {
// //         "name": "Aquador Mango Ice Tea",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb-8.png?alt=media&token=cfa386e6-1b3d-44b1-b306-b4f532a84489"
// //       },
// //       {
// //         "name": "Aquador Fersken Ice Tea",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb-7.png?alt=media&token=ce3d520f-5fb6-44d1-b2f2-33bc6e802d4e"
// //       },
// //       {
// //         "name": "Aquador Lemon Ice Tea",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/02586.png?alt=media&token=dc58dacc-a6cb-4c76-89e6-a0bbd402d956"
// //       },
// //       {
// //         "name": "Aquador Danskvand Grape/Citron",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb-2.png?alt=media&token=dc38c529-90a0-4b19-88e8-c5dc9aab2ddc"
// //       },
// //       {
// //         "name": "Aquador Danskvand Citron",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb-1.png?alt=media&token=f3aedcce-9ca4-41be-bba3-c05e346a080b"
// //       },
// //       {
// //         "name": "Aquador Danskvand Blåbær Citron",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb.png?alt=media&token=c5b9fc24-0c7e-404e-9f8f-cfa8a2f2d721"
// //       },
// //       {
// //         "name": "Aquador Lime/Citron",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb-6.png?alt=media&token=179b15a1-2946-4cd1-8f40-bcf9016393b7"
// //       },
// //       {
// //         "name": "Aquador Hyldeblomst/Limonade",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb-9.png?alt=media&token=5671ddc0-9247-42df-8a0f-32d566562292"
// //       },
// //       {
// //         "name": "Aquador Appelsin/Mango",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb-5.png?alt=media&token=02009e16-2955-4db2-9154-8bafc3aeb4ac"
// //       },
// //       {
// //         "name": "Aquador Rabarber/Jordbær",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/02584.png?alt=media&token=61dc2549-8a45-424f-aba5-7ea7d2294685"
// //       },
// //       {
// //         "name": "Aquador Blåbær/Solbær",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb-4.png?alt=media&token=a20a1082-1afa-49bc-bb64-84c38b020c96"
// //       },
// //       {
// //         "name": "Aquador Jordbær/Hindbær",
// //         "size": "0.5l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/thumb-3.png?alt=media&token=c482e545-cdac-4572-b9ac-7f7bbd442ab4"
// //       },
// //       {
// //         "name": "Juiceoganic Rabarber",
// //         "size": "0.5l",
// //         "price": 18,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/juicorganic-okologisk-rabarberdrik-50-cl-1.webp?alt=media&token=2541eb34-1555-4a89-b1aa-40c651a3fa3a"
// //       },
// //       {
// //         "name": "Juiceoganic Hyldeblomst",
// //         "size": "0.5l",
// //         "price": 18,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/juicorganic-okologisk-hyldeblomstdrik-50-cl-1.webp?alt=media&token=7a5dcc59-9b6c-4a14-8252-00d13e452457"
// //       },
// //       {
// //         "name": "Juiceoganic Appelsin",
// //         "size": "0.5l",
// //         "price": 18,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/juicorganic-okologisk-appelsinjuice-50-cl-1.webp?alt=media&token=a2aa4511-cf9d-4c6e-8a16-21d00becc7ae"
// //       },
// //       {
// //         "name": "Rynkeby Juice",
// //         "size": "0.25l",
// //         "price": 10,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/shopping.webp?alt=media&token=efc17cb8-b901-4345-8407-8d76fd097796"
// //       },
// //       {
// //         "name": "Vand",
// //         "size": "0.5l",
// //         "price": 10,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/vandudenbrus.png?alt=media&token=983b3ea3-7ff8-4ea6-a8c7-0b12c2a98bbd"
// //       },
// //       {
// //         "name": "mySmootie Hindbær",
// //         "size": "0.25l",
// //         "price": 18,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/201278_0_20240705_101730.png?alt=media&token=471abccd-4600-4007-aeaa-edb8c374114c"
// //       },
// //       {
// //         "name": "mySmootie Mango",
// //         "size": "0.25l",
// //         "price": 18,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/201280_0_20240705_101732.png?alt=media&token=19c014b9-2aea-410a-b169-6b53aa978695"
// //       },
// //       {
// //         "name": "mySmootie Jordbær",
// //         "size": "0.25l",
// //         "price": 18,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/201279_0_20240705_101731.png?alt=media&token=9a85488d-3725-44ad-9ce2-c3ce1b1806f8"
// //       },
// //       {
// //         "name": "TWIST:D Jordbær/Lime",
// //         "size": "0.25l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/twist%20jordb%C3%A6r.png?alt=media&token=7d5f744a-9ccb-48a5-91a6-8db2db35628d"
// //       },
// //       {
// //         "name": "TWIST:D Appelsin/Citron",
// //         "size": "0.25l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/twistappelsin.png?alt=media&token=f828d999-865b-4105-8685-9bda34909d30"
// //       },
// //       {
// //         "name": "TWIST:D Æble/Hyldeblomst",
// //         "size": "0.25l",
// //         "price": 16,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/twist%C3%A6ble.png?alt=media&token=3f12e1cb-6382-4ca9-ad7c-9b85b8459e90"
// //       },
// //       {
// //         "name": "TWIST:D SHOT Gurkemaje",
// //         "size": "60ml",
// //         "price": 10,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/6_1080x.png.webp?alt=media&token=882d5b1c-c621-456c-a115-ddd73da25282"
// //       },
// //       {
// //         "name": "TWIST:D SHOT Granatæble",
// //         "size": "60ml",
// //         "price": 10,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/4_f4346769-2c5f-497e-ae47-016cdad84259_750x.png.webp?alt=media&token=1ae2b8b7-6d2c-4023-994e-894ba5427422"
// //       },
// //       {
// //         "name": "TWIST:D SHOT Ingefær/Æble",
// //         "size": "60ml",
// //         "price": 10,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/5_1080x.png.webp?alt=media&token=073e51ee-bd32-4ef9-9db7-569c3b25722e"
// //       },
// //       {
// //         "name": "Kaffe",
// //         "size": "varm",
// //         "price": 12,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/pngimg.com%20-%20mug_coffee_PNG16835.png?alt=media&token=43dc1d9d-9cef-4b80-9299-5ee8aaaf9b1d"
// //       },
// //       {
// //         "name": "Varm Kakao",
// //         "size": "varm",
// //         "price": 12,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/22-221916_chocolate-cup-png-transparent-picture-of-coffee-png.jpg?alt=media&token=eab2860f-d0ce-489d-95bc-8e1da07b2f92"
// //       },
// //       {
// //         "name": "Te",
// //         "size": "varm",
// //         "price": 10,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/png-clipart-ginseng-tea-white-tea-green-tea-cup-tea-food-tea.png?alt=media&token=a326ac06-d4ca-4358-a7a1-001a2244f940"
// //       },      {
// //         "name": "Vand med brus",
// //         "size": "0.5l",
// //         "price": 10,
// //         "image": "https://firebasestorage.googleapis.com/v0/b/madkammeret-b04c3.firebasestorage.app/o/vandmedbrus.png?alt=media&token=f989618b-bd75-4bf5-922f-d6e0edc7f5e7"
// //       }
// //     ]
// //   }
  