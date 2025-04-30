const firebaseConfig = {
  apiKey: "AIzaSyCC_eNddby6PXo0WRdIT5Lcv3zaXgNifc8",
  authDomain: "order-plus-98cb8.firebaseapp.com",
  projectId: "order-plus-98cb8",
  storageBucket: "order-plus-98cb8.appspot.com",
  messagingSenderId: "309110990760",
  appId: "1:309110990760:web:7894936e0c5358d4cddf9d"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// تأكد من تسجيل الدخول
auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    loadOrderStats();
  }
});

function loadOrderStats() {
  db.collection("orders").onSnapshot(snapshot => {
    let newCount = 0, doneCount = 0, cancelledCount = 0;
    snapshot.forEach(doc => {
      const status = doc.data().status;
      if (status === "جديد") newCount++;
      else if (status === "تم") doneCount++;
      else if (status === "ملغي") cancelledCount++;
    });
    document.getElementById("new-count").innerText = newCount;
    document.getElementById("done-count").innerText = doneCount;
    document.getElementById("cancelled-count").innerText = cancelledCount;
  });
}
