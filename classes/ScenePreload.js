
// ****************************** Scene Preload ***************************
class ScenePreload extends Phaser.Scene
{
    constructor()
    {
        super("preload"); 
   }

    preload(){
        this.load.image('caramel', 'assets/img/caramel1.png');
    }

    create(){
         if (this.game.scale.isPortrait) {
            this.game.scale.on('orientationchange', function (orientation) {
                //delete listener 
                this.game.scale.removeAllListeners();
                // restart the whole phaser game (fix i found, not the best but it works)
                //this.game.destroy(true);
               // this.game = new Phaser.Game(config);
                this.scene.start("caramel");              
            }, this);
        }else {
            this.scene.start("caramel"); 
        }
    }
    update(){
    }
}