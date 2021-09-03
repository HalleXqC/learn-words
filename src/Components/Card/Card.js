import cls from './Card.module.scss';
import { AiOutlineDelete , AiOutlineEdit} from 'react-icons/ai';

const Card = ({ru, en, isRemembered, onClick, onDelete, onEdit}) => {
    return (
        <div className={`${cls.root} ${isRemembered ? cls.isRemembered : null }`} >
            <div onClick={onClick} className={`${cls.card} /*isRemembered ? cls.isRemembered : null */`}>
                <p className={cls.front}>{en}</p>
                <p className={cls.back}>{ru}</p>
            </div>
            <div className={cls.icons}>
                <AiOutlineDelete onClick={onDelete} className={cls.delete} />
                <AiOutlineEdit onClick={onEdit} className={cls.edit} />
            </div>
        </div>
    )
}

export default Card;