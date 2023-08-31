import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UseApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import ServiceBox from "./components/service-box";


export default function CategoryDetails() {
    const [categoryDetails, setCategoryDetails] = useState({});
    const [initialized, setInitialized] = useState(false);

    const params = useParams();
    const api = UseApi();

    useEffect(() => {
        api.get("public/categories/getBySlug/" + params.slug)
            .then((res) => {
                setCategoryDetails(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setInitialized(true)
            })
    }, [params.slug])



    if (!initialized) {
        return (
            <div>
                <h1>...Loading</h1>
            </div>
        )
    }

    return (
        <main>
            <Row className={"mb-3"}>
                <Col lg={12} sm={12} className=" text-center">
                    <h2> {categoryDetails.category.name}</h2>

                    <hr />
                </Col>

                {
                    categoryDetails.services.map((item, index) => {
                        return (
                            <Col key={index} lg={3} sm={4} xs={12}>
                                <ServiceBox service={item} />
                            </Col>
                        )
                    })
                }
            </Row>
        </main>
    )
}