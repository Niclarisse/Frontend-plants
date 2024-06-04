import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/images/pexels-ti-u-b-o-tr-ng-41366219-8030999.jpg';
import ExampleCarouselImage2 from '../assets/images/pexels-captureblinks-628262.jpg';
import ExampleCarouselImage3 from '../assets/images/pexels-fox-58267-998522.jpg';

function UnControlebleSlideShow() {
  return (
    <Carousel interval={7000}>
      <Carousel.Item >
      <div className="bg-white block md:flex justify-between px-10 pt-10 ">
        <div className="w-full md:w-1/2 pb-5">
          <div className="w-[25rem] h-[20rem] m-auto">
            <img src={ExampleCarouselImage} alt="" className="w-full h-full rounded-md" />
          </div>
        </div>
        <div className="w-full md:w-2/3 pt-80 md:pt-10">
            <h1 className="text-4xl font-medium leading-[4rem] text-[#363636] w-full lg:w-1/2 ">
              Plants for healthy.
            </h1>

            <p className="text-lg font-medium leading-[1.5rem] text-[#363636] py-8 w-2/3">
              Explore nature's pharmacy with us, where each leaf, flower, and
              root holds the secret to holistic well-being and vibrant health.
            </p>
          </div>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white block md:flex justify-between px-10 pt-10 ">
          <div className="w-full md:w-1/2 pb-5">
            <div className="w-[25rem] h-[20rem] m-auto">
              <img
                src={ExampleCarouselImage2}
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 pt-80 md:pt-10">
            <h1 className="text-4xl font-medium leading-[4rem] text-[#363636] w-full lg:w-1/2 ">
              Plants for healthy.
            </h1>

            <p className="text-lg font-medium leading-[1.5rem] text-[#363636] py-8 w-2/3">
              Your health is too important to leave to chance. Take control, get
              informed, and ensure that your journey with natural remedies is a
              safe one. Explore the hidden truths about medicinal plants today!.
            </p>
          </div>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white block md:flex justify-between px-10 pt-10 ">
          <div className="w-full md:w-1/2 pb-5">
            <div className="w-[25rem] h-[20rem] m-auto">
              <img
                src={ExampleCarouselImage3}
                alt=""
                className="w-full h-full rounded-md"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 pt-80 md:pt-10">
            <h1 className="text-4xl font-medium leading-[4rem] text-[#363636] w-full lg:w-1/2 ">
              Plants for healthy.
            </h1>

            <p className="text-lg font-medium leading-[1.5rem] text-[#363636] py-8 w-2/3">
              Explore nature's pharmacy with us, where each leaf, flower, and
              root holds the secret to holistic well-being and vibrant health.
            </p>
          </div>
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UnControlebleSlideShow;
