import { flavorlists } from "../constants"

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <div className="flavors">
        {
          flavorlists.map((flavor) => ( 
          <div className="relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none" key={flavor.name}>
              <img src={`/images/${flavor.color}-bg.svg`} alt="flavor-bg" className="absolute bottom-0" />
              <img src={`/images/${flavor.color}-drink.webp`} alt="flavor-elements" className="drinks" />
              <img className="elements" src={`/images/${flavor.color}-elements.webp`} alt="floating-img" />
              <h1>{flavor.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Slider