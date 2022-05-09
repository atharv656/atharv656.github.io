const instance = new GLSlideshow(
      ['IMG_2648.jpg', 'IMG_2240.jpg', 'pfp.jpg'],
      {
        canvas: document.getElementById( 'slideshow-container' )
        // more options here
        // width and height of the slideshow
        width: 1024,
        height: 576,
        // duration time in ms
        duration: 1000,
        // interval time in ms
        interval: 5000,
        // aspect ratio
        imageAspect: null,
        // 'crossFade'
        // 'crossZoom'
        // 'directionalWipe'
        // 'wind'
        // 'ripple'
        // 'pageCurl'
        effect: 'crossZoom'
      }
);
