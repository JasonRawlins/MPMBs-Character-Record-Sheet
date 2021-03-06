SpellsList["abi-dalzim's horrid wilting"] = { //note the use of only lower case! The spelling here is used to identify the spell with and has to be exactly the same as "name" but in lower case. Also note the absence of the word "var" and the use of brackets []
	
	name : "Abi-Dalzim's Horrid Wilting", //Required; The name of the spell. This will be put in the Spell field on the Spell Sheet. Except, if a "nameShort" is present, this name will be put in the mouseover text (tooltip) of the Spell field on the Spell Sheet.
	
	nameShort : "Abi-D's Horrid Wilting", //Optional; A shortened name of the spell that fits on the Spell Sheet. If present, this name will be put on the Spell Sheet and the full name above will be put in the mouseover text (tooltip) of the Spell field on the Spell Sheet.
	
	nameAlt : "Horrid Wilting", //Optional; An alternative name that can be used to identify the spell with on the sheet
	
	classes : ["bard", "cleric", "druid", "sorcerer", "wizard"], //Required; Array of all the classes that have this spell on their list. Needs at least one entry. Even with one entry you still need to put the brackets around it []. note the use of only lower case!
	
	source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. //Note that filling out this incorrectly will prohibit the spell from showing up in the spell selection dialogues. //If you want to add a custom source, see "Homebrew Syntax - SourceList.js"
	
	ritual : false, //Required; Whether (true) or not (false) this spell is a ritual
	
	level : 0, //Required; The Spell Level. Has to be a number from 0 to 9
	
	school : "Trans", //Required; Spell School as it will show up on the Spell Sheet; Can only select from: "Abjur", "Conj", "Div", "Ench", "Evoc", "Illus", "Necro", "Trans"
	
	time : "1 min", //Required; Casting Time as it will show up on the Spell Sheet
	
	range : "Touch", //Required; Spell Range as it will show up on the Spell Sheet
	
	components : "V,S,M", //Required; Components as they will show up on the Spell Sheet
	
	compMaterial : "Two lodestones", //Optional; Material Component. This string will be put in the mouseover text (tooltip) of the component field
	
	duration : "Instantaneous", //Required; Spell Duration as it will show up on the Spell Sheet
	
	description : "Repair a single broken object no larger than 1 cu ft; can't restore magic to broken magic item", //Required; Short Spell Description as it will show up on the Spell Sheet
	
	descriptionFull : "This spell repairs a single break or tear in an object you touch, such as broken chain link, two halves of a broken key, a torn clack, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage." + "\n   " + "This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.", //Optional; The full Spell Description. This string will be put in the mouseover text (tooltip) of the description field
}

//Please note that there is no code here to update drop-down boxes because the rop-down boxes in the spell selection dialogues are generated automatically and will include any spells you add correctly
//If you are looking for a way to add a cantrip/spell to the drop-down boxes in the attack sections, then you will have to look at the WeaponsList syntax and add the cantrip/spell as a weapon (as well)