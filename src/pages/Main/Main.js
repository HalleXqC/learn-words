import Content from '../../Components/Content/Content';
import cls from './Main.module.scss'
import Footer from '../../Components/Footer/Footer';
import Card from '../../Components/Card/Card';
import { useEffect, useState } from 'react'
import AddCards from '../../Components/AddCards/AddCards';
import { GoSignOut as SignOut} from 'react-icons/go';
import { fire } from '../../services/firebase';
import { createNewCard, getCards, deleteCards, editCards, changeCardIsRemembered} from '../../API/index';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading/Loading'

function App(){

    const [user] = useAuthState(fire.auth());

    const [words, setWords] = useState(null)

    const [changeWordsState, setChangeWordsState] = useState('')

    const [disabledBtn, setDisabledBtn] = useState(false)

    useEffect(() => {
        getCards(`${user.uid}.json`)
        .then(res => res.json())
        .then(r => {
            if(r){
                const data = Object.entries(r).map(item => {
                    const id = item[0];
                    return {
                        ...item[1],
                        id
                    }
                })
    
                setWords(data)
            }else{
                setWords([])
            }
        })
    }, [user.uid, changeWordsState])

    const handleChangeWordState = (id, isRemembered) => {

        changeCardIsRemembered(
            {
                isRemembered: !isRemembered
            },
            user.uid,
            `${id}.json`
        )
        .then(res => res.json())
        .then((r) => {
            setChangeWordsState({
                id,
                r
            })
        })
    }

    const addNewCard = (ru, en, setRu, setEn) => {
        if(ru !== '' && en !== ''){
            setDisabledBtn(true)
            createNewCard(
                {
                    ru: ru,
                    en: en,
                    isRemembered: false
                },
                `${user.uid}.json`
            )
            .then(res => res.json())
            .then(r => {
                setDisabledBtn(false)
                setRu('')
                setEn('')
                setChangeWordsState(r)
            })


        }else{
            alert('Error: Fields are empty')
        }
    }

    const openCards = () => {
        setWords(() => {
            return words.map(item => {
                return {
                    ...item,
                    isRemembered: true
                }
            })
        })
    }

    const closeCards = () => {
        setWords(() => {
            return words.map(item => {
                return {
                    ...item,
                    isRemembered: false
                }
            })
        })
    }

    const deleteCard = id => {
        const askDelete = window.confirm('Are u really want to delete this card?')
        if(askDelete){
            deleteCards( user.uid, `${id}.json`)
            .then(res => res.json())
            .then(() => {
                setChangeWordsState(id)
            })
        }
    }

    const editCard = (id, en, ru) => {
        const askEn = window.prompt('New english word', en)
        const askRu = window.prompt('New russian word', ru)

        if(askEn && askRu){
            changeCardIsRemembered(
                {
                    en: askEn,
                    ru: askRu 
                },
                user.uid,
                `${id}.json`
            )
            .then(res => res.json())
            .then((r) => {
                setChangeWordsState({
                    id,
                    r,
                    ru,
                    en
                })
            })
        }else{
            alert('The fields are must to be filled up!')
        }
    }

    const signOut = e => {
        e.preventDefault();

        fire.auth().signOut()
    }

    return (
        <div className={cls.root}>
            <div className={cls.header}>
                <Content title="Learn words with us" />
            </div>
            <div className={cls.cardContainer}>
                <div className={cls.signOutBlock} title="SIGN OUT" >
                    <button onClick={signOut}>
                        <SignOut className={cls.signOutBtn}/>
                    </button>
                </div>
                <AddCards handleNewCard={addNewCard} openAllCards={openCards} closeAllCards={closeCards} disabledBtn={disabledBtn}/>
                <div className={cls.cards}>
                    {
                        words?.length === 0 ? (
                            <p className={cls.textCenter}>There is no cards. Please, add some</p>
                        ) : words ? (
                            words.map(({ru, en, id, isRemembered}) => (
                                <Card 
                                    onClick={() => handleChangeWordState(id, isRemembered)}
                                    onDelete={() => deleteCard(id)}
                                    onEdit={() => editCard(id, en, ru)}
                                    isRemembered={isRemembered}
                                    ru={ru}
                                    en={en} 
                                    key={id}
                                />
                            ))
                        ) : <Loading/>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default App;