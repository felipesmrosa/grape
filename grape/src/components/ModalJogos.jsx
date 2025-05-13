export function ModalJogos({ fecharModal, jogoSelecionado }) {
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={fecharModal}></div>
      <div className="modal__content">
        <h2 className="modal__content__title">{jogoSelecionado.nome}</h2>
        <div
          className="modal__content__banner"
          style={{ backgroundImage: `url(${jogoSelecionado.banner})` }}
        ></div>

        <div className="modal__content__descricao">
          <p className="modal__content__descricao__premio">{jogoSelecionado.premio}</p>
          <span>
            <button>Inscrições</button>
            <button>Em Andamento</button>
            <button id="regras">REGRAS</button>
          </span>
        </div>
        <hr className="modal__content__linha" />
        <ul className="modal__content__infos">
          <li>• {jogoSelecionado.equipe} equipes</li>
          <li>• Inscrição {jogoSelecionado.inscricao}</li>
          <li>• Início: {jogoSelecionado.data}</li>
        </ul>
        <button className="modal__content__fechar" onClick={fecharModal}>
          Fechar
        </button>
      </div>
    </div>
  );
}
