import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router";
import Link from "next/link";

const Header = () => {
    const router = useRouter()
    const isHome = router.pathname === '/'
    const goBack = (e) => {
        e.preventDefault()
        router.back()
    }
    return (
        <div style={styles.title}>
            {!isHome && <a onClick={goBack}>Back</a>}
            <Link href={'/'}> <a> The E-commerce</a></Link>
        </div>
    );
};

export default Header;
