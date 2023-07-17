// Autor: Noah Bompard 21-06-2023
// ****************************** Scene caramel ***************************
class SceneCaramel extends Phaser.Scene {
    constructor() {
        super("caramel");
    }
    init(data){
    }
    preload(){
    }
    create(){
        this.caramel = this.add.image(0, 0, 'caramel');
        this.caramel.scale = 0.5;
        this.caramel.alpha = 0;
        
        this.caramel.preFX.addBloom();
        
        this.tweens.add({
            alpha: 10,
            targets: [this.caramel],
            ease: 'Cubic.easeIn', 
            duration: 1000,
            hold: 1500,
            repeat:0,
            yoyo: true,
            onComplete: () => {
                console.log("Time to code!");
            }
        });

        // Add a listener for the 'resize' event
        this.scale.on('resize', this.resize, this);

        // Call resize method to position the image
        this.resize({width: this.scale.width, height: this.scale.height});
    }
    resize(gameSize) {
        // Update the game dimensions
        const gameWidth = gameSize.width;
        const gameHeight = gameSize.height;
        
        // Update the image position
        this.caramel.setPosition(gameWidth / 2, gameHeight / 2);

        // Update the world bounds
        this.physics.world.setBounds(0, 0, gameWidth, gameHeight);
    }
}
