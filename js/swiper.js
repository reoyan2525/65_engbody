const swiper = new Swiper(".swiper", {
    loop: true, // ループ有効
    // ページネーションが必要なら追加
    pagination: {
        el: ".swiper-pagination"
    },
    // ナビボタンが必要なら追加
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});