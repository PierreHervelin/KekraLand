import React from 'react';

const ClothForm = () => {
    return (
        <form>
            <h2>Add value to Vêtement</h2>
            <input
                type='text'
                placeholder='id'
            />
            <input
                type='text'
                placeholder='taille'
            />
        </form>
    );
};

export default ClothForm;