import React from 'react';
import { Panier } from '../class/Panier';
import ProduitCard from './ProduitCard';

export const UserPanier=new Panier()

class CompPanier extends React.Component{
    state={
        total:UserPanier.getTotalPrice()
    }

    constructor(props){
        super(props)

        this.changeTotal=this.changeTotal.bind(this)
    }

    changeTotal(total){
        console.log(total);
        this.setState({total})
    }

    render(){
        const produits=[]
        for(let produit of UserPanier.produits){
            produits.push(
                <ProduitCard key={produit.id} produit={produit} changeTotal={this.changeTotal}/>
            )
        }
        if(!produits.length){
            produits.push('Le panier est vide.')
        }
        return(
            <div className='Panier'>
                <h3>Panier</h3>
                <div className='content'>
                    {produits}
                </div>
                <div className='total'>
                    {`Total : ${this.state.total}€`}
                </div>
                <div 
                    className='cross icon-cross'
                    onClick={(e)=>{
                        e.target.parentNode.classList.remove('active')
                        document.querySelector('.black-bottom').classList.remove('active')
                        setTimeout(() => {
                            document.body.style.overflow='initial'
                        }, 500);
                    }}
                ></div>
            </div>
        )
    }
}

export default CompPanier;