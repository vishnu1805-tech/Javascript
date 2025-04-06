var arr_img = [
    "https://i.pinimg.com/236x/4e/89/6c/4e896cd618660e9196f1c80134909aec.jpg",
    "https://i.pinimg.com/236x/2e/b8/39/2eb83930adf04dd8afbbeefed3c1dee0.jpg",
    "https://i.pinimg.com/236x/31/63/71/3163718fd899790c5756e358fd41691e.jpg",
    "https://i.pinimg.com/236x/12/0b/72/120b72e5ca14335fa1effa7e187f4eb6.jpg",
    "https://i.pinimg.com/236x/cd/06/43/cd06438dada291801f24b94d696f1218.jpg",
    "https://i.pinimg.com/236x/9d/d0/fd/9dd0fd24d43f5c91fdcbe4bf27c526ac.jpg",
    "https://i.pinimg.com/236x/17/1b/8f/171b8f1a377b14ed3131814c256a8831.jpg",
 ];
 var i = 0;
 function changeImage() {
    document.getElementById("sliderImage").src = arr_img[i];
    i++;
    if (i == arr_img.length) {
       i = 0;
    }
    var red_color = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgba(${red_color},${Math.floor(
    Math.random() * 256
   )},${Math.floor(Math.random() * 256)},0.5)`;}