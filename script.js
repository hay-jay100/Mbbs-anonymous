
import { db } from './firebase-config.js';
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const path = window.location.pathname.split('/');
const username = path[1] === "view" ? path[2] : path[1];

if (document.title.includes("Send")) {
  document.getElementById("usernameDisplay").innerText = username;

  window.sendMessage = async function () {
    const message = document.getElementById("messageBox").value;
    if (message.trim()) {
      await addDoc(collection(db, "messages", username, "inbox"), {
        content: message,
        timestamp: new Date()
      });
      alert("✅ Message sent anonymously!");
      document.getElementById("messageBox").value = "";
    }
  };
}

if (document.title.includes("Messages")) {
  document.getElementById("usernameView").innerText = username;
  const messagesRef = collection(db, "messages", username, "inbox");
  const snap = await getDocs(messagesRef);
  const list = document.getElementById("messageList");
  snap.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = doc.data().content;
    list.appendChild(li);
  });
}
