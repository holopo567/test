document.addEventListener('DOMContentLoaded', function () {
    let carousel = document.getElementById('carousel-inner');
    imgs = [
        "imgs/villa/villafront.jpg",
        "imgs/villa/WhatsApp Image 2025-05-27 à 16.11.31_2f1639ee.jpg",
        "imgs/villa/WhatsApp Image 2025-05-27 à 16.11.31_9c41172f.jpg",
        "imgs/villa/WhatsApp Image 2025-05-27 à 16.11.31_11d456e1.jpg",
        "imgs/villa/WhatsApp Image 2025-05-27 à 16.11.31_127d0649.jpg",
        "imgs/villa/WhatsApp Image 2025-05-27 à 16.11.31_9226f106.jpg",
        "imgs/villa/WhatsApp Image 2025-05-27 à 16.11.31_071490e4.jpg",
        "imgs/villa/WhatsApp Image 2025-05-27 à 16.11.31_cf7efe79.jpg",
        "imgs/villa/WhatsApp Image 2025-05-27 à 16.11.31_d491f234.jpg",
        "imgs/villa/WhatsApp Image 2025-05-27 à 16.11.31_ea6c30f8.jpg"
    ];
    
    
    imgs.forEach((i) => {
        let div = document.createElement('div');
        div.className = 'carousel-item '
        if (i == 'imgs/villa/villafront.jpg') {
             div.className = 'carousel-item active '
        }
        
        let img = document.createElement('img');
        img.src = i;
        img.className = 'd-block w-100';
        div.append(img);
        carousel.append(div)

    })


})