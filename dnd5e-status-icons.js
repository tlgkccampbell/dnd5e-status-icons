const SimpleStatusIcons = (() => {
    const defineStatusIcons = function (data) {
        window.CONFIG.statusEffects = [{
            'id': 'advantage',
            'name': 'Advantage',
            'img': 'modules/dnd5e-status-icons/Conditions/Advantage.png'
        }, {
            'id': 'ancestral protectors',
            'name': 'Ancestral Protectors',
            'img': 'modules/dnd5e-status-icons/Conditions/Ancenstral Protectors.png'
        }, {
            'id': 'armor of agathys',
            'name': 'Armor of Agathys',
            'img': 'modules/dnd5e-status-icons/Conditions/Armor of Agathys.png'
        }, {
            'id': 'baned',
            'name': 'Baned',
            'img': 'modules/dnd5e-status-icons/Conditions/Baned.png'
        }, {
            'id': "bear's endurance",
            'name': "Bear's Endurance",
            'img': "modules/dnd5e-status-icons/Conditions/Bear's Endurance.png"
        }, {
            'id': 'bleeding out',
            'name': 'Bleeding Out',
            'img': 'modules/dnd5e-status-icons/Conditions/Bleeding Out.png'
        }, {
            'id': 'blessed',
            'name': 'Blessed',
            'img': 'modules/dnd5e-status-icons/Conditions/Blessed.png'
        }, {
            'id': 'blinded',
            'name': 'Blinded',
            'img': 'modules/dnd5e-status-icons/Conditions/Blinded.png'
        }, {
            'id': 'blink',
            'name': 'Blink',
            'img': 'modules/dnd5e-status-icons/Conditions/Blink.png'
        }, {
            'id': 'blur',
            'name': 'Blur',
            'img': 'modules/dnd5e-status-icons/Conditions/Blur.png'
        }, {
            'id': "bull's strength",
            'name': "Bull's Strength",
            'img': "modules/dnd5e-status-icons/Conditions/Bull's Strength.png"
        }, {
            'id': "cat's grace",
            'name': "Cat's Grace",
            'img': "modules/dnd5e-status-icons/Conditions/Cat's Grace.png"
        }, {
            'id': 'cause of fear',
            'name': 'Cause of Fear',
            'img': 'modules/dnd5e-status-icons/Conditions/Cause of Fear.png'
        }, {
            'id': 'charmed',
            'name': 'Charmed',
            'img': 'modules/dnd5e-status-icons/Conditions/Charmed.png'
        }, {
            'id': 'compelled duel',
            'name': 'Compelled Duel',
            'img': 'modules/dnd5e-status-icons/Conditions/Compelled Duel.png'
        }, {
            'id': 'concentration',
            'name': 'Concentration',
            'img': 'modules/dnd5e-status-icons/Conditions/Concentration.png'
        }, {
            'id': 'confused',
            'name': 'Confused',
            'img': 'modules/dnd5e-status-icons/Conditions/Confused.png'
        }, {
            'id': 'deafened',
            'name': 'Deafened',
            'img': 'modules/dnd5e-status-icons/Conditions/Deafened.png'
        }, {
            'id': 'disadvantage',
            'name': 'Disadvantage',
            'img': 'modules/dnd5e-status-icons/Conditions/Disadvantage.png'
        }, {
            'id': 'divine favor',
            'name': 'Divine Favor',
            'img': 'modules/dnd5e-status-icons/Conditions/Divine Favor.png'
        }, {
            'id': 'dodge action',
            'name': 'Dodge Action',
            'img': 'modules/dnd5e-status-icons/Conditions/Dodge Action.png'
        }, {
            'id': 'dead',
            'name': 'EFFECT.StatusDead',
            'img': 'icons/svg/skull.svg'
        }, {
            'id': "eagle's splendor",
            'name': "Eagle's Splendor",
            'img': "modules/dnd5e-status-icons/Conditions/Eagle's Splendor.png"
        }, {
            'id': 'entangled',
            'name': 'Entangled',
            'img': 'modules/dnd5e-status-icons/Conditions/Entangled.png'
        }, {
            'id': 'exhaustion',
            'name': 'Exhausted',
            'img': 'modules/dnd5e-status-icons/Conditions/Exhausted.png'
        }, {
            'id': 'flying',
            'name': 'Flying',
            'img': 'modules/dnd5e-status-icons/Conditions/Flying.png'
        }, {
            'id': "fox's cunning",
            'name': "Fox's Cunning",
            'img': "modules/dnd5e-status-icons/Conditions/Fox's Cunning.png"
        }, {
            'id': 'frightened',
            'name': 'Frightened',
            'img': 'modules/dnd5e-status-icons/Conditions/Frightened.png'
        }, {
            'id': 'grappled',
            'name': 'Grappled',
            'img': 'modules/dnd5e-status-icons/Conditions/Grappled.png'
        }, {
            'id': 'hasted',
            'name': 'Hasted',
            'img': 'modules/dnd5e-status-icons/Conditions/Hasted.png'
        }, {
            'id': 'hex',
            'name': 'Hex',
            'img': 'modules/dnd5e-status-icons/Conditions/Hex.png'
        }, {
            'id': "hexblade's curse",
            'name': "Hexblade's Curse",
            'img': "modules/dnd5e-status-icons/Conditions/Hexblade's Curse.png"
        }, {
            'id': 'hidden',
            'name': 'Hidden',
            'img': 'modules/dnd5e-status-icons/Conditions/Hidden.png'
        }, {
            'id': 'highlighted',
            'name': 'Highlighted',
            'img': 'modules/dnd5e-status-icons/Conditions/Highlighted.png'
        }, {
            'id': 'holding action',
            'name': 'Holding Action',
            'img': 'modules/dnd5e-status-icons/Conditions/Holding Action.png'
        }, {
            'id': 'incapacitated',
            'name': 'Incapacitated',
            'img': 'modules/dnd5e-status-icons/Conditions/Incapacitated.png'
        }, {
            'id': 'insightful fighting',
            'name': 'Insightful Fighting',
            'img': 'modules/dnd5e-status-icons/Conditions/Insightful Fighting.png'
        }, {
            'id': 'inspired',
            'name': 'Inspired',
            'img': 'modules/dnd5e-status-icons/Conditions/Inspired.png'
        }, {
            'id': 'invisible',
            'name': 'Invisible',
            'img': 'modules/dnd5e-status-icons/Conditions/Invisible.png'
        }, {
            'id': 'mage armor',
            'name': 'Mage Armor',
            'img': 'modules/dnd5e-status-icons/Conditions/Mage Armor.png'
        }, {
            'id': 'mark',
            'name': 'Mark',
            'img': 'modules/dnd5e-status-icons/Conditions/Mark.png'
        }, {
            'id': 'mirror image',
            'name': 'Mirror Image',
            'img': 'modules/dnd5e-status-icons/Conditions/Mirror Image.png'
        }, {
            'id': 'on fire',
            'name': 'On Fire',
            'img': 'modules/dnd5e-status-icons/Conditions/On Fire.png'
        }, {
            'id': "owl's wisdom",
            'name': "Owl's Wisdom",
            'img': "modules/dnd5e-status-icons/Conditions/Owl's Wisdom.png"
        }, {
            'id': 'paralyzed',
            'name': 'Paralyzed',
            'img': 'modules/dnd5e-status-icons/Conditions/Paralyzed.png'
        }, {
            'id': 'petrified',
            'name': 'Petrified',
            'img': 'modules/dnd5e-status-icons/Conditions/Petrified.png'
        }, {
            'id': 'poisoned',
            'name': 'Poisoned',
            'img': 'modules/dnd5e-status-icons/Conditions/Poisoned.png'
        }, {
            'id': 'possessed',
            'name': 'Possessed',
            'img': 'modules/dnd5e-status-icons/Conditions/Possessed.png'
        }, {
            'id': 'prone',
            'name': 'Prone',
            'img': 'modules/dnd5e-status-icons/Conditions/Prone.png'
        }, {
            'id': 'raging',
            'name': 'Raging',
            'img': 'modules/dnd5e-status-icons/Conditions/Raging.png'
        }, {
            'id': 'reaction used',
            'name': 'Reaction Used',
            'img': 'modules/dnd5e-status-icons/Conditions/Reaction Used.png'
        }, {
            'id': 'restrained',
            'name': 'Restrained',
            'img': 'modules/dnd5e-status-icons/Conditions/Restrained.png'
        }, {
            'id': 'sanctuary',
            'name': 'Sanctuary',
            'img': 'modules/dnd5e-status-icons/Conditions/Sanctuary.png'
        }, {
            'id': 'shell defense',
            'name': 'Shell Defense',
            'img': 'modules/dnd5e-status-icons/Conditions/Shell Defense.png'
        }, {
            'id': 'shield of faith',
            'name': 'Shield of Faith',
            'img': 'modules/dnd5e-status-icons/Conditions/Shield of Faith.png'
        }, {
            'id': 'shifted',
            'name': 'Shifted',
            'img': 'modules/dnd5e-status-icons/Conditions/Shifted.png'
        }, {
            'id': "slayer's prey",
            'name': "Slayer's Prey",
            'img': "modules/dnd5e-status-icons/Conditions/Slayer's Prey.png"
        }, {
            'id': "slowed",
            'name': "Slowed",
            'img': "modules/dnd5e-status-icons/Conditions/Slowed.png"
        }, {
            'id': 'spirit guardians',
            'name': 'Spirit Guardians',
            'img': 'modules/dnd5e-status-icons/Conditions/Spirit Guardians.png'
        }, {
            'id': 'stabilized',
            'name': 'Stabilized',
            'img': 'modules/dnd5e-status-icons/Conditions/Stabilized.png'
        }, {
            'id': 'stunned',
            'name': 'Stunned',
            'img': 'modules/dnd5e-status-icons/Conditions/Stunned.png'
        }, {
            'id': 'summoning',
            'name': 'Summoning',
            'img': 'modules/dnd5e-status-icons/Conditions/Summoning.png'
        }, {
            'id': 'symbiotic entity',
            'name': 'Symbiotic Entity',
            'img': 'modules/dnd5e-status-icons/Conditions/Symbiotic Entity.png'
        }, {
            'id': 'truesight',
            'name': 'Truesight',
            'img': 'modules/dnd5e-status-icons/Conditions/Truesight.png'
        }, {
            'id': 'turned',
            'name': 'Turned',
            'img': 'modules/dnd5e-status-icons/Conditions/Turned.png'
        }, {
            'id': 'unconscious',
            'name': 'Unconcious',
            'img': 'modules/dnd5e-status-icons/Conditions/Unconcious.png'
        }, {
            'id': 'warding bond',
            'name': 'Warding Bond',
            'img': 'modules/dnd5e-status-icons/Conditions/Warding Bond.png'
        }, {
            'id': 'wounded',
            'name': 'Wounded',
            'img': 'modules/dnd5e-status-icons/Conditions/wounded.svg'
        }]
    }

    // HOOKS  
    Hooks.once("ready", function () {
        defineStatusIcons();
    });
})();