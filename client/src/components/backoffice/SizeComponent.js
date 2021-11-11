import React from "react";

class SizeComponent extends React.Component {
    state={
        size:'',
        stock:0
    }
    sizeFilter=/(^[M|S|L]$)|(^[X][X]{0,1}[S|L]$)/
    valid=[false,false]

    constructor(props) {
        super(props);
        this.sizeInput=React.createRef()
        this.stockInput=React.createRef()
    }
    onSizeChange(e){
        if(this.sizeFilter.test(e.target.value.toUpperCase())){
            this.sizeInput.current.classList.remove('error')
            this.valid[0]=true

        }else{
            this.sizeInput.current.classList.add('error')
            this.valid[0]=false
        }
        this.props.updateSize(
            e.target.value.toUpperCase(),
            this.props.i,
            (this.valid[0]&&this.valid[1])?true:false
        )
    }
    onStockChange(e){
        let val=e.target.value
        if((val&&Number.isInteger(parseInt(val))&&val>=0)){
            this.stockInput.current.classList.remove('error')
            this.valid[1]=true
        }else{
            this.stockInput.current.classList.add('error')
            this.valid[1]=false
        }
        this.props.updateStock(
            parseInt(val)?parseInt(val):'',
            this.props.i,
            (this.valid[0]&&this.valid[1])?true:false
        )
    }
    onDelete(e){
        e.preventDefault()
        this.props.delField(this.props.i)
    }

    render() {
        return (
            <div className='size'>
                <input
                    type='text'
                    placeholder='taille'
                    onChange={(e)=>{this.onSizeChange(e)}}
                    value={this.props.item.size}
                    ref={this.sizeInput}
                />
                <input
                    type='number'
                    placeholder='stock'
                    onChange={(e)=>{this.onStockChange(e)}}
                    value={this.props.item.stock}
                    ref={this.stockInput}
                />
                <button onClick={(e)=>{this.onDelete(e)}}>-</button>
            </div>
        );
    }
}

export default SizeComponent;