class Agent {
    constructor(name, gender, role, tier) {
        this.name = name;
        this.gender = gender;
        this.role = role;
        this.tier = tier;
    }

    getRole() {
        return this.name + ' role: ' + this.role
    }

    getTier() {
        return this.name + ' tier: ' + this.tier
    }
}


class FlashAgents extends Agent {
    constructor(name, NumbOfFlashes) {
        super();
        this.name = name;
        this.NumbOfFlashes = NumbOfFlashes;
    }

    FlashesNumb() {
        return this.name + ' has ' + this.NumbOfFlashes + ' flashes'
    }
}

class SmokesAgents extends Agent {
    constructor(name, NumbOfSmokes) {
        super()
        this.name = name;
        this.NumbOfSmokes = NumbOfSmokes;
    }

    SmokesNumb() {
        return this.name + ' has ' + this.NumbOfSmokes + ' smokes'
    }
}

class WhoCanTeleport extends Agent {
    constructor(name, NumbOfTps) {
        super()
        this.name = name;
        this.NumbOfTps = NumbOfTps;
    }

    TpsNumb() {
        return this.name + ' has ' + this.NumbOfTps + ' tps'
    }
}

class TrapAgent extends Agent {
    constructor(name, NumbOfTraps) {
        super()
        this.name = name;
        this.NumbOfTraps = NumbOfTraps;
    }

    TrapsNumb() {
        return this.name + ' has ' + this.NumbOfTraps + ' traps'
    }
}

class BestMapFor extends Agent {
    constructor(name, BestMapName) {
        super()
        this.name = name;
        this.BestMapName = BestMapName;
    }

    BestMap() {
        return 'Best map for ' + this.name + ': ' + this.BestMapName
    }
    return 
}


var Phoenix = new Agent('Phoenix', 'm', 'duelist', 'A');
console.log(Phoenix);
console.log(Phoenix.getRole());

var Yoru = new Agent('Yoru', 'm', 'duelist', 'C');
console.log(Yoru);
console.log(Yoru.getTier());

var Phoenix = new FlashAgents('Phoenix', '2');
console.log(Phoenix.FlashesNumb());

var Brimstone = new SmokesAgents('Brimstone', '3');
console.log(Brimstone.SmokesNumb());

var Yoru = new WhoCanTeleport('Yoru', '2');
console.log(Yoru.TpsNumb());

var Cypher = new TrapAgent('Cypher', '4');
console.log(Cypher.TrapsNumb());



var Viper = new BestMapFor('Viper', 'Breeze');
console.log(Viper.BestMap())