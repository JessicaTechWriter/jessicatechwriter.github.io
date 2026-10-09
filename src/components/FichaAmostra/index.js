import styles from './styles.module.css';

/**
 * Ficha de contexto no topo de cada amostra.
 * Responde às perguntas de quem avalia: para quem, qual problema,
 * o que você fez e com quais ferramentas.
 */
export default function FichaAmostra({publico, problema, contribuicao, ferramentas}) {
  const itens = [
    ['Público', publico],
    ['Problema', problema],
    ['Minha contribuição', contribuicao],
    ['Ferramentas', Array.isArray(ferramentas) ? ferramentas.join(', ') : ferramentas],
  ].filter(([, valor]) => valor);

  return (
    <aside className={styles.ficha} aria-label="Contexto desta amostra">
      <dl className={styles.lista}>
        {itens.map(([rotulo, valor]) => (
          <div key={rotulo} className={styles.item}>
            <dt>{rotulo}</dt>
            <dd>{valor}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
