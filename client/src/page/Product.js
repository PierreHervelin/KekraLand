import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Album from '../components/Album';
import Box from '../components/Box';
import Clothe from '../components/Clothe';
import Concert from '../components/Concert';
import Loader from '../components/Loader';

const Product = (props) => {
    const [product,setProduct]=useState(null)

    let productType=''
    const param=props.match.params.name

    if(['kekra','freebasevol04','vrealite','land'].includes(param)){
        productType='album'
    }else if([
        'ladefense',
        'nantes',
        'bercy',
        'rouen'
    ].includes(param)){
        productType='concert'
    }else if(param==='box'){
        productType='box'
    }else{
        productType='vetement'
    }

    const getAlbum=async()=>{
        const request=async(id)=>{
            const data=await axios.get(`http://localhost:3001/api/album/${id}`)
            return data.data
        }
        let id=null

        switch (param) {
            case 'kekra':
                id='5396061b-f877-4707-9117-5192ce2a3eba'
                break
            case 'freebasevol04':
                id='34cd6c56-5afe-4317-8380-927a9acd2d6e'
                break
            case 'vrealite':
                id='b5bef61c-d997-410b-96fb-62da32fef6fd'
                break
            case 'land':
                id='3ca7c23a-ee49-4509-80d0-fb03268fc098'
                break
            default:
                break
        }
        const album=await request(id)
        setProduct(album)
    }

    const getConcert=async()=>{
        const request=async(id)=>{
            const data=await axios.get(`http://localhost:3001/api/concert/${id}`)
            return data.data
        }
        let id=null

        switch (param) {
            case 'ladefense':
                id='29065aba-e0bd-41ae-b283-e6d7db6b01dc'
                break
            case 'nantes':
                id='b23b65a8-a39d-41ee-b58a-e10c9aef90b6'
                break
            case 'bercy':
                id='765508ca-50d5-4db3-b31e-a9df05455d18'
                break
            case 'rouen':
                id='a24957fd-9260-45a8-b899-3c66735b89e2'
                break
            default:
                break
        }
        if(id){
            const concert=await request(id)
            setProduct(concert)
        }
    }

    const getClothe=async()=>{
        const request=async(id)=>{
            const data=await axios.get(`http://localhost:3001/api/vetement/${id}`)
            return data.data
        }
        const clothe=await request(param)
        setProduct(clothe)
    }

    useEffect(()=>{
        switch (productType) {
            case 'concert':
                getConcert()
                break
            case 'vetement':
                getClothe()
                break
            case 'album':
                getAlbum()
                break
            case 'box':
                setProduct('box')
                break
            default:
                console.log('none')
                return (
                    <div>
                        <h2>NONE</h2>
                    </div>
                )
        }
    },[])

    if(product){
        switch (productType) {
            case 'concert':
                console.log('concert')
                return (
                    <Concert concert={product}/>
                )
            case 'vetement':
                console.log('vetement')
                return (
                    <Clothe vetement={product}/>
                )
            case 'album':
                return (
                    <Album album={product}/>
                )
            case 'box':
                return(
                    <Box/>
                )
            default:
                console.log('none')
                return (
                    <div>
                        <h2>NONE</h2>
                    </div>
                )
        }
    }else{
        return (
            <Loader/>
        )
    }
};

export default Product;