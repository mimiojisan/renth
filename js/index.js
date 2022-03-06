/*=================================================*/
/*宣言*/
/*=================================================*/

const button = document.getElementById("sp-menu");
const header = document.getElementById("header-right");
const mask = document.getElementById("mask");
const navLink = document.querySelectorAll("#nav li a");


// ボタンが押されたらクラスを追加する
button.addEventListener('click', function (){
    if ( header.classList.contains("sp-header") == true ) {
        header.classList.remove("sp-header");
    } else {
        header.classList.add("sp-header");
    };
 });

//  maskの部分をクリックしたらメニューを閉じる
mask.addEventListener('click', function() {
    header.classList.remove("sp-header");
})

// リンクをクリックしたらメニューを閉じる
navLink.forEach(function(link){
    link.addEventListener('click', function() {
        header.classList.remove("sp-header");
    });
});