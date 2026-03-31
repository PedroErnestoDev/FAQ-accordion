const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach(item => {
    const header = item.querySelector('.container-title-faq')
    const img = item.querySelector(".toggle-icon")

    header.addEventListener("click", () => {
        item.classList.toggle("active")

        if(item.classList.contains("active")){
            img.src = "assets/images/icon-minus.svg"
        } else {
            img.src = "assets/images/icon-plus.svg"
        }
    })
})