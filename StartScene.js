class StartScene extends Phaser.Scene {
    constructor(){
      super({key:'StartScene'});
    }

    create(){
      this.add.text(150, 250, 'Let the Game begin', {fontSize: '15px', fill: '#000000'});

      this.input.on('pointerup', () => {
        this.scene.stop('StartScene');
        this.scene.start('GameScene');
      });
    }
  };
  