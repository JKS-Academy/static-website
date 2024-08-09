var submitted = false;
var subscribed = false;
const contactUs = () => {
  if (submitted) {
    const ok = Swal.fire({
      title: "Email Sent Successfully",
      text: "We will get back to you through email and mobile soon, Thank You.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location = "/";
    });
  }
};

const register = () => {
  if (submitted) {
    const ok = Swal.fire({
      title: "Email Sent Successfully",
      text: "We will get back to you through email and mobile soon, Thank You.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location = "/register";
    });
  }
};

const newsLetter = () => {
  if (subscribed) {
    const ok = Swal.fire({
      title: "Subscribed Successfully",
      text: "Thank you for subscribing to our newsletter.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location = "/";
    });
  }
};

let toastOpen = true;

function toast() {
  if (toastOpen) {
    closeToast();
  } else {
    showToast();
  }
}

function closeToast() {
  let wrapper = document.getElementById("wrapper");
  wrapper.style.transform = "translateX(-32rem)";
  let closeButton = document.getElementById("close");
  closeButton.style.transform = "rotate(180deg)";
  toastOpen = false;
}
function showToast() {
  let toast = document.getElementById("toast");
  let wrapper = document.getElementById("wrapper");
  toast.style.transform = "translateX(0)";
  wrapper.style.transform = "translateX(0)";
  let closeButton = document.getElementById("close");
  closeButton.style.transform = "rotate(0)";
  toastOpen = true;
}

document.addEventListener("DOMContentLoaded", () => {
  showToast();
});
