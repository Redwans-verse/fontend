import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductList = () => {
    const [products,setProducts]=useState([])
    console.log(products)
    useEffect(()=>{
        loadProducts()
    },[products])

    const loadProducts= async ()=>{
        try {
            const {data}=await axios.get('http://localhost:8000/api/v1/product/products')
            setProducts(data)
        }catch (e) {
            console.log(e.message)
        }
    }
    return (
        <Container>
            <Row>
                {products.map(product => (
                    <Col sm={6} md={4} key={product._id}>
                        <Card className='mb-2'>
                            <Card.Img className='cardimg' variant="top" src={`http://localhost:8000/${product.img}`} />
                            <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text>Quantity:{product.qty}</Card.Text>
                                <Card.Text>Unit Price:{product.unitPrice}</Card.Text>
                                <Card.Text>Total Price:{product.totalPrice}</Card.Text>
                                <Button variant="primary">Buy now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;