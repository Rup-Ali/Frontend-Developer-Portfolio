const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const imgBox = document.getElementById("imgBox");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const themeBtn = document.getElementById("themeBtn");

generateBtn.addEventListener("click", () => {
    if(qrText.value.trim() !== ""){
        qrImage.src =
          "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
          + encodeURIComponent(qrText.value);

        imgBox.classList.add("show");
    } else {
        alert("Please enter text or URL");
    }
});

// Dark / Light mode
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});