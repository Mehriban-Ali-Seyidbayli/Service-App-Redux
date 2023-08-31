import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function ServiceBox(props) {

    return (
        <Card className={"mb-4 rounded-3 shadow-sm border-primary"}>
            <Card.Header className={"py-3 text-bg-primary border-primary"}>
                <h4 class="my-0 fw-normal">{props.service.name}</h4>
            </Card.Header>

            <Card.Body>
                <img
                    style={{ width: "100%", margin: "0px 0px 20px 0px", aspectRatio: "1.3" }}
                    src={props.service.image}
                    onError={e => e.target.src = 'https://api.adoptez1artisan.com/assets/images/no-image.png'}
                />
            </Card.Body>

            <Link to={"/service/" + props.service.slug} className={"w-100 btn btn-primary btn-lg"}>Detail</Link>
        </Card>
    )
}