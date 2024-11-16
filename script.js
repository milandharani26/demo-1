

const createCaseBtn = document.getElementsByClassName("create-case-btn")
const closeModelBtn = document.getElementsByClassName("form-header-close")
const overlayModel = document.querySelector("#overlay-model");
const overlayModel2 = document.querySelector("#overlay-model-2");
let isOverlayModelOpen = false;
let isOverlayModel2Open = false;

document.querySelector('.create-case-btn').addEventListener("click", () => {
    console.log("hello")
    if (isOverlayModelOpen) {
        overlayModel.classList.add("display-none")
        isOverlayModelOpen = false
    } else {
        overlayModel.classList.remove("display-none")
        isOverlayModelOpen = true
    }
});


document.querySelector('.form-header-close').addEventListener("click", () => {
    overlayModel.classList.add("display-none") // Show the overlay
    isOverlayModelOpen = false;
});


//model 2

document.querySelector('.for-model-2').addEventListener("click", () => {
    console.log("hello")
    if (isOverlayModel2Open) {
        overlayModel2.classList.add("display-none")
        isOverlayModel2Open = false
    } else {
        overlayModel2.classList.remove("display-none")
        isOverlayModel2Open = true
    }
});


document.querySelector('.close-btn-model-2').addEventListener("click", () => {
    overlayModel2.classList.add("display-none") // Show the overlay
    isOverlayModel2Open = false;
});


// document.querySelector('#file-input').addEventListener('change', function () {
//     // Get the selected file name
//     var fileName = this.files[0] ? this.files[0].name : 'No file selected';

//     // Display the selected file name below the button
//     document.querySelector('#selected-file').textContent = 'Selected file: ' + fileName;
// });


// //handle file select and preview
// const dropZone = document.getElementById("dropZone");
// const fileInput = document.getElementById("fileInput");
// const previewContainer = document.getElementById("previewContainer");

// // Prevent default drag behaviors
// ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
//     dropZone.addEventListener(eventName, preventDefaults, false);
//     document.body.addEventListener(eventName, preventDefaults, false);
// });

// // Highlight drop zone when dragging over it
// ["dragenter", "dragover"].forEach((eventName) => {
//     dropZone.addEventListener(eventName, highlight, false);
// });

// ["dragleave", "drop"].forEach((eventName) => {
//     dropZone.addEventListener(eventName, unhighlight, false);
// });

// // Handle dropped files
// dropZone.addEventListener("drop", handleDrop, false);
// fileInput.addEventListener("change", handleFiles, false);

// function preventDefaults(e) {
//     e.preventDefault();
//     e.stopPropagation();
// }

// function highlight(e) {
//     dropZone.classList.add("dragover");
// }

// function unhighlight(e) {
//     dropZone.classList.remove("dragover");
// }

// function handleDrop(e) {
//     const dt = e.dataTransfer;
//     const files = dt.files;
//     handleFiles({ target: { files } });
// }

// function handleFiles(e) {
//     const files = [...e.target.files];
//     files.forEach(previewFile);
// }

// function previewFile(file) {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onloadend = function () {
//         const preview = document.createElement("div");
//         preview.className = "preview-item";

//         const removeBtn = document.createElement("button");
//         removeBtn.className = "remove-btn";
//         removeBtn.innerHTML = "×";
//         removeBtn.onclick = function () {
//             preview.remove();
//         };

//         const fileInfo = document.createElement("div");
//         fileInfo.className = "file-info";

//         const fileName = document.createElement("div");
//         fileName.className = "file-name";
//         fileName.textContent = file.name;

//         const fileSize = document.createElement("div");
//         fileSize.className = "file-size";
//         fileSize.textContent = formatFileSize(file.size);

//         fileInfo.appendChild(fileName);
//         fileInfo.appendChild(fileSize);

//         if (file.type.startsWith("image/")) {
//             const img = document.createElement("img");
//             img.src = reader.result;
//             preview.appendChild(img);
//         } else {
//             const fileIcon = document.createElement("div");
//             fileIcon.style.height = "150px";
//             fileIcon.style.background = "#f0f0f0";
//             fileIcon.style.borderRadius = "4px";
//             fileIcon.style.display = "flex";
//             fileIcon.style.alignItems = "center";
//             fileIcon.style.justifyContent = "center";
//             fileIcon.textContent = getFileExtension(file.name).toUpperCase();
//             preview.appendChild(fileIcon);
//         }

//         preview.appendChild(removeBtn);
//         preview.appendChild(fileInfo);
//         previewContainer.appendChild(preview);
//     };
// }

// function formatFileSize(bytes) {
//     if (bytes === 0) return "0 Bytes";
//     const k = 1024;
//     const sizes = ["Bytes", "KB", "MB", "GB"];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
// }

// function getFileExtension(filename) {
//     return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
// }
