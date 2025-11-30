const imgs = [
    "img/img_1.webp",
    "img/img_2.webp",
    "img/img_3.webp",
    "img/img_4.webp",
    "img/img_5.webp",
    "img/img_6.webp",
    "img/img_7.webp",
    "img/img_8.webp",
    "img/img_9.webp",
    "img/img_10.webp",
    "img/img_11.webp",
    "img/img_12.webp",
    "img/img_13.webp",
    "img/img_14.webp",
    "img/img_15.webp",
    "img/img_16.webp",
    "img/img_17.webp",
    "img/img_18.webp",
    "img/img_19.webp",
    "img/img_20.webp",
    "img/img_21.webp",
    "img/img_22.webp",
    "img/img_23.webp",
    "img/img_24.webp"
];

const container = document.getElementById("container");

function renderImages() {
    let getImgs = ""
    for (let i = 0; i < imgs.length; i++) {
        getImgs += `<div class="picture animated_div">
        <img class="resp_img image" src="./${imgs[i]}" alt="Mexiko Reise">
        </div>`
    };
    document.getElementById('pic_div').innerHTML = getImgs;
};

renderImages();


const images = [...document.querySelectorAll('.image')];

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close_btn');
// const imageName = document.querySelector('.image_name');
const largeImage = document.querySelector('.large_image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');

let index = 0;


images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
});

const updateImage = (i) => {
    let path = `img/img_${i+1}.webp`;
    largeImage.src = path;
    // imageName.innerHTML = path;
    imageIndex.innerHTML = `${i+1}/${images.length}`;
    index = i;
};

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
});

leftArrow.addEventListener('click', () => {
    if(index > 0) {
        updateImage(index - 1);
    }
});

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1) {
        updateImage(index + 1);
    }
});


const dialogRef = document.getElementById('my_dialog');

function openDialog() {
    dialogRef.showModal();
    dialogRef.classList.add('active');
    document.body.classList.add("blurred");
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove('active');
    document.body.classList.remove("blurred");
}


document.addEventListener("keydown", (e) => {

    // Dialog muss geöffnet sein
    if (!dialogRef.classList.contains('active')) return;

    switch(e.key) {

        case "ArrowLeft":
            if (index > 0) {
                updateImage(index - 1);
            }
            break;

        case "ArrowRight":
            if (index < images.length - 1) {
                updateImage(index + 1);
            }
            break;

        case "Escape":
            closeDialog();
            break;
    }
});
