import { motion } from "framer-motion"

export class Panier{
    produits

    constructor(){
        this.produits=(localStorage.getItem('panier'))?JSON.parse(localStorage.getItem('panier')):[]
        this.produits=[
            {
                id:123,
                nom:'T-shirt Vreel3',
                prix:15.99,
                quantite:2
            }
        ]
    }

    addProduit(produit){
        const isIn=this.isProduitIn(produit.id)
        if(isIn[0]){
            this.produits[isIn[1]].quantite+=produit.quantite
            return
        }
        this.produits.push(produit)
    }

    deleteProduit(idProduit){
        const indice=this.isProduitIn(idProduit)[1]
        this.produits.splice(indice,1)
    }

    changeQuantite(idProduit,quantite){
        const indice=this.isProduitIn(idProduit)[1]
        this.produits[indice].quantite=quantite
    }

    isProduitIn(idProduit){
        for(let i in this.produits){
            if(this.produits[i].id===idProduit) return [true,i]
        }
        return [false,-1]
    }
}