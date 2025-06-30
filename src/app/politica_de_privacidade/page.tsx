import styles from "./Politica.module.css";

export default function Politica() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Política de Privacidade – Social Schedule</h1>
        <h6>Última atualização: 30 de junho de 2025</h6>
        <h5>
          O <span>Social Schedule</span> respeita a sua privacidade e está
          comprometido em proteger seus dados pessoais. Esta Política de
          Privacidade descreve como coletamos, usamos e protegemos as
          informações fornecidas por você ao utilizar nosso aplicativo.
        </h5>
      </div>
      <div className={styles.paragrafo}>
        <h2>1. Informações que coletamos</h2>
        <p>
          Ao usar o Social Schedule, podemos coletar as seguintes informações
          por meio de autenticação com provedores como o Facebook:
        </p>
        <ul>
          <li>Nome Completo</li>
          <li>Endereço de E-mail</li>
          <li>Foto de Perfil</li>
          <li>ID do usuário na plataforma (ex: Facebook)</li>
        </ul>
        <p>Não coletamos ou armazenamos sua senha de nenhuma rede social.</p>
      </div>
      <div className={styles.paragrafo}>
        <h2>2. Como usamos as informações</h2>
        <p>As informações coletadas são utilizadas para:</p>
        <ul>
          <li>Autenticar e identificar você dentro do app</li>
          <li>Personalizar sua experiência</li>
          <li>
            Facilitar o agendamento e gerenciamento de conteúdos em redes
            sociais (caso ativado)
          </li>
          <li>Manter a segurança da sua conta</li>
          <p>
            Nunca venderemos, alugaremos ou compartilharemos suas informações
            com terceiros não autorizados.
          </p>
        </ul>
      </div>
      <div className={styles.paragrafo}>
        <h2>3. Compartilhamento de Dados</h2>
        <p>
          Podemos compartilhar seus dados com serviços de terceiros apenas
          quando necessário para o funcionamento do aplicativo, como:
        </p>
        <ul>
          <li>Firebase (armazenamento seguro de dados e autenticação)</li>
          <li>Provedores de login social (como Facebook)</li>
        </ul>
        <p>
          Todos os serviços utilizados seguem padrões de segurança e privacidade
          compatíveis com o GDPR e outras legislações vigentes.
        </p>
      </div>
      <div className={styles.paragrafo}>
        <h2>4. Retenção e exclusão de dados</h2>
        <p>
          Armazenamos suas informações apenas pelo tempo necessário para
          oferecer nossos serviços. Você pode solicitar a exclusão completa dos
          seus dados a qualquer momento entrando em contato conosco.
        </p>
      </div>
      <div className={styles.paragrafo}>
        <h2>5. Seus direitos</h2>
        <p>Você tem direito de:</p>
        <ul>
          <li>Acessar os dados que temos sobre você</li>
          <li>Corrigir informações incorretas</li>
          <li>Revogar consentimentos</li>
          <li>Solicitar a exclusão dos seus dados</li>
        </ul>
      </div>
      <div className={styles.paragrafo}>
        <h2>6. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger suas
          informações contra acesso não autorizado, perda ou uso indevido.
        </p>
      </div>
      <div className={styles.paragrafo}>
        <h2>7. Contato</h2>
        <p>
          Se tiver dúvidas sobre esta Política de Privacidade ou sobre seus
          dados, entre em contato: Responsável: Marcos Henrique Marcarini
          E-mail: marcoshmarcarini@hotmail.com
        </p>
      </div>
      <div className={styles.paragrafo}>
        <h2>8. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. A
          versão mais recente estará sempre disponível dentro do aplicativo ou
          em nosso site oficial.
        </p>
      </div>
    </div>
  );
}
