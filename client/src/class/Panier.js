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
            },
            {
                id:13,
                nom:'CD - Vreel3',
                prix:14.99,
                quantite:1
            },
            {
                id:12,
                nom:'T-shirt Vrealite',
                prix:12.99,
                quantite:1
            },
            {
                id:1,
                nom:'T-shirt Vrealite',
                prix:12.99,
                quantite:1
            },
            {
                id:1235,
                nom:'T-shirt Vrealite',
                prix:12.99,
                quantite:1
            },
            {
                id:127,
                nom:'T-shirt Vrealite',
                prix:12.99,
                quantite:1
            },
            {
                id:1278,
                nom:'T-shirt Vrealite',
                prix:12.99,
                quantite:1
            },
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
}