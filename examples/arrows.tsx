import { withBluefish, Id, Arrow, Circle, Bluefish, Ref, Distribute, Row, Col } from "../src";

type ConnectionProps = {
    id: Id;
}

export const Connection = withBluefish((props: ConnectionProps) => {
    return <Bluefish width={100} height={100}>
        <Col alignment={"middle"} spacing={30}>
            <Circle r={5} id="mercury"/>
            <Circle r={20} id="venus"/>
            <Circle r={20} id="earth"/>
            <Circle r={10} id="mars"/>
        </Col>
    </Bluefish>
})