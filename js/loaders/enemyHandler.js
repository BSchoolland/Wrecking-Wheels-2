// EnemyHandler.js

class EnemyHandler {
    constructor(progressBar, preLoadEnemies = true) {
        this.enemyContraptionsJSON = {};
        this.progressBar = progressBar;
        if (preLoadEnemies){
            this.preLoadEnemies();
        }
    }

    async preLoadEnemies() {
        this.RightFacingEnemies = [
            'spikeCar',
            'largeSpikeCar',
            'world1Boss',
            'rocketCar',
            'smackerR',
            'mortar',
        ];
        this.LeftFacingEnemies = [
            'largeSpikeCarL',
            'tankL',
            'flierL',
            'whackerL',
            'porcupine',
            'yeet',
        ];
        
        this.enemyContraptionsJSON = {
            "barge": "/json-enemies/barge.json",
            "base": "/json-enemies/base.json",
            "box": "/json-enemies/box.json",
            "car": "/json-enemies/car.json",
            "delayedRocketCar": "/json-enemies/delayedRocketCar.json",
            "drivingCarL": "/json-enemies/drivingCarL.json",
            "flameTank": "/json-enemies/flameTank.json",
            "flierL": "/json-enemies/flierL.json",
            "largeSpikeCar": "/json-enemies/largeSpikeCar.json",
            "largeSpikeCarL": "/json-enemies/largeSpikeCarL.json",
            "metalSpikeCar": "/json-enemies/metalSpikeCar.json",
            "missileCar": "/json-enemies/missileCar.json",
            "mortar": "/json-enemies/mortar.json",
            "movingSpikeWall": "/json-enemies/movingSpikeWall.json",
            "nuke": "/json-enemies/nuke.json",
            "porcupine": "/json-enemies/porcupine.json",
            "rocketCar": "/json-enemies/rocketCar.json",
            "smackerR": "/json-enemies/smackerR.json",
            "spikeCar": "/json-enemies/spikeCar.json",
            "spikeCarUnbalanced": "/json-enemies/spikeCarUnbalanced.json",
            "tankL": "/json-enemies/tankL.json",
            "terrifying-bomb-car": "/json-enemies/terrifying-bomb-car.json",
            "tntBox": "/json-enemies/tntBox.json",
            "tntTank": "/json-enemies/tntTank.json",
            "train": "/json-enemies/train.json",
            "truck": "/json-enemies/truck.json",
            "volley": "/json-enemies/volley.json",
            "walker": "/json-enemies/walker.json",
            "whackerL": "/json-enemies/whackerL.json",
            "world1Boss": "/json-enemies/world1Boss.json",
            "world2Boss": "/json-enemies/world2Boss.json",
            "world3Boss": "/json-enemies/world3Boss.json",
            "yeet": "/json-enemies/yeet.json"
        }


        console.log(this.enemyContraptionsJSON)

        console.log("all enemies preloaded");
        if (this.progressBar) this.progressBar.update();
    }
    getEnemyJSON(enemyName) {
        if (enemyName === "randomR") { // a random enemy facing right
            enemyName = this.RightFacingEnemies[Math.floor(Math.random() * this.RightFacingEnemies.length)];
        }
        if (enemyName === "randomL") { // a random enemy facing left
            enemyName = this.LeftFacingEnemies[Math.floor(Math.random() * this.LeftFacingEnemies.length)];
        }
        console.log("Getting enemy JSON for: " + enemyName);
        console.log(this.enemyContraptionsJSON);
        if (this.enemyContraptionsJSON[enemyName] === undefined) {
            console.error("Enemy not found, returning default enemy.");
            // return a default enemy (the first one in the list)
            return this.enemyContraptionsJSON[Object.keys(this.enemyContraptionsJSON)[0]];
        }
        // return the enemy JSON
        return this.enemyContraptionsJSON[enemyName];
    }
}

export default EnemyHandler;