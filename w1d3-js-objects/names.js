var teddyBear = {
    animal: 'bear',
    sound: 'growl',
    color: 'white'
}

var stuffedKitten = {
    animal: 'cat',
    sound: 'meow',
    color: 'tabby',
}

var teddy = teddyBear
var lovey = teddyBear

var mooooo = stuffedKitten
var kiddy = stuffedKitten

lovey = stuffedKitten

// We then experimented in the console doing stuff like
// > teddy.color = 'yellow'
// and seeing that teddyBear was also changed, because
// they were both names to the same underlying object
