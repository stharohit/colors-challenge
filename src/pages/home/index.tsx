import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import mapColorBox from './mapColorBox';
import useColorList from 'hooks/useColorList';
import Loader from '@/components/loader';

const Home: NextPage = () => {

    const { colors, error, getColors, isLoading } = useColorList();

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className={styles.container}>
            <div className={styles.swatchPanel}>
                {colors && !error ? mapColorBox(colors) : <div className={styles.errorMsg}>{error?.message}</div>}
            </div>
            <button className={styles.generateBtn} onClick={getColors}>Generate Colors</button>
        </div>
    )
}

export default Home
