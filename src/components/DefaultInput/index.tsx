import styles from './styles.module.css'

type DefaultInputProps = {
    id: string;
    labelText: string;
    placeholderOptional?: string; // Adicionando a propriedade placeholder como opcional

    // labelText?: string;  -- Deixa a propriedade labelText opcional, ou seja, se não for passado, não irá gerar erro

} & React.ComponentProps<'input'>; 
//Isso permite que o DefaultInput herde todas as propriedades de um input HTML padrão, como 'placeholder', 'value', etc.

// export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) { -- Adicionando o operador rest para pegar 
// todas as outras propriedades do input, com isso podemos passar outras propriedades como 'placeholder', 'value', etc. 
// Sem precisar declarar todas as propriedades do input novamente.

export function DefaultInput({ id, type, labelText, placeholderOptional }: DefaultInputProps) {
    return (
        <>
            {/* Condição para  verificar se o labelText foi setado, caso não tenha sido setado, não adiciona nenhum label*/}
            {/* {labelText && <label htmlFor={ id }>{labelText}</label>}  
            //---//--- Adicionando {} conseguimos executar um código JS dentro das chaves */}
            
            {/* Outra forma de utilizar o labelText, caso queira que o label seja sempre exibido, mesmo que vazio 
            -----// CODE:  <label htmlFor={ id }>{labelText}</label>    END CODE \\---------*/}

            <label htmlFor={ id }>{labelText}</label>
            <input className={styles.input} id={ id } type={ type } placeholder={placeholderOptional} />

            {/* <input id={ id } type={ type } {...rest}/>
             Adicionando o ...rest dentro das configurações do input, consigo dizer que quero ter todas as outras propriedades do input
             sem precisar ficar declarando uma por uma, é quase como se fosse trazer um dicionario de dados e dizer que quero tudo dele*/}
        </>
);}