import axios from "axios";
document.addEventListener("click", async (event) => {
  /* when nav to show is hit */
  if (event.target.className === "listIcon") {
    function myFunction() {
      let nav = document.getElementById("myTopnav");
      let container = document.getElementsByClassName("container");
      let aboutMe = container[0].childNodes[1];
      if (nav.className === "topnav") {
        nav.className += " responsive";
        nav.style.height = "300px";
        nav.style.position = "fixed";
        aboutMe.style.marginTop = "300px";
      } else {
        nav.className = "topnav";
        nav.style.height = "";
        aboutMe.style.marginTop = "80px";
      }
    }
    myFunction();
  }
  /* when submit button is hit */
  if (event.target.className === "submit") {
    /* get subject and message from dom */
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    /* email regex 😉 */
    const EmailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (subject.value.match(EmailCheck)) {
      /* this logic is for give the style to give the message thank you for contacting us */
      const inputSection = document.getElementById("inputSection");
      inputSection.innerHTML = `<div>Thank you for contacting us<div>`;
      inputSection.style.fontSize="50px"
      inputSection.style.padding="5px"
      inputSection.style.color="red"
      /* api for send email to me */
      await axios.post("http://localhost:3001/api/sendMail", {
        subject: subject.value,
        message: message.value,
      });
    } else {
      alert("plz enter your valid email");
    }
  }
});
