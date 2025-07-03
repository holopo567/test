document.addEventListener('DOMContentLoaded', function () {
    let carousel = document.getElementById('carousel-inner');
    const imgs = [
        "imgs/apartement/IMG-20250703-WA0001.jpg",
        "imgs/apartement/IMG-20250703-WA0002.jpg",
        "imgs/apartement/IMG-20250703-WA0003.jpg",
        "imgs/apartement/IMG-20250703-WA0004.jpg",
        "imgs/apartement/IMG-20250703-WA0005.jpg",
        "imgs/apartement/IMG-20250703-WA0006.jpg",
        "imgs/apartement/IMG-20250703-WA0007.jpg",
        "imgs/apartement/IMG-20250703-WA0008.jpg",
        "imgs/apartement/IMG-20250703-WA0009.jpg",
        "imgs/apartement/IMG-20250703-WA0010.jpg",
        "imgs/apartement/IMG-20250703-WA0011.jpg",
        "imgs/apartement/IMG-20250703-WA0012.jpg",
        "imgs/apartement/IMG-20250703-WA0013.jpg",
        "imgs/apartement/IMG-20250703-WA0014.jpg",
        "imgs/apartement/IMG-20250703-WA0015.jpg",
        "imgs/apartement/IMG-20250703-WA0016.jpg",
        "imgs/apartement/IMG-20250703-WA0017.jpg",
        "imgs/apartement/IMG-20250703-WA0018.jpg",
        "imgs/apartement/IMG-20250703-WA0019.jpg",
        "imgs/apartement/IMG-20250703-WA0020.jpg",
        "imgs/apartement/IMG-20250703-WA0021.jpg",
        "imgs/apartement/IMG-20250703-WA0022.jpg",
        "imgs/apartement/IMG-20250703-WA0023.jpg",
        "imgs/apartement/IMG-20250703-WA0024.jpg",
        "imgs/apartement/IMG-20250703-WA0025.jpg",
        "imgs/apartement/IMG-20250703-WA0026.jpg",
      ];
      
    
    
    imgs.forEach((i) => {
        let div = document.createElement('div');
        div.className = 'carousel-item '
        if (i == 'imgs/apartement/IMG-20250703-WA0014.jpg') {
             div.className = 'carousel-item active '
        }
        
        let img = document.createElement('img');
        img.src = i;
        img.className = 'd-block w-100';
        div.append(img);
        carousel.append(div)

    })


})