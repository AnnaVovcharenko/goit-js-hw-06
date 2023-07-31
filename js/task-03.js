const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const LiGallery = document.querySelector('.gallery')
function galleryImages(arr) {
  const gallery = arr.map(({url, alt}) => `<li class="li_item">
  <img class="img_item " src="${url}" alt="${alt}" width="300">
  </li>`).join('')
  console.log(gallery);


  LiGallery.insertAdjacentHTML('beforeend', gallery)
}

galleryImages(images)


