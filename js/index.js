const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");
const tilDateInput = document.querySelector("#til-date");
const tilTitleInput = document.querySelector("#til-title");
const tilContentInput = document.querySelector("#til-content");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const dateValue = tilDateInput.value.trim();
  const titleValue = tilTitleInput.value.trim();
  const contentValue = tilContentInput.value.trim();

  if (!dateValue || !titleValue || !contentValue) {
    alert("날짜, 제목, 내용을 모두 입력해주세요.");
    return;
  }

  const tilItem = document.createElement("article");
  tilItem.classList.add("til-item");

  const timeElement = document.createElement("time");
  timeElement.setAttribute("datetime", dateValue);
  timeElement.textContent = dateValue;

  const titleElement = document.createElement("h3");
  titleElement.textContent = titleValue;

  const contentElement = document.createElement("p");
  contentElement.textContent = contentValue;

  tilItem.append(timeElement, titleElement, contentElement);
  tilList.prepend(tilItem);

  tilForm.reset();
});

const galleryItems = document.querySelectorAll(".gallery-item");
const galleryModal = document.querySelector("#gallery-modal");
const galleryModalImage = document.querySelector("#gallery-modal-image");
const galleryCloseButton = document.querySelector("#gallery-close-button");

galleryItems.forEach(function (item) {
  item.addEventListener("click", function () {
    galleryModalImage.src = item.src;
    galleryModalImage.alt = item.alt;
    galleryModal.classList.add("show");
  });
});

galleryCloseButton.addEventListener("click", function () {
  galleryModal.classList.remove("show");
});

galleryModal.addEventListener("click", function (event) {
  if (event.target === galleryModal) {
    galleryModal.classList.remove("show");
  }
});