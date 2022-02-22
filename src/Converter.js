import { useState } from "react";
import { Card, CardTitle, CardText, Col, Row, Button, Input } from "reactstrap";
import convertToRoman from "./convert/convertToRoman";
import convertToNumber from "./convert/convertToNumber";

const Converter = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    
    const handleSubmit = () => {
        const number = parseInt(input)
        if (number > 0) {
            setResult(convertToRoman(number))
        } else if (number < 1) {
            setResult("Please enter a number greater than 0")
        } else {
            setResult(convertToNumber(input))
        }
    }

    return(
        <div>
            <Card
                body
            >
                <CardTitle tag="h2" className="mb-5 mx-5">
                    Roman Numeral Converter
                </CardTitle>
                <Row xs="2">
                    <Col xs="9">
                        <Input onChange={e => setInput(e.target.value)} placeholder="Enter a number / roman numeral"/>
                    </Col>
                    <Col xs="3">
                        <Button type="submit" onClick={() => handleSubmit()} style={{"display": "flex"}}>Convert</Button>
                    </Col>
                </Row>
                <CardText className="mt-4">
                    {result || ""}
                </CardText>
            </Card>
        </div>
    )
}


export default Converter;