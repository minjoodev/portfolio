$(document).ready(function(){
    // 화살표 스크롤 이동
    $('.arrow').click(function(){
        const offset = $('.sec-profile').offset(); 
        $('html, body').animate({scrollTop : offset.top}, 1000);
    });

    // 모달 팝업창
    const close = () => {
        document.querySelector(".modal").classList.add("hide");
    }
    const open = () => {
        document.querySelector(".modal").classList.remove("hide");
    }
    document.querySelector(".modal-open").addEventListener("click", open);
    document.querySelector(".modal-close").addEventListener("click", close);
    document.querySelector(".dimm").addEventListener("click", close);
});


