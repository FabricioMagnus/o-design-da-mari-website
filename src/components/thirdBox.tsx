/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Image, Text } from "@chakra-ui/react";
import "./firstBox.css";
import React from "react";
import CustomSwiper from "./swipper/swipper";

export default function ThirdBox() {
  const [page, setPage] = React.useState(0);

  const Images = [
    {
      src: "./jornalismo/boninho.webp",
      alt: "boninho",
      id: 1,
      title: "Boninho declara sua torcida para o campeão do BBB22",
      text: 'Com a reta final do reality show Big Brother Brasil 22 chegando, as polêmicas em torno do reality não param. Desta vez, o diretor do programa José Bonifácio Brasil de Oliveira, mais conhecido como Boninho, acabou se envolvendo em uma polêmica neste fim de semana. A treta entre o diretor e a Revista Veja começou com uma declaração polêmica de Boninho sobre o BBB22: “Meu favorito [no BBB] era o Pedro Scooby. Agora não vejo a hora de todo mundo sair. Não aguento mais", disse Boninho para a Veja. Horas depois em seu Instagram, Boninho disse que a entrevista não passou de uma brincadeira: “Bora jogar essa reta final com toda torcida do mundo!! Hoje é pra votar para sair! E depois para ganhar! Tem cheiro de quebra de recorde na final!!!” escreveu Boninho na publicação. Após a publicação, Boninho usou seus storys do Instagram para falar sobre a suposta entrevista para a Revista Veja: “Gente, alguém contando que eu dei entrevista ontem pra Veja. Não Veja, eu não dei entrevista pra você. Até porque dar entrevista pra veja é perder tempo né. E lógico, eu to vendo o Big Brother sim! Vai até o final, essa reta vai pegar fogo, e vai ser bem legal. Uma final que as torcidas vão ter que correr atras! Vi muita gente na avenida torcendo pra todo mundo, e é isso que a gente faz essa brincadeira, pra isso. Até mais!”, disse Boninho. Após toda a repercussão, a Revista Veja se pronunciou através de um texto fazendo duras críticas ao diretor da TV Globo: “Neste domingo, diante da repercussão que a nota de VEJA alcançou, ele tentou emplacar uma outra versão do que disse. E foi desrespeitoso com a revista e com a repórter, que estava credenciada, fazendo o seu trabalho na cobertura do Carnaval na Marquês de Sapucaí, no Rio de Janeiro, onde trabalhou por horas em dois dias seguidos”, publicou a Revista Veja. O relato continua com o diretor da Veja fazendo críticas severas ao BBB22: “Tudo depende do seu ponto de vista. Para mim, perda de tempo é assistir ao Big Brother Brasil”, afirma Mauricio Lima, diretor de redação de VEJA.',
    },
    {
      src: "./jornalismo/grenal.webp",
      alt: "grenal",
      id: 2,
      title:
        'Semana Gre-Nal que se inicial, e a dúvida que fica é: " O que esperar do último Gre-Nal da temporada 2022?”',
      text: "Do lado vermelho: Internacional mais uma vez vive deixando seu torcedor com uma série de dúvidas: “Será que o GreNal da nona rodada do campeonato gaúcho foi uma cortina de fumaça e o verdadeiro Inter foi o que arrancou um empate contra o Guarany-Bage?” “Alexander Medina é mesmo o melhor técnico para iniciar o campeonato Brasileiro, ou ainda dá tempo de trocar a comissão técnica e tentar iniciar um novo trabalho antes que uma tragédia maior aconteça?” “O que esperar do Internacional na próxima quarta? Que Inter teremos na Arena?” Essa são perguntas que o torcedor não aguenta mais especular. A verdade é que a torcida está cansada de fracassos! O que resta neste momento é que no próximo jogo a equipe tenha poder de reação para quem sabe, tentar levar essa disputa da vaga para a final do campeonato gaúcho para os pênaltis. Já do lado azul: Quando se fala que “clássico ajeita a casa”, se espera que o rival se sobreponha em todos os jogos. Não foi o que aconteceu com o Grêmio. O técnico Roger Machado, humildemente, soube reconhecer suas falhas do último clássico, entendeu como o Internacional se comportou no último jogo, identificou as falhas no seu time, promoveu mudanças que fizeram com que o Grêmio jogasse com toda a calma, diferente do que vimos no último clássico. Contando com o reforço de Diego Souza, que mesmo não sendo tão efetivo no jogo, foi essencial para que o time tivesse mais confiança e que o Grêmio aplicasse uma goleada dentro da casa do rival. Mas, que Grêmio veremos na quarta? Um time valente, que mesmo tendo a vantagem, irá administrar o resultado, ou vai ter a mesma postura do jogo de hoje? O que sabemos até o momento, é que Gre-Nal é uma caixinha de surpresas! E todos esses questionamentos serão respondidos na quarta às 22:15 na Arena do Grêmio.",
    },
    {
      src: "./jornalismo/eisenbahn.jpg",
      alt: "eisenbahn",
      id: 3,
      title: "Eisenbahn anuncia nova cerveja artesanal que custará R$ 5 reais.",
      text: 'A cervejaria Eisenbahn anunciou no último dia 17, uma nova cerveja em comemoração aos seus 20 anos. A Eisenbahn Pilsen Unfiltered. A nova versão, considerada “versão mais artesanal da Pilsen", será vendida em formato long neck e lata. Segundo a Eisenbahn, a cerveja foi criada para ser a “mais versátil possível”. Unfiltered é uma Pilsen não filtrada, e por isso é capaz de reter os sabores e aromas característicos de uma cerveja artesanal. Apesar disso, por se tratar de uma Pilsen, o rótulo continua sendo refrescante e fácil de beber como uma boa cerveja Lager. Apesar de ter uma característica mais artesanal, a marca promete que o preço da nova cerveja acompanhará o valor de outras cervejas mais populares da marca. A Eisenbahn recomenda ao seu consumidor uma forma diferente de consumir a Unfiltered: De cabeça para baixo! Antes de abrir a latinha ou tirar a tampinha da garrafa, é necessário virar a embalagem de ponta-cabeça, dando uma leve "chacoalhada" no líquido, como se fosse um suco de polpa. Tanto a “latinha” quanto a long neck virão com rótulos de ponta-cabeça para indicar uma nova forma de consumir o produto: ”Podemos comparar a apreciação de uma Eisenbahn Pilsen Unfiltered com a de um suco de polpa, onde o líquido precisa ser misturado para que o gosto fique ainda melhor. Para este lançamento, criamos as embalagens com as artes invertidas para ressaltarmos, de uma forma intuitiva e divertida, a importância do ritual de girar e misturar tudo para ter uma verdadeira experiência final de degustação”, explica Karina Pugliesi, gerente de marketing da marca para o portal GPS Lifetime. Segundo Karina, a marca promete revolucionar o mundo cervejeiro: “São vinte anos construindo o mercado artesanal. E agora chegou a hora de novamente a Eisenbahn continuar seus esforços de democratizar o segmento. Com a chegada da Eisenbahn Pilsen Unfiltered, vamos literalmente virar a concepção do mercado cervejeiro de cabeça para baixo no quesito sabor único, frescor especial e qualidade artesanal", afirma a gerente de marketing da Eisenbahn',
    },
    {
      src: "./jornalismo/jogador-futebol.jpg",
      alt: "jogador",
      id: 4,
      title:
        "Jogador de futebol é condenado por tentativa de homicídio em Venâncio Aires",
      text: "Nesta terça-feira, 7, o Tribunal do Júri da Comarca de Venâncio Aires, decidiu condenar o jogador de futebol, William Cavalheiro Ribeiro, pelo crime de tentativa de homicídio simples, cometido contra o árbitro Rodrigo Crivellaro, em 2021, durante uma partida de futebol válida pela Divisão de Acesso.Segundo o veredito dos sete jurados, composto por quatro homens e três mulheres, o Juiz de direito João Francisco Goulart Borges aplicou o réu, pena definida de dois anos e oito meses de reclusão em regime semiaberto, inicialmente. O motivo fútil foi afastada pelos jurados. O réu poderá recorrer em liberdade. O magistrado ainda determinou que o jogador deva indenizar a vítima por danos materiais, no valor de R$18 mil. O réu e a vítima compareceram ao Salão do Júri do Foro local durante todo o julgamento, sendo os únicos ouvidos em plenário. O primeiro a prestar depoimento foi Crivellaro, que contou o episódio que aconteceu no campo do Estádio Edmundo Feix, do Guarani. Segundo o árbitro, que ficou com uma cicatriz na boca por causa do soco, e que, após ser derrubado, não se recorda do que aconteceu. “Não lembro de nada, vi nas imagens, Apaguei e lembro de acordar no hospital”. Por consequência do chute que levou na nuca, Crivellaro sofreu lesão na sexta vértebra, o que o obrigou a se afastar de suas atividades e a usar um colar cervical por 60 dias. “Poderia ter ficado numa cadeira de rodas”, disse ter ouvido dos médicos. Crivellaro abandonou a arbitragem profissional, por onde atuou como juiz da Federação Gaúcha de Futebol. Atualmente, ele trabalha como professor de padre. Quando perguntado, disse que sempre teve o respeito pelos jogadores, “Nunca xinguei jogador nenhum”, afirmou. Durante o interrogatório, William negou ter tentado matar o árbitro. “Nunca tive a intenção, Jamais”. O jogador contou que durante o jogo, havia recebido uma joelhada do goleiro do time adversário, e quando sofreu uma falta questionou o árbitro do jogo por ter sido marcada. Após, levou um cartão amarelo e vieram as agressões. “Eu realmente agredi, foi errado, mas não foi tentativa de homicídio”. Atualmente afastado do futebol profissional por causa de uma suspensão de dois anos, durante o interrogatório, William se volta à plateia do Salão do Juri, onde estava Crivellaro, e pediu desculpas pelas agressões. “Me arrependo bastante”, revelou.",
    },
    {
      src: "./jornalismo/nutricionista.jpg",
      alt: "nutricionista",
      id: 5,
      title: "Júlia Senna vence o Melhor de Portão na categoria nutricionista",
      text: "Uma história de sucesso que começa a se consolidar em Portão. A nutricionista Júlia Senna foi a preferida pelos portonenses no Melhor de Portão e comprovou que seus oito anos de atuação como nutricionista no município estão criando relações de confiança com seus pacientes. Em Portão ela encontrou o município certo para crescer na carreira. “Eu sou natural da cidade de Santa Vitória do Palmar, me formei em nutrição e logo comecei a atender em Caxias do Sul. Decidi vir para Portão porque a família do meu noivo é daqui e, tanto eles quanto a cidade, me acolheram de braços abertos.”. Júlia revela que sua clientela foi construída por indicações de seus pacientes e, que há pouco mais de um ano utiliza as redes sociais para prospectar mais clientes. “Se não fosse pelas pessoas que atendi, e pela confiança que adquiri, com elas no início da minha carreira em Portão, eu não teria os pacientes que tenho hoje, que são fiéis.”. Sua carreira iniciou com atendimentos em uma sala de avaliações na Academia Fênix. Em seguida, Júlia passou a atender no consultório da Psicóloga Rosângela Vendusco. Atualmente, tem um consultório na Clínica Zagonel, onde passou a ganhar mais visibilidade. Com um fluxo de atendimento constante, a nutricionista trabalha com nutrição comportamental com especialização na universidade Feevale. Para ela, seu diferencial é tratar a nutrição como uma mudança de comportamento, não simplesmente uma dieta a ser seguida. “É uma nutrição que envolve muito mais do que somente uma dieta, uma restrição, mas é algo que envolve toda uma mudança comportamental a longo prazo, possibilitando aos meus pacientes, que mantenham bons hábitos alimentares por toda a vida.”. Sobre ter sido eleita a Melhor de Portão, Júlia agradece. “Quero agradecer todos os meus pacientes que me acompanham nesses oito anos de jornada. Sou muito grata a população de Portão por ter me acolhido. Sempre farei meu melhor, estudando e me especializando a cada ano que passa. Obrigada!”.",
    },
  ];
  return (
    <Flex
      w={"99.2vw"}
      h={{ lg: "94vh", md: "fit-content", sm: "fit-content" }}
      backgroundColor={"#107DAA"}
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
      color="white"
      textAlign="center"
      display="flex"
      flexDir={"column"}
    >
      <Flex w={"100%"} h={"10%"} alignItems={"center"}>
        <Text ml={"10%"} fontFamily={""} fontSize={"5xl"} color={"black"}>
          Jornalismo
        </Text>
      </Flex>
      <Flex w={"100%"} h={"90%"} flexDir={"column"}>
        <Flex
          w={"100%"}
          h={"100%"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Flex w={"40%"} h={"90%"} bgColor={"black"}>
            <CustomSwiper setPage={setPage} bgColor={"#107DAA"}>
              {Images.map((image, index) => (
                <Image key={index} src={image.src} alt={image.alt} />
              ))}
            </CustomSwiper>
          </Flex>
          <Flex
            w={"50%"}
            h={"90%"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            p={2}
          >
            <Text color={"black"} fontWeight={"bold"} fontSize={"3xl"} mb={4}>
              {Images.find((image) => image.id === page)?.title}
            </Text>
            <Text fontSize={"md"} color={"black"} textAlign={"center"}>
              {Images.find((image) => image.id === page)?.text}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
