import Link from "next/link";
import styles from "./page.module.css";

function Home() {
    return  (
        <div className={styles.containerHome}>
        <div className={styles.containerListas}>
            <h1>Exemplos</h1>
            <Link href="/Exemplos/Ex-01">Exemplo 1</Link>
            <Link href="/Exemplos/Ex-02"> Exemplo 2</Link> 
            <Link href="/Exemplos/Ex-03"> Exemplo 3</Link> 
            <Link href="/Exemplos/Ex-04"> Exemplo 4</Link> 
             <Link href="/Exemplos/Ex-05"> Exemplo 5</Link> 

             </div>
           <div className={styles.containerListas}>
                <h1>Atividades</h1>
 <Link href="/Atividades/AT-01"> Atividade 1</Link> 
 <Link href="/Atividades/AT-02"> Atividade 2</Link> 
  <Link href="/Atividades/AT-03"> Atividade 3</Link> 
   <Link href="/Atividades/AT-04"> Atividade 4</Link> 
    
        </div>
        </div>
    );
}
export default Home;