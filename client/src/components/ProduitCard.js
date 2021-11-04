import React from 'react';
import { UserPanier } from './CompPanier';

class ProduitCard extends React.Component{
    produit
    state={
        quantite:0
    }
    constructor(props){
        super(props)
        this.produit=this.props.produit
    }
    componentDidMount(){
        this.setState({quantite:this.produit.quantite})
    }
    render(){
        return(
            <div className='ProduitCard'>
                <span className='image'/>
                <div>
                    <span>{this.produit.nom}</span>
                    <span>{`${this.produit.prix}€`}</span>
                    <input
                        type='number'
                        onChange={(e)=>{
                            if(Number.isInteger(parseInt(e.target.value))){
                                e.target.classList.remove('error')
                                UserPanier.changeQuantite(this.produit.id,e.target.value)
                                this.props.changeTotal(UserPanier.getTotalPrice())
                            }else{
                                e.target.classList.add('error')
                            }
                            this.setState({quantite:e.target.value})
                        }}
                        value={this.state.quantite}
                    />
                    <span 
                        className='icon-cross'
                        onClick={(e)=>{
                            UserPanier.deleteProduit(this.produit.id)
                            this.props.changeTotal(UserPanier.getTotalPrice())
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default ProduitCard;