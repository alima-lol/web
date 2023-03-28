const modalBtn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const closeModal = () => {
    modal.classList.add("hidden");

}

modalBtn.forEach((btn)) => {
    btn.addEventListener("click",function(){

    })
    modal.classList.remove("hidden")
}

close.addEventListener("click", closeModal)