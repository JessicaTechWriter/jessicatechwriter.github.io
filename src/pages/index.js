import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Revisao from '@site/src/components/Revisao';
import styles from './index.module.css';

// ---------------------------------------------------------------------------
// EDITE AQUI: o texto de abertura, a revisão em destaque e as amostras listadas.
// ---------------------------------------------------------------------------
const TITULO = 'Documentação para quem precisa resolver algo agora.';

const REVISAO = {
  antes:
    'Para que seja possível efetuar a exportação do relatório, é necessário que o usuário realize o clique no botão Exportar, que está localizado no canto superior da tela.',
  depois: 'Para exportar o relatório, clique em Exportar, no canto superior da tela.',
  nota: 'Troquei substantivos por verbos e tirei “o usuário”: a instrução fala direto com quem lê e começa pela tarefa.',
};

const AMOSTRAS = [
  {
    titulo: 'Cadastre seu primeiro produto',
    tipo: 'Tutorial',
    descricao: 'Do token de acesso ao primeiro produto cadastrado na API, em cerca de 10 minutos.',
    link: '/amostras/tutorial-primeiro-produto',
  },
  {
    titulo: 'Exportar o inventário em CSV',
    tipo: 'Guia de tarefa',
    descricao: 'Passos curtos para uma tarefa específica, para quem já usa o produto.',
    link: '/amostras/exportar-inventario-csv',
  },
  {
    titulo: 'POST /produtos',
    tipo: 'Referência de API',
    descricao: 'Parâmetros, exemplos de requisição e resposta e códigos de erro.',
    link: '/amostras/referencia-post-produtos',
  },
  {
    titulo: 'Mensagens de erro reescritas',
    tipo: 'Antes e depois',
    descricao: 'Três mensagens de interface revisadas, com o motivo de cada mudança.',
    link: '/amostras/mensagens-de-erro',
  },
];
// ---------------------------------------------------------------------------

export default function Inicio() {
  const {siteConfig} = useDocusaurusContext();
  const {nome, linkedin, email} = siteConfig.customFields;

  return (
    <Layout description={siteConfig.tagline}>
      <main className={styles.pagina}>
        <header className={styles.abertura}>
          <Heading as="h1" className={styles.titulo}>
            {TITULO}
          </Heading>
          <p className={styles.resumo}>
            Sou {nome}, Technical Writer. Escrevo tutoriais, referências de API e textos de
            interface para produtos de software, sempre a partir da tarefa que o leitor quer
            concluir.
          </p>
          <div className={styles.acoes}>
            <Link className="button button--primary button--lg" to="/amostras">
              Ver amostras
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/sobre">
              Sobre mim
            </Link>
          </div>
        </header>

        <section className={styles.secao} aria-labelledby="titulo-revisao">
          <Heading as="h2" id="titulo-revisao" className={styles.subtitulo}>
            Como eu reviso um texto
          </Heading>
          <Revisao destaque {...REVISAO} />
        </section>

        <section className={styles.secao} aria-labelledby="titulo-amostras">
          <Heading as="h2" id="titulo-amostras" className={styles.subtitulo}>
            Amostras
          </Heading>
          <ul className={styles.sumario}>
            {AMOSTRAS.map((amostra) => (
              <li key={amostra.link} className={styles.entrada}>
                <Link to={amostra.link} className={styles.linhaEntrada}>
                  <span className={styles.tituloEntrada}>{amostra.titulo}</span>
                  <span className={styles.guia} aria-hidden="true" />
                  <span className={styles.tipo}>{amostra.tipo}</span>
                </Link>
                <p className={styles.descricao}>{amostra.descricao}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.secao} aria-labelledby="titulo-contato">
          <Heading as="h2" id="titulo-contato" className={styles.subtitulo}>
            Contato
          </Heading>
          <p className={styles.resumo}>
            Para vagas e projetos de documentação, escreva para{' '}
            <a href={`mailto:${email}`}>{email}</a> ou me chame no{' '}
            <a href={linkedin}>LinkedIn</a>.
          </p>
        </section>
      </main>
    </Layout>
  );
}
