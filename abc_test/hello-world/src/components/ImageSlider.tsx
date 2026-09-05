import  { useState } from "react"
import { Button } from "./Button";
// import { useState } from "react"
 const imagesData = [
    "https://www.zooplus.co.uk/magazine/wp-content/uploads/2022/04/black-golden-retriever-with-a-blue-dummy.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrFQPMwQkwJQ4vwHB0eBcrEAU8K6c_mSe5NAcMkOjo8pqwTqjT88Op22M&s=10",
    "https://www.sportingsaint.co.uk/app/uploads/2025/09/Sporting-Saint-full-res-ARC-Media-39-900x900.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSraOjOf5lcpi0MgO8_v4I22VvJ2v85aK9RrSYjDXxfQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-OtS5fKeNvDnf3nFFsQjl5el72IecDvhwBkxKktNfg&s"
    ]
const ImageSlider = () => {
   
   

    const [imageIndex, setImageIndex] = useState(0);

    const nextClickHandler = () => {
        setImageIndex((imageIndex+1) % imagesData.length)
    }

    const prevClickHandler = () => {
        setImageIndex(
            (!imageIndex ? imagesData.length - 1 : imageIndex - 1)
        )
    }
 
    return (
        <div className="imgSection">
            <button onClick={prevClickHandler}>Prev</button>

            <img style={{'width': '500px', 'height': '300px'}} src={imagesData[imageIndex]}></img>
            <button onClick={nextClickHandler}>Next</button>

                  <Button position="Bottom Clicked"/>
        </div>
    )

}
export default ImageSlider



