import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function CategoryBox(props) {

    console.log("propdan gelen", props);
    return (
        <Card className={"mb-4 rounded-3 shadow-sm border-primary"}>
            <Card.Header className={"py-3 text-bg-primary border-primary"}>
                <h4 class="my-0 fw-normal">{props.category.name}</h4>
            </Card.Header>

            <Card.Body>
                <img style={{ width: "100%", margin: "0px 0px 20px 0px", aspectRatio: "1.3" }} src={props.category.image} />
            </Card.Body>

            <Link to={"categories/" + props.category.slug} className={"w-100 btn btn-primary btn-lg"}>Detail</Link>
        </Card>
    )
}