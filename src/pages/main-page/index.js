import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Col, Row } from "react-bootstrap";
import CategoryBox from "./components/category-box";
import { useSelector } from "react-redux";


export default function Mainpage() {

    const categoriesState = useSelector(state => state.categoriesState);

    if (!categoriesState.initialized) {
        return (
            <main>
                <Row className={" mb-3 text-center"}>
                    <h1>Loading...</h1>
                </Row>
            </main>
        );
    }


    return (
        <main>
            <Row className={"mb-3 text-center"}>
                <Col>
                    <Splide
                        options={{
                            rewind: true,
                            gap: '1rem',
                            height: "500px",

                        }}
                        aria-label="My Favorite Images"
                    >
                        <SplideSlide>
                            <img src="https://adoptez1artisan.com/images/bg/bg2.jpg" alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://adoptez1artisan.com/images/bg/bg3.jpg" alt="Image 2" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://adoptez1artisan.com/images/bg/bg1.jpg" alt="Image 3" />
                        </SplideSlide>
                    </Splide>
                </Col>
            </Row>


            <Row className={"row-cols-1 row-cols-md-3 mb-3 text-center"}>
                {
                    categoriesState.categories.map((item, index) => (
                        <Col key={index}>
                            <CategoryBox category={item} />
                        </Col>
                    ))
                }
            </Row>

        </main >
    )
}