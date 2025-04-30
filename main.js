const firebaseConfig = {
  apiKey: "AIzaSyCC_eNddby6PXo0WRdIT5Lcv3zaXgNifc8",
  authDomain: "order-plus-98cb8.firebaseapp.com",
  projectId: "order-plus-98cb8",
  storageBucket: "order-plus-98cb8.appspot.com",
  messagingSenderId: "309110990760",
  appId: "1:309110990760:web:7894936e0c5358d4cddf9d"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "login.html";
  }
});
