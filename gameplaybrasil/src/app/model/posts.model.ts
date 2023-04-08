export interface postModel {
    title: string,
    subtitle: string,
    description?: string,
    id: number,
    data: string
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
        data: 'string'
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
    data: 'assets/img/banner.jpg'
}