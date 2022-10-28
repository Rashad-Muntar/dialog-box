let modalContainer = document.createElement("div");
let returnMsg = document.getElementById("rtMsg");

const ModalGenerator = (message) => {
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
  yes.addEventListener("click" ) = 

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

let btn = document.getElementById("openModal");
let modal = document.getElementsByClassName("modal");

btn.onclick = function () {
  ModalGenerator("Are yous sure you want continues");
};

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "yes") {
    modalContainer.style.display = "none";
    returnMsg.innerText = "You just clicked Yes";
  }
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "no") {
    modalContainer.style.display = "none";
    returnMsg.innerText = "You just clicked Cancel";
  }
});
