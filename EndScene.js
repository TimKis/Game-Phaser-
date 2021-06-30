class EndScene extends Phaser.Scene {
    constructor() {
        super({key: 'EndScene'});
    };

    create(){
        this.add.text(150, 250, 'Game Over', {fontSize: '20px', fill: '#000000'});
        this.add.text(150, 270, 'click to restart the game', {fontSize: '12px', fill: '#000000'});
        this.input.on('pointerup', () => {
            this.scene.stop('EndScene');
            this.scene.start('GameScene');
        })
    }
}