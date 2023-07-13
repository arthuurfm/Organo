import Colaborador from "../Colaborador";
import "./Time.css";

function Time(props) {
    const backgroundColor = { backgroundColor: props.corSecundaria };
    const borderColor = { borderColor: props.corPrimaria };

    return (
        (props.colaboradores.length > 0) &&
        <section className="time" style={backgroundColor}>
            <h3 style={borderColor}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corPrincipal={props.corPrimaria}
                    />
                )}
            </div>
        </section>
    );
}

export default Time;