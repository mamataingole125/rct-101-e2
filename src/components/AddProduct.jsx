import {React,useState,useEffect} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from "axios"

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  
  const Modal = () => <div />;
  const ModalBody = () => <div />;
  const Input = () => <div />;
  const Select = () => <div />;
  const RadioGroup = () => <div />;
  const Radio = () => <div />;

  const [todos,setTodos]=useState([])
  const [page,setPage]=useState(1)
  const [limit,setLimit]=useState(3)
  const [newtodo,setNewtodo]=useState()
  
useEffect(()=>{
  axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
  .then((res)=>{
    console.log(res.data)
  })
})




fetch("http://localhost:8080/products",{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
//   body:JSON.stringify({
//     title: ,
//     category: ,
//     gender: ,
//     imageSrc: ,
//     price: 
//   })
})
.then((res)=>res.json())
.then((data)=>{
  // setNewtodo(data)
  console.log(data)
})


  return (
    <>
      <Button my={4} data-cy="add-product-button">AddProduct</Button>
      
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title"  />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">shirt</option>
            <option data-cy="add-product-category-pant">pant</option>
            <option data-cy="add-product-category-jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">submit</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
