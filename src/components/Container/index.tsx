import styles from './styles.module.css';

type ContainerProps = {
    children: React.ReactNode; //Esse tipo permite que o componente Heading receba qualquer tipo de conteúdo como filho, como texto, elementos React, etc.
    //children: string; //Se quisermos que o Heading só receba texto, podemos usar string nesse caso, mas isso limita o uso do componente
};

export function Container({children}: ContainerProps) {
    return (
    <div className={styles.container}>
        <div className={styles.content}>
            {children}
        </div>
    </div>
)}