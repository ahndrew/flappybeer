(function(){

var game = new Phaser.Game(512, 512, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

    game.load.image('sky', '/images/sky2.png');
    game.load.image('ground', '/images/platform.png');
    game.load.spritesheet('beerkeg', '/images/beerkeg.png', 24, 21);

}

var FLAP = 400;

var beerkeg;
var ground;
var cursors;
var platforms;

var stars;
var score = 0;
var scoreText;

function create() {

    background = game.add.graphics(0, 0);
    background.beginFill(0x87CEEB, 1);
    background.drawRect(0, 0, game.world.width, game.world.height);
    background.endFill();

    music = game.add.audio('boden');
    //music.play();

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = game.add.group();

    // Here we create the ground.
    var ground = platforms.create(0, game.world.height - 64, 'ground');

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(2, 2);

    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;

    // The player and its settings
    beerkeg = createBeerKeg();

}

function update() {

    game.physics.collide(beerkeg, platforms);

    var dvy = FLAP + beerkeg.body.velocity.y;
    beerkeg.angle = (90 * dvy / FLAP) - 180;
    if (beerkeg.angle < -30) {
        beerkeg.angle = -30;
                                                  }
     //bgtile.tilePosition.x -= 10;
/*
    //  Collide the player and the stars with the platforms
    game.physics.collide(player, platforms);
    game.physics.collide(stars, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.overlap(player, stars, collectStar, null, this);

    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -650;
    }
*/
}

function createBeerKeg() {

    beerkeg = game.add.sprite(0, 0, 'beerkeg');
    beerkeg.anchor.setTo(0.5, 0.5);
    beerkeg.animations.add('flap', [0, 1, 2, 3], 10, true);
    beerkeg.inputEnabled = true;
    beerkeg.body.collideWorldBounds = true;
    beerkeg.body.gravity.y = 1000;

    beerkeg.body.allowGravity = true;
    beerkeg.angle = 0;
    beerkeg.reset(game.world.width / 4, game.world.height / 2);
    beerkeg.scale.setTo(2, 2);
    beerkeg.animations.play('flap');

    game.input.onDown.add(flap);
   
    var flapKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    flapKey.onDown.add(flap);

    return beerkeg;
}

function flap() {
    beerkeg.body.velocity.y = -400;
}

})();
