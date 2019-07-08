const imagesPath = 'http://localhost:4200/assets/img/';

const images = [
    'batman.png',
    'robbin.png',
    'incrediblew.png',
    'arrow.png',
    'flash.png',
    'america.png',
    'spider.png',
    'wonderwoman.png',
    'cat.png'
  ];

export class ImageService {

 private  selectedImage = imagesPath + 'default.png';

   public setSelectedImage(image: string) {
        this.selectedImage = imagesPath + image;
    }

   public getSelectedImage() {
        return this.selectedImage;
    }

    public getImagePath() {
        return imagesPath;
    }

    public getImages() {
        return images;
    }
}