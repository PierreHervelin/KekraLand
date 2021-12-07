import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Album from '../components/Album';
import Clothes from '../components/Clothes';
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
        'accorhotelsarena'
    ]){
        productType='concert'
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

    useEffect(()=>{
        switch (productType) {
            case 'concert':
                console.log('concert')
                return (
                    <div>
                        <h2>concert</h2>
                    </div>
                )
            case 'vetement':
                console.log('vetement')
                return (
                    <div>
                        <h2>vetement</h2>
                    </div>
                )
            case 'album':
                getAlbum()
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
                    <div>
                        <h2>concert</h2>
                    </div>
                )
            case 'vetement':
                console.log('vetement')
                return (
                    <Clothes clothes={product}/>
                )
            case 'album':
                return (
                    <Album album={product}/>
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