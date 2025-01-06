const SimpleStatusIcons = (() => {
    const defineStatusIcons = function (data) {
        window.CONFIG.statusEffects = [{
            'id': 'advantage',
            'name': 'Advantage',
            'icon': 'modules/dnd5e-status-icons/Conditions/Advantage.png'
        }, {
            'id': 'ancestral protectors',
            'name': 'Ancestral Protectors',
            'icon': 'modules/dnd5e-status-icons/Conditions/Ancenstral Protectors.png'
        }, {
            'id': 'armor of agathys',
            'name': 'Armor of Agathys',
            'icon': 'modules/dnd5e-status-icons/Conditions/Armor of Agathys.png'
        }, {
            'id': 'baned',
            'name': 'Baned',
            'icon': 'modules/dnd5e-status-icons/Conditions/Baned.png'
        }, {
            'id': "bear's endurance",
            'name': "Bear's Endurance",
            'icon': "modules/dnd5e-status-icons/Conditions/Bear's Endurance.png"
        }, {
            'id': 'bleeding out',
            'name': 'Bleeding Out',
            'icon': 'modules/dnd5e-status-icons/Conditions/Bleeding Out.png'
        }, {
            'id': 'blessed',
            'name': 'Blessed',
            'icon': 'modules/dnd5e-status-icons/Conditions/Blessed.png'
        }, {
            'id': 'blinded',
            'name': 'Blinded',
            'icon': 'modules/dnd5e-status-icons/Conditions/Blinded.png'
        }, {
            'id': 'blink',
            'name': 'Blink',
            'icon': 'modules/dnd5e-status-icons/Conditions/Blink.png'
        }, {
            'id': 'blur',
            'name': 'Blur',
            'icon': 'modules/dnd5e-status-icons/Conditions/Blur.png'
        }, {
            'id': "bull's strength",
            'name': "Bull's Strength",
            'icon': "modules/dnd5e-status-icons/Conditions/Bull's Strength.png"
        }, {
            'id': "cat's grace",
            'name': "Cat's Grace",
            'icon': "modules/dnd5e-status-icons/Conditions/Cat's Grace.png"
        }, {
            'id': 'cause of fear',
            'name': 'Cause of Fear',
            'icon': 'modules/dnd5e-status-icons/Conditions/Cause of Fear.png'
        }, {
            'id': 'charmed',
            'name': 'Charmed',
            'icon': 'modules/dnd5e-status-icons/Conditions/Charmed.png'
        }, {
            'id': 'compelled duel',
            'name': 'Compelled Duel',
            'icon': 'modules/dnd5e-status-icons/Conditions/Compelled Duel.png'
        }, {
            'id': 'concentration',
            'name': 'Concentration',
            'icon': 'modules/dnd5e-status-icons/Conditions/Concentration.png'
        }, {
            'id': 'confused',
            'name': 'Confused',
            'icon': 'modules/dnd5e-status-icons/Conditions/Confused.png'
        }, {
            'id': 'deafened',
            'name': 'Deafened',
            'icon': 'modules/dnd5e-status-icons/Conditions/Deafened.png'
        }, {
            'id': 'disadvantage',
            'name': 'Disadvantage',
            'icon': 'modules/dnd5e-status-icons/Conditions/Disadvantage.png'
        }, {
            'id': 'divine favor',
            'name': 'Divine Favor',
            'icon': 'modules/dnd5e-status-icons/Conditions/Divine Favor.png'
        }, {
            'id': 'dodge action',
            'name': 'Dodge Action',
            'icon': 'modules/dnd5e-status-icons/Conditions/Dodge Action.png'
        }, {
            'id': 'dead',
            'name': 'EFFECT.StatusDead',
            'icon': 'icons/svg/skull.svg'
        }, {
            'id': "eagle's splendor",
            'name': "Eagle's Splendor",
            'icon': "modules/dnd5e-status-icons/Conditions/Eagle's Splendor.png"
        }, {
            'id': 'entangled',
            'name': 'Entangled',
            'icon': 'modules/dnd5e-status-icons/Conditions/Entangled.png'
        }, {
            'id': 'exhaustion',
            'name': 'Exhausted',
            'icon': 'modules/dnd5e-status-icons/Conditions/Exhausted.png'
        }, {
            'id': 'flying',
            'name': 'Flying',
            'icon': 'modules/dnd5e-status-icons/Conditions/Flying.png'
        }, {
            'id': "fox's cunning",
            'name': "Fox's Cunning",
            'icon': "modules/dnd5e-status-icons/Conditions/Fox's Cunning.png"
        }, {
            'id': 'frightened',
            'name': 'Frightened',
            'icon': 'modules/dnd5e-status-icons/Conditions/Frightened.png'
        }, {
            'id': 'grappled',
            'name': 'Grappled',
            'icon': 'modules/dnd5e-status-icons/Conditions/Grappled.png'
        }, {
            'id': 'hasted',
            'name': 'Hasted',
            'icon': 'modules/dnd5e-status-icons/Conditions/Hasted.png'
        }, {
            'id': 'hex',
            'name': 'Hex',
            'icon': 'modules/dnd5e-status-icons/Conditions/Hex.png'
        }, {
            'id': "hexblade's curse",
            'name': "Hexblade's Curse",
            'icon': "modules/dnd5e-status-icons/Conditions/Hexblade's Curse.png"
        }, {
            'id': 'hidden',
            'name': 'Hidden',
            'icon': 'modules/dnd5e-status-icons/Conditions/Hidden.png'
        }, {
            'id': 'highlighted',
            'name': 'Highlighted',
            'icon': 'modules/dnd5e-status-icons/Conditions/Highlighted.png'
        }, {
            'id': 'holding action',
            'name': 'Holding Action',
            'icon': 'modules/dnd5e-status-icons/Conditions/Holding Action.png'
        }, {
            'id': 'incapacitated',
            'name': 'Incapacitated',
            'icon': 'modules/dnd5e-status-icons/Conditions/Incapacitated.png'
        }, {
            'id': 'insightful fighting',
            'name': 'Insightful Fighting',
            'icon': 'modules/dnd5e-status-icons/Conditions/Insightful Fighting.png'
        }, {
            'id': 'inspired',
            'name': 'Inspired',
            'icon': 'modules/dnd5e-status-icons/Conditions/Inspired.png'
        }, {
            'id': 'invisible',
            'name': 'Invisible',
            'icon': 'modules/dnd5e-status-icons/Conditions/Invisible.png'
        }, {
            'id': 'mage armor',
            'name': 'Mage Armor',
            'icon': 'modules/dnd5e-status-icons/Conditions/Mage Armor.png'
        }, {
            'id': 'mark',
            'name': 'Mark',
            'icon': 'modules/dnd5e-status-icons/Conditions/Mark.png'
        }, {
            'id': 'mirror image',
            'name': 'Mirror Image',
            'icon': 'modules/dnd5e-status-icons/Conditions/Mirror Image.png'
        }, {
            'id': 'on fire',
            'name': 'On Fire',
            'icon': 'modules/dnd5e-status-icons/Conditions/On Fire.png'
        }, {
            'id': "owl's wisdom",
            'name': "Owl's Wisdom",
            'icon': "modules/dnd5e-status-icons/Conditions/Owl's Wisdom.png"
        }, {
            'id': 'paralyzed',
            'name': 'Paralyzed',
            'icon': 'modules/dnd5e-status-icons/Conditions/Paralyzed.png'
        }, {
            'id': 'petrified',
            'name': 'Petrified',
            'icon': 'modules/dnd5e-status-icons/Conditions/Petrified.png'
        }, {
            'id': 'poisoned',
            'name': 'Poisoned',
            'icon': 'modules/dnd5e-status-icons/Conditions/Poisoned.png'
        }, {
            'id': 'possessed',
            'name': 'Possessed',
            'icon': 'modules/dnd5e-status-icons/Conditions/Possessed.png'
        }, {
            'id': 'prone',
            'name': 'Prone',
            'icon': 'modules/dnd5e-status-icons/Conditions/Prone.png'
        }, {
            'id': 'raging',
            'name': 'Raging',
            'icon': 'modules/dnd5e-status-icons/Conditions/Raging.png'
        }, {
            'id': 'reaction used',
            'name': 'Reaction Used',
            'icon': 'modules/dnd5e-status-icons/Conditions/Reaction Used.png'
        }, {
            'id': 'restrained',
            'name': 'Restrained',
            'icon': 'modules/dnd5e-status-icons/Conditions/Restrained.png'
        }, {
            'id': 'sanctuary',
            'name': 'Sanctuary',
            'icon': 'modules/dnd5e-status-icons/Conditions/Sanctuary.png'
        }, {
            'id': 'shell defense',
            'name': 'Shell Defense',
            'icon': 'modules/dnd5e-status-icons/Conditions/Shell Defense.png'
        }, {
            'id': 'shield of faith',
            'name': 'Shield of Faith',
            'icon': 'modules/dnd5e-status-icons/Conditions/Shield of Faith.png'
        }, {
            'id': 'shifted',
            'name': 'Shifted',
            'icon': 'modules/dnd5e-status-icons/Conditions/Shifted.png'
        }, {
            'id': "slayer's prey",
            'name': "Slayer's Prey",
            'icon': "modules/dnd5e-status-icons/Conditions/Slayer's Prey.png"
        }, {
            'id': "slowed",
            'name': "Slowed",
            'icon': "modules/dnd5e-status-icons/Conditions/Slowed.png"
        }, {
            'id': 'spirit guardians',
            'name': 'Spirit Guardians',
            'icon': 'modules/dnd5e-status-icons/Conditions/Spirit Guardians.png'
        }, {
            'id': 'stabilized',
            'name': 'Stabilized',
            'icon': 'modules/dnd5e-status-icons/Conditions/Stabilized.png'
        }, {
            'id': 'stunned',
            'name': 'Stunned',
            'icon': 'modules/dnd5e-status-icons/Conditions/Stunned.png'
        }, {
            'id': 'summoning',
            'name': 'Summoning',
            'icon': 'modules/dnd5e-status-icons/Conditions/Summoning.png'
        }, {
            'id': 'symbiotic entity',
            'name': 'Symbiotic Entity',
            'icon': 'modules/dnd5e-status-icons/Conditions/Symbiotic Entity.png'
        }, {
            'id': 'truesight',
            'name': 'Truesight',
            'icon': 'modules/dnd5e-status-icons/Conditions/Truesight.png'
        }, {
            'id': 'turned',
            'name': 'Turned',
            'icon': 'modules/dnd5e-status-icons/Conditions/Turned.png'
        }, {
            'id': 'unconscious',
            'name': 'Unconcious',
            'icon': 'modules/dnd5e-status-icons/Conditions/Unconcious.png'
        }, {
            'id': 'warding bond',
            'name': 'Warding Bond',
            'icon': 'modules/dnd5e-status-icons/Conditions/Warding Bond.png'
        }, {
            'id': 'wounded',
            'name': 'Wounded',
            'icon': 'modules/dnd5e-status-icons/Conditions/wounded.svg'
        }]
    }

    // HOOKS  
    Hooks.once("ready", function () {
        defineStatusIcons();
    });
})();