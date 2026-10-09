import clsx from 'clsx';
import styles from './styles.module.css';

function contarPalavras(texto) {
  return texto.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Mostra um trecho antes e depois da revisão, com uma nota explicando a decisão.
 * A contagem de palavras é calculada automaticamente.
 *
 * Uso: <Revisao antes="..." depois="..." nota="..." />
 */
export default function Revisao({antes, depois, nota, destaque = false}) {
  const palavrasAntes = contarPalavras(antes);
  const palavrasDepois = contarPalavras(depois);

  return (
    <figure className={clsx(styles.revisao, destaque && styles.destaque)}>
      <div className={styles.texto}>
        <p className={styles.antes}>
          <span className={styles.rotulo}>Antes</span>
          <span>
            <del>{antes}</del>
          </span>
        </p>
        <p className={styles.depois}>
          <span className={styles.rotulo}>Depois</span>
          <span>
            <ins>{depois}</ins>
          </span>
        </p>
      </div>
      <figcaption className={styles.nota}>
        {nota && <span>{nota}</span>}
        <span className={styles.contagem}>
          De {palavrasAntes} para {palavrasDepois} palavras.
        </span>
      </figcaption>
    </figure>
  );
}
