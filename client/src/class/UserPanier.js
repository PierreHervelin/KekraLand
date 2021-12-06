export class UserPanier{
    produits

    constructor(){
        this.produits=(localStorage.getItem('panier'))?JSON.parse(localStorage.getItem('panier')):[]
    }

    addProduit(produit){
        const isIn=this.isProduitIn(produit.id)
        if(isIn[0]){
            this.produits[isIn[1]].quantite+=produit.quantite
            return
        }
        this.produits.push(produit)
        this.save()
    }

    deleteProduit(idProduit){
        const indice=this.isProduitIn(idProduit)[1]
        this.produits.splice(indice,1)
        this.save()
    }

    changeQuantite(idProduit,quantite){
        const indice=this.isProduitIn(idProduit)[1]
        this.produits[indice].quantite=quantite
        this.save()
    }

    getTotalPrice(){
        let total=0
        for(let produit of this.produits){
            total+=produit.prix*produit.quantite
        }
        return Math.round(total*100)/100
    }

    isProduitIn(idProduit){
        for(let i in this.produits){
            if(this.produits[i].id===idProduit) return [true,i]
        }
        return [false,-1]
    }

    save(){
        localStorage.setItem('panier',JSON.stringify(this.produits))
    }
}