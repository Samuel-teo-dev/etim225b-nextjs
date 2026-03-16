import Link from "next/Link";

import styles from "./page.module.css";

function Home() {
  return (
<div className={styles.containerHome}>
  <Link href="/Exemplos/Ex-01">Exemplo 1</Link>
<div className={styles.containerListas}>
<h1>Exemplos</h1>
</div>
<div className={styles.containerListas}>
  <h1>atividades</h1>
</div>



</div>
  );
}

export default Home;
