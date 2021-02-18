import React, { useContext, useState } from "react";
import Axios from "axios";
import {
    Container,
    Form,
    Button,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Label,
    Col,
    Input,
    Row,
    Card,
    CardBody,
    CardFooter,
    CardHeader
} from 'reactstrap';

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import {Redirect} from "react-router-dom";
import {UserContext} from "../context/UserContext";

const Home =()=>{
    const context = useContext(UserContext);
    const [query,setQuery]=useState('');
    const [user,setUser]=useState('');

    const fetchDetails=async() =>{
        try{
            const {data}=await Axios.get(`https://api.github.com/users/${query}`);
            setUser(data);
            console.log(data);


        }catch(error){
            console.log(error);

        }
    }
    ///// put anypage behind login
    if(!context.user?.uid){
        return <Redirect to="/signin"/>
    }
    return(
        <Container>
            <Row className="mt-3">
                <Col md="5">
                    <InputGroup>
                      <Input 
                      type="text"
                      value={query}
                      onChange={e=>setQuery(e.target.value)}
                      placeholder="please provide the username"
                       />
                       <InputGroupAddon addonType="append">
                           <Button color="primary" onClick={fetchDetails}>Fetch User</Button>
                       </InputGroupAddon>
                    </InputGroup>
                    {
                        user?<UserCard user={user}/>:null
                    }
                </Col>
                <Col md="7">
                    {
                        user?<Repos repos_url={user.repos_url}/>:null
                    }
                    </Col>
            </Row>
        </Container>
    )
}

export default Home;