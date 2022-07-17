const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message });
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

function handleMessageNotif(data) {
  const { message } = data;
  console.log(`Somebody said ${message}`);
}

socket.on("messageNotif", handleMessageNotif);
