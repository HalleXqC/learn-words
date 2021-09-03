import cls from './Content.module.scss'

const Content = ({title}) => {
    return (
        <div className={cls.content}>
            <h1>{title}</h1>

            {/* <button>Get started</button> */}
        </div>
    )
}

export default Content