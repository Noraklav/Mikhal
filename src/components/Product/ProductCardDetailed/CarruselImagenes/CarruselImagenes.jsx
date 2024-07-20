import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const CarruselImagenes = ({images}) => {

  const arrows = document.querySelectorAll('.image-gallery-svg')
  arrows.forEach( (e) => {
      e.setAttribute('stroke-width', 2)
      e.removeAttribute('stroke-linecap')
    }
  )

  return (
    <ImageGallery items={images} 
      slideDuration={500}
      showBullets={true}
      showFullscreenButton={false}
      showPlayButton={false}
      useBrowserFullscreen={false}
      thumbnailLoading={true}
      useTranslate3D={false}
    />
  )
}
