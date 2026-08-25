import './index.css'
import fotoPerfil from './minha-foto.jpg';
import habilidadeDesenvolvedora from './desenvolvimento.webp';
import habilidadeCozinhar from './habilidadeCozinhar.webp';
import habilidadeCantar from './habilidadeCantar.webp';

function Sobre() {
    return (
        <main>
            <header>
                <h1>Sobre</h1>
            </header>
            <section>
                <div className='boxfotoPerfil'>
                    <img className="imgfotoPerfil" src={fotoPerfil} />
                </div>
                <div className='habilidades'>
                    <article>
                        <h2>Cantar</h2>
                        <img src={habilidadeCantar} />
                        <p className='descricao'>
                            Canto em casa pois minha familia é composta por pessoas que adoram cantar, eu canto rap, músicas sad, pop, entre outros que me deixem animada.
                        </p>
                    </article>
                    <article>

                        <h2>Cozinhar</h2>
                        <img src={habilidadeCozinhar} />
                        <p className='descricao'>
                            Eu adoro cozinhar, faço diversos tipos de comida, entre doce ou salgado, azedo ou não, pão, massar, entre oyutros, não deu certo? refaço até air algo perfeito e comestivél.
                        </p>
                    </article>
                    <article>

                        <h2>Desenvolvedora</h2>
                        <img src={habilidadeDesenvolvedora} />
                        <p className='descricao'>
                            Faço um curso tecnico no ensino médio de Desenvolvimento de Sistemas, agora fazendo o 2 ano aprendendo códigos diferenciados e que não tinha ideia que existiam.
                        </p>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default Sobre;