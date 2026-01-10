const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImage");
const deleteImageBtn = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Agregar imagen
function addImage() {
    const url = imageUrlInput.value.trim();

    if (url === "") {
        alert("Por favor ingrese una URL válida");
        return;
    }

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => selectImage(img));

    gallery.appendChild(img);
    imageUrlInput.value = "";
}

// Seleccionar imagen
function selectImage(img) {
    if (selectedImage) {
        selectedImage.classList.remove("selected");
    }

    selectedImage = img;
    img.classList.add("selected");
}

// Eliminar imagen seleccionada
function deleteImage() {
    if (!selectedImage) {
        alert("No hay ninguna imagen seleccionada");
        return;
    }

    selectedImage.remove();
    selectedImage = null;
}

// Eventos
addImageBtn.addEventListener("click", addImage);

deleteImageBtn.addEventListener("click", deleteImage);

// Evento de teclado (Enter para agregar imagen)
imageUrlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addImage();
    }
});

