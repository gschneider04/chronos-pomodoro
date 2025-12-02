import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';


export function Menu() {
    const [theme, setTheme] = useState <'dark' | 'light'> ('dark');

    return (
    <nav className={styles.menu}>
        <a className={styles.menuLink} href="#" aria-label='Ir para a Home' title='Ir para a Home'>
            <HouseIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Ver o Historico' title='Ver o Historico'>
            <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
            <SettingsIcon />
        </a>
        <a className={styles.menuLink} href="#" aria-label='Mudar o Tema' title='Mudar o Tema'>
            <SunIcon />
        </a>
    </nav>
)}