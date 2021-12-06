import Navbar from './Navbar';
import React, { useEffect, useState } from 'react';

const Concert = () => {
   /* const [content, setContent] = useState([])

    const getTicket = async (id) => {
        const produit = await axios.get(
            `http://localhost:3001/api/produits/concert`,
            {
                params: {
                    id
                }
            })
        const concert = await axios.get(
            `http://localhost:3001/api/vetement/${concert.data[0].id}`
        )
        setContent([
            concert.data,
            concert.data,
            concert.data,
            concert.data,
            concert.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
            vetement.data,
        ])
    }

    useEffect(() => {
        console.log(content);
    }, [content])

    useEffect(() => {
        getImages()
    }, [])
*/
    return (
        <div className="Containers-concert">
            <Navbar/>
            <div className="Container-concert">
                

            </div>
        </div>
    );
};

export default Concert;