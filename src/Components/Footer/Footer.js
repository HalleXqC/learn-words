import cls from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={cls.footer}>
            <div className={cls.content}>
                <q>Ignorance is not ashamed, not to strive for knowledges is! 
                    <br/>
                    <span> &#169; Benjamin Franklin</span>
                </q>        
            </div>
        </div>
    )
}

export default Footer