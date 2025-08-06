//Importando o CSS do componente Heading
import styles from './styles.module.css';

//Definindo o tipo das props(propriedade) que o componente Heading vai receber
type HeadingProps = {
    children: React.ReactNode; //Esse tipo permite que o componente Heading receba qualquer tipo de conteúdo como filho, como texto, elementos React, etc.
    //children: string; //Se quisermos que o Heading só receba texto, podemos usar string nesse caso, mas isso limita o uso do componente
};

//-----//----- Criando a função do componente Heading, que recebe as props como parâmetro, ainda dizemos que as props são do tipo HeadingProps
// export function Heading(props: HeadingProps) {
//-----//----- Desestruturando as props para pegar o children, que é o texto que queremos exibir
//     const { children } = props;

export function Heading({ children }: HeadingProps) {

    return <h1 className={styles.heading}>{children}</h1>;
}
