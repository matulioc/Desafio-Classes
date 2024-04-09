class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        let hit
        switch (this.type) {
            case 'mago':
                hit = 'Magia'
                this.type = 'Mago'
                break;
            case 'guerreiro':
                hit = 'Espada'
                this.type = 'Guerreiro'
                break;
            case 'monge':
                hit = 'Artes Marciais'
                this.type = 'Monge'
                break;
            case 'ninja':
                hit = 'Shuriken'
                this.type = 'Ninja'
                break;
        }
        console.log(`O ${this.type} atacou usando ${hit}`)
    }
}

const player = new hero('Marco', 25 , 'monge')
player.attack()
