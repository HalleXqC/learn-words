import cls from './Login.module.scss';
import { fire , provider} from '../../services/firebase'

const Login = () => {

    const signIn = e => {
        e.preventDefault();

        fire.auth().signInWithPopup(provider);
    }

    return (
        <div className={cls.root}>
            <div className={cls.card}>
                <h1>authorization:</h1>
                <button 
                    onClick={signIn}
                >
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png' alt="Google Icon"/> 
                </button>
            </div>
        </div>
    )
}

export default Login;