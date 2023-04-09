export interface postModel {
    title: string,
    subtitle: string,
    description?: string,
    id: number,
    data: string,
    img: string,
    trailer?: string,
    author?: string,
    date?: string
}
export interface headerModel {
    title: string,
    description: string

}

export const posts: Array<postModel> = [
    {
        title: 'Resident Evil 4 | CAPCOM',
        subtitle: '',
        description: 'Saiba mais sobre Resident Evil 4 REMAKE em nosso artigo.',
        id: 1,
        data: `
        <p>
        Embora Resident Evil 4 Remake ainda não tenha sido lançado, há muitas especulações e rumores sobre o que podemos esperar do jogo. O Resident Evil 4 original, lançado em 2005, é considerado um clássico do gênero survival horror, e muitos fãs estão ansiosos para ver como o remake se compara ao jogo original.
        </p>
        <p>
        Com base nas informações e rumores disponíveis até agora, espera- se que o remake apresente gráficos e jogabilidade atualizados, além de algumas mudanças na história e personagens.Espera - se que o jogo seja mais fiel ao material de origem do que outros jogos da série Resident Evil, com menos mudanças na trama e personagens.
        </p>
        <p>
        Também se espera que o remake traga algumas melhorias na jogabilidade, tornando - a mais fluida e responsiva do que o jogo original.O Resident Evil 4 Remake deve manter a mesma sensação de tensão e terror do jogo original, com inimigos assustadores e uma atmosfera sombria.
        </p>
        <p>
        Em resumo, Resident Evil 4 Remake é um dos jogos mais aguardados pelos fãs da franquia, e espera - se que traga melhorias significativas na jogabilidade e gráficos, além de manter a sensação de tensão e terror que o jogo original ofereceu.Só saberemos com certeza como o jogo será quando for lançado, então fique atento para as novidades sobre o jogo.
        </p>
        `,
        img: 'assets/posts/resident-evil-4.jpg',
        trailer: 'https://www.youtube.com/embed/JT2puUySAXk',
        author: 'Ashiok',
        date: 'March 01, 2023'
    }
];


export const headerHome: headerModel = {
    title: 'Jogos para PC, Xbox, PlayStation e Mais / GamePlay Brasil',
    description: 'O GamePlay Brasil é o seu destino para as últimas notícias, análises e dicas sobre os jogos mais populares do momento. De jogos online a jogos para PC e consoles, fique por dentro das últimas novidades e domine o jogo. Visite agora o GamePlay Brasil e jogue como um profissional'
}

export const headerEmphasis: headerModel = {
    title: 'Diablo 4 - O que esperar do novo jogo de RPG de ação da Blizzard',
    description: 'Saiba tudo sobre Diablo 4, o novo jogo de RPG de ação da Blizzard. Descubra o que esperar do jogo, as classes jogáveis, modo multiplayer e muito mais.'
}

export const BannerEmphasis: postModel = {
    title: 'Diablo IV: Digital Deluxe Edition',
    subtitle: '"Diablo 4: Novidades, trailers e data de lançamento - Tudo o que você precisa saber sobre o novo jogo da Blizzard"',
    id: 2,
    data: '',
    img: 'assets/img/banner.jpg'
}