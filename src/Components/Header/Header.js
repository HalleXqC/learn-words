import Content from '../Content/Content';
import cls from './Header.module.scss';

const Header = () => {
    return (
        <div className={cls.header}>
            <Content/>
        </div>
    )
}

export default Header