// Navbar
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// thumbnails
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const des = document.getElementById("des");

one.addEventListener("mousemove", function()
{
    des.innerHTML = "Meningkatkan pemahaman masyarakat tentang <br> bullying dengan meningkatkan pemahaman <br> masyarakat , diharapkan masyarakat dapat lebih <br> memahami masalah bullying dan mengambil <br> tindakan yang tepat untuk mencegah <br> dan mengatasinya"
});
two.addEventListener("mousemove", function()
{
    des.innerHTML = "Mendorong masyarakat untuk mengambil tindakan <br>untuk mencegah bulliying. Dengan mendorong <br>
    masyarakat untuk mengambil tindakan, diharapkan <br>
    dapat menciptakan lingkungan yang aman dan <br> nyaman bagi semua orang"
});
three.addEventListener("mousemove", function()
{
    des.innerHTML = "hello3"
});
four.addEventListener("mousemove", function()
{
    des.innerHTML = "hello4"
});