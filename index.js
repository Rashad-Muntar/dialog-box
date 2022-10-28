const ModalGenerator = (message) => {
  let modalContainer = document.createElement("div");
  modalContainer.classList.add("modal");

  let modalContent = document.createElement("div");
  modalContent.classList.add("content");

  let modalMsg = document.createElement("div");
  modalMsg.classList.add("msg");

  let msg = document.createElement("p");
  msg.setAttribute("id", "msg");
  msg.innerText = message;

  let btnWraps = document.createElement("div");
  btnWraps.classList.add("footer");

  let yes = document.createElement("button");
  yes.setAttribute("id", "yes");
  yes.innerText = "Yes";

  let no = document.createElement("button");
  no.setAttribute("id", "no");
  no.innerText = "Cancel";

  modalContainer.appendChild(modalContent);
  modalContent.appendChild(modalMsg);
  modalMsg.appendChild(msg);
  modalContent.appendChild(btnWraps);
  btnWraps.appendChild(yes);

  btnWraps.appendChild(no);

  document.body.appendChild(modalContainer);
  modalContainer.style.display = "block";
};

let modal = document.getElementById("modal");
var btn = document.getElementById("openModal");

btn.onclick = function () {
  ModalGenerator("testing my message");
};
