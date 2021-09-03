import { useState } from 'react';
import cls from './AddCards.module.scss';

const AddCards = ({handleNewCard, openAllCards, closeAllCards, disabledBtn}) => {

    const [ruInput, setRuInput] = useState('')
    const [enInput, setEnInput] = useState('')

    return (
        <div className={cls.root}>
            <input 
                type="text" 
                placeholder="English variant"
                onChange={(e) => setEnInput(e.target.value)}    
                value={enInput}
            />
            <input 
                type="text" 
                placeholder="Russian variant"
                onChange={(e) => setRuInput(e.target.value)}
                value={ruInput}
            />
            <button 
                style={{marginRight: '1rem'}} 
                disabled={disabledBtn}
                onClick={e => {
                    e.preventDefault();
                    handleNewCard(ruInput, enInput, setRuInput, setEnInput);
                }}
            >
                Submit
            </button>
            <button className={cls.openBtn} onClick={e => {
                e.preventDefault();
                openAllCards();
            }}>Open</button>
            <button className={cls.closeBtn} onClick={e => {
                e.preventDefault();
                closeAllCards();
            }}>Close</button>
        </div>
    )
}

export default AddCards