import { OverlayTrigger } from "react-bootstrap";

export default function ProductsPage() {
    return (
        <div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4 text-sm text-hover">
                    <a href="#" className="hover:text-primary">ALL</a>
                    <a href="#" className="hover:text-primary">HOME DECOR</a>
                    <a href="#" className="hover:text-primary">LIGHTING</a>
                    <a href="#" className="hover:text-primary">DECORATION</a>
                    <a href="#" className="hover:text-primary">VASES</a>
                    <a href="#" className="hover:text-primary">BASICS</a>
                </div>
                <div>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={<div>Check out this avatar</div>}
                    >
                        <div>
                            test
                        </div>
                    </OverlayTrigger>
                </div>
            </div>
            <div>
                products
            </div>
        </div>
    )
}
