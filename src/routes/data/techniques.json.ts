import type { RequestEvent, EndpointOutput } from '@sveltejs/kit';
import type { DataResponse } from '../../types/data/DataResponse';
import type { Technique } from '../../types/data/objectTypes/Technique';
import type { MaybePromise } from '@sveltejs/kit/types/helper';

export function get(event: RequestEvent): MaybePromise<EndpointOutput<DataResponse<Technique>>> {
	let newContent = {
		'Yellow #01 - Delayed Sword': {
			name: 'Delayed Sword',
			sequence: 1,
			video: 'https://player.vimeo.com/video/508848719',
			attack: 'Front – right-hand, lapel grab',
			belt: 'Yellow'
		},
		'Yellow #02 - Alternating Maces': {
			name: 'Alternating Maces',
			sequence: 2,
			video: 'https://player.vimeo.com/video/508851295',
			attack: 'Front – two-hand push',
			belt: 'Yellow'
		},
		'Yellow #03 - Sword of Destruction': {
			name: 'Sword of Destruction',
			sequence: 3,
			video: 'https://player.vimeo.com/video/508851506',
			attack: 'Front – left, roundhouse punch',
			belt: 'Yellow'
		},
		'Yellow #04 - Attacking Mace': {
			name: 'Attacking Mace',
			sequence: 4,
			video: 'https://player.vimeo.com/video/508851745',
			attack: 'Front – right, step-through punch',
			belt: 'Yellow'
		},
		'Yellow #05 - Sword and Hammer': {
			name: 'Sword and Hammer',
			sequence: 5,
			video: 'https://player.vimeo.com/video/508852036',
			attack: 'Right flank – left-hand, shoulder grab',
			belt: 'Yellow'
		},
		'Yellow #06 - Deflecting Hammer': {
			name: 'Deflecting Hammer',
			sequence: 6,
			video: 'https://player.vimeo.com/video/508852274',
			attack: 'Front – right, thrust kick',
			belt: 'Yellow'
		},
		'Yellow #07 - Checking the Storm': {
			name: 'Checking the Storm',
			sequence: 7,
			video: 'https://player.vimeo.com/video/509619202',
			attack: 'Front – right, overhead club',
			belt: 'Yellow'
		},
		'Yellow #08 - Grasp of Death': {
			name: 'Grasp of Death',
			sequence: 8,
			video: 'https://player.vimeo.com/video/509509172',
			attack: 'Left flank – right-arm headlock',
			belt: 'Yellow'
		},
		'Yellow #09 - Captured Twigs': {
			name: 'Captured Twigs',
			sequence: 9,
			video: 'https://player.vimeo.com/video/509623594',
			attack: 'Rear – high bear-hug — arms pinned',
			belt: 'Yellow'
		},
		'Yellow #10 - Mace of Aggression': {
			name: 'Mace of Agression',
			sequence: 10,
			video: 'https://player.vimeo.com/video/509508512',
			attack: 'Front – two-hand, lapel grab — pulling in',
			belt: 'Yellow'
		},
		'Orange #01 - Triggered Salute': {
			name: 'Triggered Salute',
			sequence: 1,
			video: 'https://player.vimeo.com/video/509633855',
			attack: 'Front – right-hand, direct push',
			belt: 'Orange'
		},
		'Orange #02 - Thrusting Salute': {
			name: 'Thrusting Salute',
			sequence: 2,
			video: 'https://player.vimeo.com/video/509634088',
			attack: 'Front – right, step-through, ball kick',
			belt: 'Orange'
		},
		'Orange #03 - Five Swords': {
			name: 'Five Swords',
			sequence: 3,
			video: 'https://player.vimeo.com/video/509634340',
			attack: 'Front – right, step-through, roundhouse punch',
			belt: 'Orange'
		},
		'Orange #04 - Crashing Wings': {
			name: 'Crashing Wings',
			sequence: 4,
			video: 'https://player.vimeo.com/video/509634540',
			attack: 'Rear – bear-hug — arms free',
			belt: 'Orange'
		},
		'Orange #05 - Shielding Hammer': {
			name: 'Shielding Hammer',
			sequence: 5,
			video: 'https://player.vimeo.com/video/509634716',
			attack: 'Front – left, step-through, roundhouse punch',
			belt: 'Orange'
		},
		'Orange #06 - Evading the Storm': {
			name: 'Evading the Storm',
			sequence: 6,
			video: 'https://player.vimeo.com/video/509634859',
			attack: 'Front – right, step-through, overhead club',
			belt: 'Orange'
		},
		'Orange #07 - Lone Kimono': {
			name: 'Lone Kimono',
			sequence: 7,
			video: 'https://player.vimeo.com/video/509635054',
			attack: 'Front – left-hand, lapel grab — palm up',
			belt: 'Orange'
		},
		'Orange #08 - Gift of Destruction': {
			name: 'Gift of Destruction',
			sequence: 8,
			video: 'https://player.vimeo.com/video/509635185',
			attack: 'Front – handshake',
			belt: 'Orange'
		},
		'Orange #09 - Clutching Feathers': {
			name: 'Clutching Feathers',
			sequence: 9,
			video: 'https://player.vimeo.com/video/509637569',
			attack: 'Front – left-hand, hair grab',
			belt: 'Orange'
		},
		'Orange #10 - Locking Horns': {
			name: 'Locking Horns',
			sequence: 10,
			video: 'https://player.vimeo.com/video/509637718',
			attack: 'Front – headlock',
			belt: 'Orange'
		},
		'Orange #11 - Glancing Salute': {
			name: 'Glancing Salute',
			sequence: 11,
			video: 'https://player.vimeo.com/video/509637879',
			attack: 'Front – right-hand, cross push',
			belt: 'Orange'
		},
		'Orange #12 - Grip of Death': {
			name: 'Grip of Death',
			sequence: 12,
			video: 'https://player.vimeo.com/video/509638062',
			attack: 'Left flank – right-arm headlock',
			belt: 'Orange'
		},
		'Orange #13 - Dance of Death': {
			name: 'Dance of Death',
			sequence: 13,
			video: 'https://player.vimeo.com/video/509638233',
			attack: 'Front – right, straight punch — left leg forward',
			belt: 'Orange'
		},
		'Orange #14 - Scraping Hoof': {
			name: 'Scraping Hoof',
			sequence: 14,
			video: 'https://player.vimeo.com/video/509638447',
			attack: 'Rear – full nelson',
			belt: 'Orange'
		},
		'Orange #15 - Repeating Mace': {
			name: 'Repeating Mace',
			sequence: 15,
			video: 'https://player.vimeo.com/video/509638605',
			attack: 'Front – left-hand push',
			belt: 'Orange'
		},
		"Orange #16 - Striking Serpent's Head": {
			name: "Striking Serpent's Head",
			sequence: 16,
			video: 'https://player.vimeo.com/video/509638746',
			attack: 'Front – bear-hug — arms free',
			belt: 'Orange'
		},
		'Purple #01 - Leaping Crane': {
			name: 'Leaping Crane',
			sequence: 1,
			video: 'https://player.vimeo.com/video/509680684',
			attack: 'Front – right, step-through punch',
			belt: 'Purple'
		},
		'Purple #02 - Reversing Mace': {
			name: 'Reversing Mace',
			sequence: 2,
			video: 'https://player.vimeo.com/video/509680903',
			attack: 'Front – left, step-through punch',
			belt: 'Purple'
		},
		'Purple #03 - Obscure Wing': {
			name: 'Obscure Wing',
			sequence: 3,
			video: 'https://player.vimeo.com/video/509680903',
			attack: 'Right flank – left-hand, shoulder grab',
			belt: 'Purple'
		},
		'Purple #04 - Obscure Sword': {
			name: 'Obscure Sword',
			sequence: 4,
			video: 'https://player.vimeo.com/video/509681271',
			attack: 'Right flank – left-hand, shoulder grab',
			belt: 'Purple'
		},
		'Purple #05 - Snapping Twig': {
			name: 'Snapping Twig',
			sequence: 5,
			video: 'https://player.vimeo.com/video/509681448',
			attack: 'Front – left-hand, chest push',
			belt: 'Purple'
		},
		'Purple #06 - Crossing Talon': {
			name: 'Crossing Talon',
			sequence: 6,
			video: 'https://player.vimeo.com/video/509681686',
			attack: 'Front – right, cross, wrist grab',
			belt: 'Purple'
		},
		'Purple #07 - Raining Claw': {
			name: 'Raining Claw',
			sequence: 7,
			video: 'https://player.vimeo.com/video/509681984',
			attack: 'Front – right, uppercut punch',
			belt: 'Purple'
		},
		'Purple #08 - Spiraling Twig': {
			name: 'Spiraling Twig',
			sequence: 8,
			video: 'https://player.vimeo.com/video/509682146',
			attack: 'Rear – bear-hug — arms free',
			belt: 'Purple'
		},
		'Purple #09 - Twirling Wings': {
			name: 'Twirling Wings',
			sequence: 9,
			video: 'https://player.vimeo.com/video/509682392',
			attack: 'Rear – stiff, two-hand, neck or shoulder grab',
			belt: 'Purple'
		},
		'Purple #10 - Buckling Branch': {
			name: 'Buckling Branch',
			sequence: 10,
			video: 'https://player.vimeo.com/video/509682592',
			attack: 'Front – left, step-through, straight kick',
			belt: 'Purple'
		},
		'Purple #11 - Crushing Hammer': {
			name: 'Crushing Hammer',
			sequence: 11,
			video: 'https://player.vimeo.com/video/509682784',
			attack: 'Rear – high bear-hug — arms pinned',
			belt: 'Purple'
		},
		'Purple #12 - Locked Wing': {
			name: 'Locked Wing',
			sequence: 12,
			video: 'https://player.vimeo.com/video/509683008',
			attack: 'Rear – right hammer-lock',
			belt: 'Purple'
		},
		'Purple #13 - Captured Leaves': {
			name: 'Captured Leaves',
			sequence: 13,
			video: 'https://player.vimeo.com/video/509683267',
			attack: 'Right flank – finger lock',
			belt: 'Purple'
		},
		'Purple #14 - Calming the Storm': {
			name: 'Calming the Storm',
			sequence: 14,
			video: 'https://player.vimeo.com/video/509683422',
			attack: 'Front – right, step-through, roundhouse club',
			belt: 'Purple'
		},
		'Purple #15 - Thrusting Prongs': {
			name: 'Thrusting Prongs',
			sequence: 15,
			video: 'https://player.vimeo.com/video/509683625',
			attack: 'Front – bear-hug — arms pinned',
			belt: 'Purple'
		},
		'Purple #16 - Twisted Twig': {
			name: 'Twisted Twig',
			sequence: 16,
			video: 'https://player.vimeo.com/video/509683811',
			attack: 'Front – wrist lock',
			belt: 'Purple'
		},
		'Blue #01 - Parting Wings': {
			name: 'Parting Wings',
			sequence: 1,
			video: 'https://player.vimeo.com/video/509981587',
			attack: 'Front – two-hand push',
			belt: 'Blue'
		},
		'Blue #02 - Swinging Pendulum': {
			name: 'Swinging Pendulum',
			sequence: 2,
			video: 'https://player.vimeo.com/video/509981894',
			attack: 'Front – right, roundhouse kick',
			belt: 'Blue'
		},
		'Blue #03 - Obstructing the Storm': {
			name: 'Obstructing the Storm',
			sequence: 3,
			video: 'https://player.vimeo.com/video/509982080',
			attack: 'Front – right, step-through, overhead club',
			belt: 'Blue'
		},
		'Blue #04 - Shield and Sword': {
			name: 'Shield and Sword',
			sequence: 4,
			video: 'https://player.vimeo.com/video/509982330',
			attack: 'Front – left, step-through punch',
			belt: 'Blue'
		},
		'Blue #05 - Darting Mace': {
			name: 'Darting Mace',
			sequence: 5,
			video: 'https://player.vimeo.com/video/509982589',
			attack: 'Front – two-hand, wrist grab',
			belt: 'Blue'
		},
		'Blue #06 - Charging Ram': {
			name: 'Charging Ram',
			sequence: 6,
			video: 'https://player.vimeo.com/video/509982890',
			attack: 'Front – tackle',
			belt: 'Blue'
		},
		'Blue #07 - Sleeper': {
			name: 'Sleeper',
			sequence: 7,
			video: 'https://player.vimeo.com/video/509983223',
			attack: 'Front – right, step-through straight punch',
			belt: 'Blue'
		},
		'Blue #08 - Twin Kimono': {
			name: 'Twin Kimono',
			sequence: 8,
			video: 'https://player.vimeo.com/video/509983567',
			attack: 'Front – two-hand, lapel grab — pushing out',
			belt: 'Blue'
		},
		'Blue #09 - Thundering Hammers': {
			name: 'Thundering Hammers',
			sequence: 9,
			video: 'https://player.vimeo.com/video/509983803',
			attack: 'Front – right, step-through, straight punch',
			belt: 'Blue'
		},
		'Blue #10 - Hooking Wings': {
			name: 'Hooking Wings',
			sequence: 10,
			video: 'https://player.vimeo.com/video/509984061',
			attack: 'Front – two-hand, low push',
			belt: 'Blue'
		},
		'Blue #11 - Cross of Destruction': {
			name: 'Cross of Destruction',
			sequence: 11,
			video: 'https://player.vimeo.com/video/509984325',
			attack: 'Rear – two-hand choke',
			belt: 'Blue'
		},
		'Blue #12 - Squeezing the Peach': {
			name: 'Squeezing the Peach',
			sequence: 12,
			video: 'https://player.vimeo.com/video/509984663',
			attack: 'Rear – high bear-hug — arms pinned',
			belt: 'Blue'
		},
		'Blue #13 - Circling Wing': {
			name: 'Circling Wing',
			sequence: 13,
			video: 'https://player.vimeo.com/video/509984897',
			attack: 'Rear – two-hand choke — arms bent',
			belt: 'Blue'
		},
		'Blue #14 - Gift in Return': {
			name: 'Gift in Return',
			sequence: 14,
			video: 'https://player.vimeo.com/video/509985192',
			attack: 'Front – handshake',
			belt: 'Blue'
		},
		'Blue #15 - Bow of Compulsion': {
			name: 'Bow of Compulsion',
			sequence: 15,
			video: 'https://player.vimeo.com/video/509985508',
			attack: "Front – wrist lock — against opponent's chest",
			belt: 'Blue'
		},
		'Blue #16 - Flight to Freedom': {
			name: 'Flight to Freedom',
			sequence: 16,
			video: 'https://player.vimeo.com/video/509985843',
			attack: 'Rear – right hammerlock',
			belt: 'Blue'
		},
		'Green #01 - Begging Hands': {
			name: 'Begging Hands',
			sequence: 1,
			video: 'https://player.vimeo.com/video/510226777',
			attack: 'Front – two-hand grab to wrists',
			belt: 'Green'
		},
		'Green #02 - Thrusting Wedge': {
			name: 'Thrusting Wedge',
			sequence: 2,
			video: 'https://player.vimeo.com/video/510227011',
			attack: 'Front – two-hand, high push',
			belt: 'Green'
		},
		'Green #03 - Shield and Mace': {
			name: 'Shield and Mace',
			sequence: 3,
			video: 'https://player.vimeo.com/video/510227321',
			attack: 'Front – right, step-through punch',
			belt: 'Green'
		},
		'Green #04 - Retreating Pendulum': {
			name: 'Retreating Pendulum',
			sequence: 4,
			video: 'https://player.vimeo.com/video/510227689',
			attack: 'Front – right, thrusting heel-kick',
			belt: 'Green'
		},
		'Green #05 - Raking Mace': {
			name: 'Raking Mace',
			sequence: 5,
			video: 'https://player.vimeo.com/video/510227929',
			attack: 'Front – two-hand, lapel grab — pulling in',
			belt: 'Green'
		},
		'Green #06 - Destructive Twins': {
			name: 'Destructive Twins',
			sequence: 6,
			video: 'https://player.vimeo.com/video/510228206',
			attack: 'Front – two-hand choke — pulling in',
			belt: 'Green'
		},
		'Green #07 - Defying the Storm': {
			name: 'Defying the Storm',
			sequence: 7,
			video: 'https://player.vimeo.com/video/510228529',
			attack: 'Front – right, step-through, side club',
			belt: 'Green'
		},
		'Green #08 - Tripping Arrow': {
			name: 'Tripping Arrow',
			sequence: 8,
			video: 'https://player.vimeo.com/video/510228798',
			attack: 'Front – bear-hug — arms free',
			belt: 'Green'
		},
		'Green #09 - Flashing Wings': {
			name: 'Flashing Wings',
			sequence: 9,
			video: 'https://player.vimeo.com/video/510229096',
			attack: 'Front – right, step-through punch',
			belt: 'Green'
		},
		'Green #10 - Hugging Pendulum': {
			name: 'Hugging Pendulum',
			sequence: 10,
			video: 'https://player.vimeo.com/video/510229488',
			attack: 'Front – right, drag-up, thrusting, side kick',
			belt: 'Green'
		},
		'Green #11 - Snaking Talon': {
			name: 'Snaking Talon',
			sequence: 11,
			video: 'https://player.vimeo.com/video/510229825',
			attack: 'Front – two-hand, chest push',
			belt: 'Green'
		},
		'Green #12 - Conquering Shield': {
			name: 'Conquering Shield',
			sequence: 12,
			video: 'https://player.vimeo.com/video/510230171',
			attack: 'Front – left, stiff-arm, lapel grab',
			belt: 'Green'
		},
		'Green #13 - Repeated Devastation': {
			name: 'Repeated Devastation',
			sequence: 13,
			video: 'https://player.vimeo.com/video/510230427',
			attack: 'Rear – full nelson',
			belt: 'Green'
		},
		'Green #14 - Crossed Twigs': {
			name: 'Crossed Twigs',
			sequence: 14,
			video: 'https://player.vimeo.com/video/510230819',
			attack: 'Rear – two-hand grab to wrists',
			belt: 'Green'
		},
		'Green #15 - Wings of Silk': {
			name: 'Wings of Silk',
			sequence: 15,
			video: 'https://player.vimeo.com/video/510231188',
			attack: 'Rear – two-arm lock',
			belt: 'Green'
		},
		'Green #16 - Entangled Wing': {
			name: 'Entangled Wing',
			sequence: 16,
			video: 'https://player.vimeo.com/video/510231555',
			attack: 'Front – arm lock',
			belt: 'Green'
		},
		'3rd Brown #1 - Flashing Mace': {
			name: 'Flashing Mace',
			sequence: 1,
			video: 'https://player.vimeo.com/video/511991599',
			attack: 'Front – right, step-through punch',
			belt: '3rd Brown'
		},
		'3rd Brown #2 - Detour from Doom': {
			name: 'Detour from Doom',
			sequence: 2,
			video: 'https://player.vimeo.com/video/511991961',
			attack: 'Front – right, round-house kick',
			belt: '3rd Brown'
		},
		'3rd Brown #3 - Returning Storm': {
			name: 'Returning Storm',
			sequence: 3,
			video: 'https://player.vimeo.com/video/511992223',
			attack: 'Front – right roundhouse and backhand club',
			belt: '3rd Brown'
		},
		'3rd Brown #4 - Glancing Spear': {
			name: 'Glancing Spear',
			sequence: 4,
			video: 'https://player.vimeo.com/video/511992492',
			attack: 'Front – right, direct, wrist grab to left arm',
			belt: '3rd Brown'
		},
		'3rd Brown #5 - Encounter with Danger': {
			name: 'Encounter with Danger',
			sequence: 5,
			video: 'https://player.vimeo.com/video/511992775',
			attack: 'Front – two-hand push',
			belt: '3rd Brown'
		},
		'3rd Brown #6 - Circling the Horizon': {
			name: 'Circling the Horizon',
			sequence: 6,
			video: 'https://player.vimeo.com/video/511992984',
			attack: 'Front – right, step-through punch',
			belt: '3rd Brown'
		},
		'3rd Brown #7 - Gripping Talon': {
			name: 'Gripping Talon',
			sequence: 7,
			video: 'https://player.vimeo.com/video/511993220',
			attack: 'Front – left-hand, direct, wrist grab',
			belt: '3rd Brown'
		},
		'3rd Brown #8 - Circling Destruction': {
			name: 'Circling Destruction',
			sequence: 8,
			video: 'https://player.vimeo.com/video/511993561',
			attack: 'Front – left, step-through punch',
			belt: '3rd Brown'
		},
		'3rd Brown #9 - Gathering Clouds': {
			name: 'Gathering Clouds',
			sequence: 9,
			video: 'https://player.vimeo.com/video/511993815',
			attack: 'Front – right, straight, shuffle punch',
			belt: '3rd Brown'
		},
		'3rd Brown #10 - Fallen Cross': {
			name: 'Fallen Cross',
			sequence: 10,
			video: 'https://player.vimeo.com/video/511994030',
			attack: 'Rear – two-hand choke',
			belt: '3rd Brown'
		},
		'3rd Brown #11 - Brushing the Storm': {
			name: 'Brushing the Storm',
			sequence: 11,
			video: 'https://player.vimeo.com/video/511994229',
			attack: 'Right-flank – right, step-through, overhead club',
			belt: '3rd Brown'
		},
		'3rd Brown #12 - Obscure Claws': {
			name: 'Obscure Claws',
			sequence: 12,
			video: 'https://player.vimeo.com/video/511994460',
			attack: 'Right-flank – left-hand, shoulder grab',
			belt: '3rd Brown'
		},
		'3rd Brown #13 - Dominating Circles': {
			name: 'Dominating Circles',
			sequence: 13,
			video: 'https://player.vimeo.com/video/511994701',
			attack: 'Front – offset, right grab to right shoulder',
			belt: '3rd Brown'
		},
		'3rd Brown #14 - Twist of Fate': {
			name: 'Twist of Fate',
			sequence: 14,
			video: 'https://player.vimeo.com/video/511994981',
			attack: 'Front – two-hand push',
			belt: '3rd Brown'
		},
		'3rd Brown #15 - Gift of Destiny': {
			name: 'Gift of Destiny',
			sequence: 15,
			video: 'https://player.vimeo.com/video/511995231',
			attack: 'Front – handshake',
			belt: '3rd Brown'
		},
		'3rd Brown #16 - Blinding Sacrifice': {
			name: 'Blinding Sacrifice',
			sequence: 16,
			video: 'https://player.vimeo.com/video/511995452',
			attack: 'Front – two-hand, shoulder grab',
			belt: '3rd Brown'
		},
		'3rd Brown #17 - Circle of Doom': {
			name: 'Circle of Doom',
			sequence: 17,
			video: 'https://player.vimeo.com/video/511995869',
			attack: 'Front – right, straight kick',
			belt: '3rd Brown'
		},
		'3rd Brown #18 - Squatting Sacrifice': {
			name: 'Squatting Sacrifice',
			sequence: 18,
			video: 'https://player.vimeo.com/video/511996055',
			attack: 'Rear – bear-hug — arms free',
			belt: '3rd Brown'
		},
		'3rd Brown #19 - Desperate Falcons': {
			name: 'Desperate Falcons',
			sequence: 19,
			video: 'https://player.vimeo.com/video/511996372',
			attack: 'Front – two-hand grabs to both wrists',
			belt: '3rd Brown'
		},
		'3rd Brown #20 - Broken Ram': {
			name: 'Broken Ram',
			sequence: 20,
			video: 'https://player.vimeo.com/video/511996637',
			attack: 'Front – tackle with opponent’s arms wide',
			belt: '3rd Brown'
		},
		'2nd Brown #1 - Leap From Danger': {
			name: 'Leap From Danger',
			sequence: 1,
			video: 'https://player.vimeo.com/video/511972714',
			attack: 'Rear – two-hand push',
			belt: '2nd Brown'
		},
		'2nd Brown #2 - Circles of Protection': {
			name: 'Circles of Protection',
			sequence: 2,
			video: 'https://player.vimeo.com/video/511972948',
			attack: 'Front – right, step-through, overhead punch',
			belt: '2nd Brown'
		},
		'2nd Brown #3 - Rotating Destruction': {
			name: 'Rotating Destruction',
			sequence: 3,
			video: 'https://player.vimeo.com/video/511973248',
			attack: 'Front – right, thrust and left, spinning, back kic',
			belt: '2nd Brown'
		},
		'2nd Brown #4 - Broken Gift': {
			name: 'Broken Gift',
			sequence: 4,
			video: 'https://player.vimeo.com/video/511973517',
			attack: 'Front – right handshake',
			belt: '2nd Brown'
		},
		'2nd Brown #5 - Escape From Death': {
			name: 'Escape From Death',
			sequence: 5,
			video: 'https://player.vimeo.com/video/511973745',
			attack: 'Rear – right-arm choke',
			belt: '2nd Brown'
		},
		'2nd Brown #6 - Capturing the Storm': {
			name: 'Capturing the Storm',
			sequence: 6,
			video: 'https://player.vimeo.com/video/511974045',
			attack: 'Front – right, step-through, overhead club',
			belt: '2nd Brown'
		},
		'2nd Brown #7 - Twirling Sacrifice': {
			name: 'Twirling Sacrifice',
			sequence: 7,
			video: 'https://player.vimeo.com/video/511974349',
			attack: 'Rear – full nelson',
			belt: '2nd Brown'
		},
		'2nd Brown #8 - Kneel of Compulsion': {
			name: 'Kneel of Compulsion',
			sequence: 8,
			video: 'https://player.vimeo.com/video/511982290',
			attack: 'Right-flank – right, step-through punch',
			belt: '2nd Brown'
		},
		'2nd Brown #9 - Menacing Twirl': {
			name: 'Menacing Twirl',
			sequence: 9,
			video: 'https://player.vimeo.com/video/511982532',
			attack: 'Rear – left-hand, belt grab',
			belt: '2nd Brown'
		},
		'2nd Brown #10 - Intercepting the Ram': {
			name: 'Intercepting the Ram',
			sequence: 10,
			video: 'https://player.vimeo.com/video/511982762',
			attack: 'Front – tackle',
			belt: '2nd Brown'
		},
		'2nd Brown #11 - Back Breaker': {
			name: 'Back Breaker',
			sequence: 11,
			video: 'https://player.vimeo.com/video/511983088',
			attack: 'Right-flank – right, step-through punch',
			belt: '2nd Brown'
		},
		'2nd Brown #12 - Cross of Death': {
			name: 'Cross of Death',
			sequence: 12,
			video: 'https://player.vimeo.com/video/511983432',
			attack: 'Front – two-hand, cross-choke (gi choke)',
			belt: '2nd Brown'
		},
		'2nd Brown #13 - Securing the Storm': {
			name: 'Securing the Storm',
			sequence: 13,
			video: 'https://player.vimeo.com/video/511983704',
			attack: 'Front – right, step-through, roundhouse club',
			belt: '2nd Brown'
		},
		'2nd Brown #14 - Deceptive Panther': {
			name: 'Deceptive Panther',
			sequence: 14,
			video: 'https://player.vimeo.com/video/511983960',
			attack: 'Front – right, snap kick (low) & right, roundhouse',
			belt: '2nd Brown'
		},
		'2nd Brown #15 - Heavenly Ascent': {
			name: 'Heavenly Ascent',
			sequence: 15,
			video: 'https://player.vimeo.com/video/511984237',
			attack: 'Front – two-hand choke, arms straight',
			belt: '2nd Brown'
		},
		'2nd Brown #16 - Falling Falcon': {
			name: 'Falling Falcon',
			sequence: 16,
			video: 'https://player.vimeo.com/video/511984428',
			attack: 'Front – right, direct, lapel grab',
			belt: '2nd Brown'
		},
		'2nd Brown #17 - Taming the Mace': {
			name: 'Taming the Mace',
			sequence: 17,
			video: 'https://player.vimeo.com/video/511984838',
			attack: 'Front – right, step-through punch — with a wall be',
			belt: '2nd Brown'
		},
		'2nd Brown #18 - Defensive Cross': {
			name: 'Defensive Cross',
			sequence: 18,
			video: 'https://player.vimeo.com/video/511985034',
			attack: 'Front – right snap kick',
			belt: '2nd Brown'
		},
		'2nd Brown #19 - Bowing to Buddha': {
			name: 'Bowing to Buddha',
			sequence: 19,
			video: 'https://player.vimeo.com/video/511985334',
			attack: 'Front – right, roundhouse kick',
			belt: '2nd Brown'
		},
		'2nd Brown #20 - Glancing Wing': {
			name: 'Glancing Wing',
			sequence: 20,
			video: 'https://player.vimeo.com/video/511985824',
			attack: 'Front – left, uppercut punch',
			belt: '2nd Brown'
		},
		'1st Brown #1 - Circling Fans': {
			name: 'Circling Fans',
			sequence: 1,
			video: 'https://player.vimeo.com/video/512067082',
			attack: 'Front – left & right punch combination',
			belt: '1st Brown'
		},
		'1st Brown #2 - Dance of Darkness': {
			name: 'Dance of Darkness',
			sequence: 2,
			video: 'https://player.vimeo.com/video/512067342',
			attack: 'Front – right kick & right punch combination',
			belt: '1st Brown'
		},
		'1st Brown #3 - Falcons of Force': {
			name: 'Falcons of Force',
			sequence: 3,
			video: 'https://player.vimeo.com/video/512067655',
			attack: 'Right and left flanks – left & right shoulder grab',
			belt: '1st Brown'
		},
		'1st Brown #4 - Bear and the Ram': {
			name: 'Bear and the Ram',
			sequence: 4,
			video: 'https://player.vimeo.com/video/512067870',
			attack: 'Front – right punch & rear, bear hug (arms free) —',
			belt: '1st Brown'
		},
		'1st Brown #5 - Clipping the Storm': {
			name: 'Clipping the Storm',
			sequence: 5,
			video: 'https://player.vimeo.com/video/512068111',
			attack: 'Front – right, thrusting club',
			belt: '1st Brown'
		},
		'1st Brown #6 - Protecting Fans': {
			name: 'Protecting Fans',
			sequence: 6,
			video: 'https://player.vimeo.com/video/512068258',
			attack: 'Front – left & right punch combination',
			belt: '1st Brown'
		},
		'1st Brown #7 - Grasping Eagles': {
			name: 'Grasping Eagles',
			sequence: 7,
			video: 'https://player.vimeo.com/video/512068488',
			attack: 'Front –  right, lapel grab / rear – right, shoulde',
			belt: '1st Brown'
		},
		'1st Brown #8 - Parting of the Snakes': {
			name: 'Parting of the Snakes',
			sequence: 8,
			video: 'https://player.vimeo.com/video/512068635',
			attack: 'Front – right punch & rear attempt — two men',
			belt: '1st Brown'
		},
		'1st Brown #9 - Thrust into Darkness': {
			name: 'Thrust into Darkness',
			sequence: 9,
			video: 'https://player.vimeo.com/video/512068890',
			attack: 'Rear – right, step-through punch',
			belt: '1st Brown'
		},
		'1st Brown #10 - Leap of Death': {
			name: 'Leap of Death',
			sequence: 10,
			video: 'https://player.vimeo.com/video/512069164',
			attack: 'Front – right, step-through, straight punch',
			belt: '1st Brown'
		},
		'1st Brown #11 - Raining Lance': {
			name: 'Raining Lance',
			sequence: 11,
			video: 'https://player.vimeo.com/video/512069557',
			attack: 'Front – right, step-through, overhead, knife attac',
			belt: '1st Brown'
		},
		'1st Brown #12 - Unfurling Crane': {
			name: 'Unfurling Crane',
			sequence: 12,
			video: 'https://player.vimeo.com/video/512069842',
			attack: 'Front – left & right punch',
			belt: '1st Brown'
		},
		'1st Brown #13 - Fatal Cross': {
			name: 'Fatal Cross',
			sequence: 13,
			video: 'https://player.vimeo.com/video/512070065',
			attack: 'Front – two-hand, attempted, low grab or push',
			belt: '1st Brown'
		},
		'1st Brown #14 - Circling Windmills': {
			name: 'Circling Windmills',
			sequence: 14,
			video: 'https://player.vimeo.com/video/512070274',
			attack: 'Front – two-hand push followed by right-hand punch',
			belt: '1st Brown'
		},
		'1st Brown #15 - Reversing Circles': {
			name: 'Reversing Circles',
			sequence: 15,
			video: 'https://player.vimeo.com/video/512070546',
			attack: 'Front – left, roundhouse kick & left punch combina',
			belt: '1st Brown'
		},
		'1st Brown #16 - Courting the Tiger': {
			name: 'Courting the Tiger',
			sequence: 16,
			video: 'https://player.vimeo.com/video/512070796',
			attack: 'Right and left flanks – left & right arm & shoulde',
			belt: '1st Brown'
		},
		'1st Brown #17 - Gathering of the Snakes': {
			name: 'Gathering of the Snakes',
			sequence: 17,
			video: 'https://player.vimeo.com/video/512071032',
			attack: 'Front – left punch / rear – right punch — two men',
			belt: '1st Brown'
		},
		'1st Brown #18 - Destructive Fans': {
			name: 'Destructive Fans',
			sequence: 18,
			video: 'https://player.vimeo.com/video/512071265',
			attack: 'Left flank – right, step-through punch',
			belt: '1st Brown'
		},
		'1st Brown #19 - Unwinding Pendulum': {
			name: 'Unwinding Pendulum',
			sequence: 19,
			video: 'https://player.vimeo.com/video/512071480',
			attack: 'Front – right kick & right punch combination',
			belt: '1st Brown'
		},
		'1st Brown #20 - Glancing Lance': {
			name: 'Glancing Lance',
			sequence: 20,
			video: 'https://player.vimeo.com/video/512071741',
			attack: 'Front – right, shuffle, knife thrust',
			belt: '1st Brown'
		},
		'1st Black #1 - Destructive Kneel': {
			name: 'Destructive Kneel',
			sequence: 1,
			video: 'https://player.vimeo.com/video/510652332',
			attack: 'Front – right, step-through punch',
			belt: '1st Black'
		},
		'1st Black #2 - Entwined Maces': {
			name: 'Entwined Maces',
			sequence: 2,
			video: 'https://player.vimeo.com/video/510652837',
			attack: 'Front – left & right punch combination',
			belt: '1st Black'
		},
		'1st Black #3 - Marriage of the Rams': {
			name: 'Marriage of the Rams',
			sequence: 3,
			video: 'https://player.vimeo.com/video/510653403',
			attack: 'Right and left flanks – left & right shoulder grab',
			belt: '1st Black'
		},
		'1st Black #4 - The Ram and the Eagle': {
			name: 'The Ram and the Eagle',
			sequence: 4,
			video: 'https://player.vimeo.com/video/510653926',
			attack: 'Front – right punch / rear – left-hand, collar gra',
			belt: '1st Black'
		},
		'1st Black #5 - Escape from the Storm': {
			name: 'Escape from the Storm',
			sequence: 5,
			video: 'https://player.vimeo.com/video/510654478',
			attack: 'Right flank – right, overhead, club attack',
			belt: '1st Black'
		},
		'1st Black #6 - Thrusting Lance': {
			name: 'Thrusting Lance',
			sequence: 6,
			video: 'https://player.vimeo.com/video/510655186',
			attack: 'Front – right, step-through, low, knife thrust',
			belt: '1st Black'
		},
		'1st Black #7 - Capturing the Rod': {
			name: 'Capturing the Rod',
			sequence: 7,
			video: 'https://player.vimeo.com/video/510655759',
			attack: 'Front – right pistol — against the chest',
			belt: '1st Black'
		},
		'1st Black #8 - Prance of the Tiger': {
			name: 'Prance of the Tiger',
			sequence: 8,
			video: 'https://player.vimeo.com/video/510656298',
			attack: 'Right flank – right, step-through, uppercut punch',
			belt: '1st Black'
		},
		'1st Black #9 - Fatal Deviation': {
			name: 'Fatal Deviation',
			sequence: 9,
			video: 'https://player.vimeo.com/video/510656912',
			attack: 'Front – right & left punch combination',
			belt: '1st Black'
		},
		'1st Black #10 - Snakes of Wisdom': {
			name: 'Snakes of Wisdom',
			sequence: 10,
			video: 'https://player.vimeo.com/video/510657342',
			attack: 'Right and left flanks – left & right shoulder grab',
			belt: '1st Black'
		},
		'1st Black #11 - Reprimanding the Bears': {
			name: 'Reprimanding the Bears',
			sequence: 11,
			video: 'https://player.vimeo.com/video/510657864',
			attack: 'Front – right punch / rear – bear hug — arms pinne',
			belt: '1st Black'
		},
		'1st Black #12 - Circling the Storm': {
			name: 'Circling the Storm',
			sequence: 12,
			video: 'https://player.vimeo.com/video/510658342',
			attack: 'Front – right club thrust',
			belt: '1st Black'
		},
		'1st Black #13 - Entwined Lance': {
			name: 'Entwined Lance',
			sequence: 13,
			video: 'https://player.vimeo.com/video/510658928',
			attack: 'Front – right, step-through, low, knife thrust',
			belt: '1st Black'
		},
		'1st Black #14 - Broken Rod': {
			name: 'Broken Rod',
			sequence: 14,
			video: 'https://player.vimeo.com/video/510659387',
			attack: 'Right – rear-hand pistol — against your back',
			belt: '1st Black'
		},
		'1st Black #15 - Twirling Hammers': {
			name: 'Twirling Hammers',
			sequence: 15,
			video: 'https://player.vimeo.com/video/510660005',
			attack: 'Front – left, step-through punch',
			belt: '1st Black'
		},
		'1st Black #16 - Piercing Lance': {
			name: 'Piercing Lance',
			sequence: 16,
			video: 'https://player.vimeo.com/video/510660569',
			attack: 'Front – right, low, knife thrust — while arms are ',
			belt: '1st Black'
		},
		'1st Black #17 - Unfolding the Dark': {
			name: 'Unfolding the Dark',
			sequence: 17,
			video: 'https://player.vimeo.com/video/510661217',
			attack: 'Right, rear flank – left, step-through punch',
			belt: '1st Black'
		},
		'1st Black #18 - Defying the Rod': {
			name: 'Defying the Rod',
			sequence: 18,
			video: 'https://player.vimeo.com/video/510661736',
			attack: 'Front – right pistol',
			belt: '1st Black'
		},
		'1st Black #19 - Escape from Darkness': {
			name: 'Escape from Darkness',
			sequence: 19,
			video: 'https://player.vimeo.com/video/510662331',
			attack: 'Left, rear flank – right, step-through punch',
			belt: '1st Black'
		},
		'1st Black #20 - Twisted Rod': {
			name: 'Twisted Rod',
			sequence: 20,
			video: 'https://player.vimeo.com/video/510767898',
			attack: 'Front – right pistol',
			belt: '1st Black'
		}
	};

	let body: Technique[] = [];

	for (const data of Object.values(newContent)) {
		body.push({
			...data,
			startIn: 'Natural stance',
			class: 'West LA',
			learnedDate: null,
			notes: []
		});
	}

	return {
		body
	};
}

/**
 * 

	return {
		body: [
			{
				name: 'Gripping talon',
				attack: 'Right straight wrist grab',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('3/10/22'),
				notes: [
					'Step to 12, right strike left hand on own left',
					'Right underhand hammerfist to groin, left grab left wrist',
					'Step to 10:30, right outward back-knuckle to left ribs',
					'Right vertical punch to neck, right leg buckle left knee',
					'Step to 4:30, right knee to face'
				]
			},
			{
				name: 'Returning storm',
				attack: 'Right roundhouse club, right backhand club',
				startIn: 'Neutral bow',
				class: 'West LA',
				learnedDate: new Date('3/10/22'),
				notes: [
					'Step to 7:30 right neutral bow',
					'Step to 1:30 left neutral, right check to right forearm, left inward block to right upper arm',
					'Right pull right wrist, left inward block to right arm',
					'Right ball kick to face',
					'Right lifting stiff-arm back-knuckle punch to face'
				]
			},
			{
				name: 'Obscure wing',
				attack: 'Straight right shoulder grab from 4:30',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('3/8/22'),
				notes: [
					'Step to 3 horse stance, right back elbow to solar plexus',
					'Right hammerfist to groin',
					'Right obscure vertical elbow to jaw'
				]
			},
			{
				name: 'Thrusting prongs',
				attack: 'Bear hug from 12, arms pinned',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('3/8/22'),
				notes: [
					'Step to 6 left forward bow, right prong to left hip, left prong to right hip',
					'Left u-check to right arm',
					'Right back elbow to left arm, right knee to groin',
					'Right inward elbow to face'
				]
			},
			{
				name: 'Repeating mace (extension)',
				attack: 'Attempted left center push',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('3/8/22'),
				notes: [
					"Step to 4:30, Left waiter's hand to left wrist, right middle knuckle to left ribs",
					'Right outward back-knuckle to left ribs',
					'Right looping overhead kick to left knee',
					'Right outward back-knuckle to face',
					'Left thrusting sweep kick to left leg, land in front twist',
					'Unwind left heelpalm to face',
					'Right spinning back kick to groin',
					'Right buckle left leg',
					'Right stomp right knee',
					'Left rear cross stomp to groin',
					'Right stomp right ankle'
				]
			},
			{
				name: 'Repeating mace',
				attack: 'Attempted left center push',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('3/8/22'),
				notes: [
					"Step to 4:30, Left waiter's hand to left wrist, right middle knuckle to left ribs",
					'Right outward back-knuckle to left ribs',
					'Right looping overhead kick to left knee'
				]
			},
			{
				name: '',
				attack: '',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('3/8/22'),
				notes: ['', '', '']
			},
			{
				name: 'Cross of destruction',
				attack: 'Two-hand choke from 6',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('3/8/22'),
				notes: [
					'Left hand grab left wrist, right hand grab right wrist',
					'Step to 10:30 left neutral bow and twist',
					'Step to 10:30, left pull left up and over head',
					'Pull down and up to break left elbow over right elbow',
					'Pull back and forward to break right elbow over left elbow',
					'Right ball kick to right knee'
				]
			},
			{
				name: 'Sleeper',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('3/8/22'),
				notes: [
					'Step to 10:30 left neutral bow, left inward block to right arm',
					'Left forward bow, right inward ridgehand to neck',
					'Step to 3 calf stomp into horse stance',
					'Step to 6 right neutral bow, drop to ground',
					'Left wide kneel, right vertical punch to face'
				]
			},
			{
				name: 'Obstructing the storm',
				attack: 'Right overhead club',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('3/8/22'),
				notes: [
					'Step to 10:30 left neutral bow, right upward block to right wrist, left upward block to right wrist',
					'Step to 1:30, right grab right wrist, left inward block to right upper arm',
					'Right roundhouse knee to solar plexus'
				]
			},
			{
				name: 'Reversing mace (extension)',
				attack: 'Left straight punch',
				startIn: 'Neutral bow',
				class: 'West LA',
				learnedDate: new Date('3/1/22'),
				notes: [
					'Step to 4:30 right neutral bow, right inward block to left arm',
					"Right outward back-knuckle to left ribs, left waiter's hand to left arm",
					'Right looping overhead kick to left knee',
					'Step to 1:30 right front twist, right outward back-knuckle to left ribs',
					'Unwind, left outward back-knuckle to left ribs',
					'Step to 3 left forward bow, right straight punch',
					'Both hands grab shoulders, right knee to spine',
					'Step to 7:30 right stomp to left calf'
				]
			},
			{
				name: 'Circling destruction',
				attack: 'Left straight punch',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/29/22'),
				notes: [
					'Step to 12 right neutral bow, right inward parry to left arm, left outward parry to left arm, right outward back-knuckle to left ribs',
					'Step to 3 right forward bow, left inward heelpalm to face',
					'Right neutral bow, right inward handsword to left neck',
					'Right pull right eye, left horizontal heelpalm to left kidney, right front scoop to groin'
				]
			},
			{
				name: 'Flashing mace',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/27/22'),
				notes: [
					'Step to 12 left neutral bow, left inward block to right arm',
					'Step to 10:30 right neutral bow, right hammerfist to face',
					'Unwind left horizontal forearm to right ribs',
					'Right looping back-knuckle to face, left check right arm'
				]
			},
			{
				name: 'Twisted twig',
				attack: 'Right wrist lock',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/27/22'),
				notes: [
					'Step to 12 right neutral bow',
					'Right outward elbow to solar plexus',
					'Right hammerfist to groin'
				]
			},
			{
				name: 'Obscure sword',
				attack: 'Left straight shoulder grab from 4:30',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/27/22'),
				notes: [
					'Step to 1:30 left neutral bow, left pin right',
					'Unwind right outward handsword to neck, left ball kick to groin'
				]
			},
			{
				name: 'Tripping arrow',
				attack: 'Low bear hun from 12, arms free',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/27/22'),
				notes: [
					'Step to 10:30 left neutral bow, right heelpalm to left ear, left grab right upper arm',
					'Step-through to 10:30, right buckle right knee, left grab right wrist',
					'Right ball kick to left collarbone, right leg clear right arm'
				]
			},
			{
				name: 'Retreating pendulum',
				attack: 'Rear cross right back kick',
				startIn: 'Right neutral bow',
				class: 'West LA',
				learnedDate: new Date('1/25/22'),
				notes: [
					'Step to 6 left front twist, right downward block to right leg',
					'Step to 12 right neutral bow, right knife-edge kick to left knee',
					'Right hammerfist to neck',
					'Step up to 12, right rear scoop to groin, right buckle to groin'
				]
			},
			{
				name: 'Obscure claws',
				attack: 'Left straight shoulder grab from 4:30',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/25/22'),
				notes: [
					'Step to 6 left neutral bow, right outward claw to face, left inward claw to face',
					'Left forward bow, right arm wrap around left elbow',
					''
				]
			},
			{
				name: 'Squeezing the peach',
				attack: 'Low bear hug from 6, arms pinned',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/25/22'),
				notes: [
					'Step to 6 right neutral bow, right pin arms, left grab groin',
					'Step to 1:30 left neutral bow, left pin arms',
					'Right leg back scoop',
					'Right back buckle, right obscure back elbow'
				]
			},
			{
				name: 'Shield and sword',
				attack: 'Left straight punch',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/25/22'),
				notes: [
					'Step to 1:30 right forward bow, right inward handsword to right neck, left extended outward block to elbow',
					'Right neutral bow, right check shoulder, left inward elbow to left ribs',
					'Step to 4:30 right front twist, right hammerfist to left kidney, right roundhouse kick to left kidney'
				]
			},
			{
				name: 'Twin kimono',
				attack: 'Two hand lapel grab and push',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/25/22'),
				notes: [
					'Step to 6 right neutral bow, right upward block to elbows, left pin hands',
					'Step to 4:30 right neutral bow, right outward back-knuckle to left ribs',
					'Right inward block to arms',
					'Right outward handsword to neck'
				]
			},
			{
				name: 'Defying the storm',
				attack: 'Right roundhouse club to face',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/20/22'),
				notes: [
					'Step to 11:30 right neutral bow, right inward handsword to right arm, left outward handsword to right arm',
					'Right grab right elbow, left grab right wrist',
					'Step to 4:30 left neutral bow',
					'Right knee to solar plexus',
					'Right inward overhead elbow to spine'
				]
			},
			{
				name: 'Shield and mace',
				attack: 'Right straight punch to face',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/16/22'),
				notes: [
					'Step to 10:30 left forward bow, right hand over left hand',
					'Left forward bow, right outward block, left straight punch to right kidney',
					'Shuffle to 12, right inward handsword to neck'
				]
			},
			{
				name: 'Charging ram',
				attack: 'Low charge from 12',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('1/13/22'),
				notes: [
					'Step to 4:30 right forward bow, right downward block to left arm, left outward handsword to neck',
					'Right neutral bow, right inward handsword to neck',
					'Right ball kick to face',
					'Left roundhouse kick to solar plexus'
				]
			},
			{
				name: 'Shielding hammer (extension)',
				attack: 'Left roundhouse punch to face',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/23/21'),
				notes: [
					'Step to 5 right neutral bow, right extended outward block to right lower arm',
					'Right hammerfist to face',
					'Right outward elbow to solar plexus',
					'Step to 12 left front twist, right check left iliac crest, left vertical punch to solar plexus',
					'Unwind right upward claw to face, left check left iliac crest',
					'Right back kick to groin',
					'Left back kick to groin'
				]
			},
			{
				name: 'Thrusting salute (extension)',
				attack: 'Right ball kick to groin',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/23/21'),
				notes: [
					'Step to 4:30 left neutral bow, left downward block to right leg',
					'Right ball kick to groin',
					'Right heelpalm to chin',
					'Step to 10:30 left front twist, right check left arm, left vertical punch to solar plexus',
					'Unwind left inward elbow to solar plexus',
					'Left forward bow to 10:30, right hammerfist to left iliac crest',
					'Right inward back-knuckle to face, left check left shoulder',
					'Left neutral bow, left inward back-knuckle to face, right check right shoulder'
				]
			},
			{
				name: 'Evading the storm (extension)',
				attack: 'Right overhead club to face',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/23/21'),
				notes: [
					'Step to 9 left forward bow, right upward block to right upper arm',
					'Right grab right wrist',
					'Right roundhouse kick to solar plexus',
					'Step to 10:30 left front twist, left knee to right knee',
					'Right knee to right knee',
					'Step to 1:30 left front twist, left inward block to right upper arm',
					'Step to 1:30 right neutral bow',
					'Left grab right hand',
					'Right grab right hand',
					'Pull to 6 and over to takedown',
					'Right roundhouse kick to solar plexus'
				]
			},
			{
				name: 'Glancing salute (extension)',
				attack: 'Right cross shoulder shove',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/23/21'),
				notes: [
					'Step to 12 left neutral bow, right pin right hand, left inward block to right elbow',
					'Right heelpalm to chin, left check right upper arm',
					'Right grab neck',
					'Step-through to 12 right knee to solar plexus, right inward elbow to face',
					'Step to 1:30 right rear twist, right hammerfist to groin, left heelpalm to face',
					'Right buckle left leg',
					'Step to 7:30 right front twist, right outward back-knuckle to face',
					'Left two-finger poke right eye, right outward back-knuckle to face'
				]
			},
			{
				name: 'Lone kimono (extension)',
				attack: 'Left straight lapel grab',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/23/21'),
				notes: [
					'Step to 6 right neutral bow, right upward block to left elbow, left pin right wrist and twist',
					'Step to 5 right neutral bow, right downward hammerfist to groin',
					'Right forward bow, right outward extended block to left elbow, left heelpalm to face',
					'Drag-step to 12 right knife-edge kick to right knee, right inward handsword to neck'
				]
			},
			{
				name: 'Mace of aggression',
				attack: 'Two hand lapel grab',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/23/21'),
				notes: [
					'Step to 12 right neutral bow, right vertical punch to face, left pin right and left hands',
					'Right inward block to right and left arm',
					'Right inward elbow to face',
					'Right outward elbow to face'
				]
			},
			{
				name: 'Clutching feathers',
				attack: 'Left straight hair grab',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/14/21'),
				notes: [
					'Step to 6 right neutral bow, right vertical punch to armpit, left pin right hand',
					'Right outward block to right arm',
					'Right inward elbow to right jaw, left inward horizontal heelpalm to left jaw'
				]
			},
			{
				name: 'Captured twigs',
				attack: 'Low bear hug from 6, arms pinned',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/14/21'),
				notes: [
					'Step to 9 horse stance, right hammerfist to groin, left pin hands',
					'Step to 3 right cat, right outward elbow to solar plexus',
					'Right stomp to left foot',
					'Step to 3 horse stance, right vertical obscure elbow to chin'
				]
			},
			{
				name: 'Gift of destruction',
				attack: 'Right handshake',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/14/21'),
				notes: [
					'Step to 11 right knee to groin, left upward heelpalm to right elbow',
					'Right inward elbow to solar plexus, left check right arm'
				]
			},
			{
				name: 'Glancing salute',
				attack: 'Right cross shoulder shove',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/14/21'),
				notes: [
					'Step to 12 left neutral bow, right pin right hand, left inward block to right elbow',
					'Right heelpalm to chin, left check right upper arm',
					'Right grab neck',
					'Step-through to 12 right knee to solar plexus, right inward elbow to face'
				]
			},
			{
				name: 'Lone kimono',
				attack: 'Right straight lapel grab',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/14/21'),
				notes: [
					'Step to 6 right neutral bow, right upward block to left elbow, left pin right wrist and twist',
					'Right inward block to left elbow',
					'Right outward handsword to neck'
				]
			},
			{
				name: 'Checking the storm',
				attack: 'Right overhead club',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/4/21'),
				notes: [
					'Step to 3 left cat, right inward parry, left extended outward open palm block',
					'Left ball kick to groin',
					'Right knife-edge kick to right knee',
					'Right outward back-knuckle to face'
				]
			},
			{
				name: 'Deflecting hammer',
				attack: 'Right ball kick to groin',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/4/21'),
				notes: [
					'Step to 7:30 right neutral bow, right downward block to right leg',
					'Right shuffle to 1:30, right inward elbow to face, left check right shoulder'
				]
			},
			{
				name: 'Grasp of death',
				attack: 'Right headlock from 6',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/4/21'),
				notes: [
					'Step to 10:30 right close kneel, right grab right, head pinch left',
					'Left horse pinch groin',
					'V-step to 12, right snake and grab right wrist, left inward block to upper arm',
					'Right staright punch to face'
				]
			},
			{
				name: 'Sword and hammer',
				attack: 'Left side right shoulder grab from 3',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/4/21'),
				notes: [
					'Step to 2 right neutral bow, right rising obscure outward handsword to chin, left pin left hand',
					'Right hammerfist to groin'
				]
			},
			{
				name: 'Attacking mace',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/4/21'),
				notes: [
					'Step to 6 left netural bow, left inward block to right arm',
					'Left forward bow, right straight punch to solar plexus',
					'Right clockwise wave grab right arm',
					'Right step-through roundhouse kick to groin',
					'Right forward bow, left vertical punch to ribs'
				]
			},
			{
				name: 'Sword of destruction',
				attack: 'Left roundhouse punch to face',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/4/21'),
				notes: [
					'Step to 7 right neutral bow, right extended outward block to left arm',
					'Right ball kick to groin',
					'Right inward handsword to neck'
				]
			},
			{
				name: 'Alternating maces',
				attack: 'Low two-hand shove',
				startIn: 'Natural stance',
				class: 'West LA',
				learnedDate: new Date('12/4/21'),
				notes: [
					'Step to 6 right neutral bow, right low inward block to arms',
					'Right forward bow, left straight punch to solar plexus',
					'Right outward back-knuckle to face, left pushdown block to arms'
				]
			},
			{
				name: 'Pincher',
				attack: 'Right headlock',
				startIn: 'Right headlock',
				class: 'Black Belt',
				learnedDate: new Date('10/30/21'),
				notes: [
					'Right grab right and loosen grip',
					'Left pinch right inner thigh',
					'Left snake behind right arm',
					'Left step-through to 1:30',
					'Left pin right arm',
					'Right inverted roundhouse punch to face'
				]
			},
			{
				name: 'Retreating Pendulum',
				attack: 'Rear cross right side kick',
				startIn: 'Right neutral bow',
				class: 'Black Belt',
				learnedDate: new Date('10/23/21'),
				notes: [
					'Step to 6 left front twist, right frictional pull block to right leg',
					'Continue circles, right side kick to left knee, right hammering forearm to right collarbone',
					'Left drag to 12, right inward elbow to face',
					'Right rear scoop, right buckle'
				]
			},
			{
				name: 'Capturing the Rod',
				attack: 'Right straight gun',
				startIn: 'Natural stance',
				class: 'Black Belt',
				learnedDate: new Date('10/23/21'),
				notes: [
					'Left open hand extended outward block to right, grab gun',
					'Step to 12 right neutral bow, right finger slice to eyes, grab right wrist',
					'Right forward bow, poke eyes with barrel',
					'Right reverse step-through to 6',
					'Right front kick to solar plexus, pull gun to left',
					'Left check right arm, right grab gun, lifting gun to face'
				]
			},
			{
				name: 'Twisted Rod',
				attack: 'Right straight gun',
				startIn: 'Natural stance',
				class: 'Black Belt',
				learnedDate: new Date('10/23/21'),
				notes: [
					'Step to 12 left neutral bow, left grab wrist, right grab gun',
					'Left gun thrust to eyes',
					'Right step-through to 12 behind them',
					'Take down to 7:30',
					'Right stomp to left collarbone',
					'Right knee pin to left shoulder',
					'Right fingerspear to eyes',
					'Right take gun, outward strike to face, inward strike to face',
					'Clear right arm with right foot'
				]
			},
			{
				name: 'Defying the Rod',
				attack: 'Right straight gun',
				startIn: 'Natural stance',
				class: 'Black Belt',
				learnedDate: new Date('10/22/21'),
				notes: [
					'Right front kick to groin, right fingerspear to eyes, left open hand extended outward block grab gun',
					'Frictional pull block to right elbow',
					'Right inward elbow to face',
					'Right grab right armpit',
					'Step to 4:30 left neutral bow',
					'Right grab and twist gun',
					'Right hammering gun to head',
					'Right continue the circle hammering gun to spine',
					'Right knee to solar plexus'
				]
			},
			{
				name: 'Broken Rod',
				attack: 'Right gun to back',
				startIn: 'Natural stance',
				class: 'Black Belt',
				learnedDate: new Date('10/5/21'),
				notes: [
					'Put hands up, glance over left shoulder',
					'Step to 1:30 left neutral bow, right grab right wrist',
					'Left step-through to 7:30, left uppercut to right elbow',
					'Left hammerfist to groin',
					'Left inward forearm to right elbow',
					'Left grab right wrist, right grab gun',
					'Right step-through to 7:30, right rip gun from right hand',
					'Upward slice chin with gun',
					'Downward hammer to solar plexus with gun barrel'
				]
			},
			{
				name: 'Reprimanding the Bears',
				attack: 'Bear hug from 6, arms pinned, right straight punch from 12',
				startIn: 'Natural strance',
				class: 'Black Belt',
				learnedDate: new Date('9/18/21'),
				notes: [
					'Step to 9 horse stance, pin arms with left hand, right outward parry',
					'Right front kick to groin',
					'Right buckle left behind',
					'Right back hammerfist to groin behind',
					'Right grab neck and right knee to face behind, land in front twist',
					'Left side kick to groin front',
					'Rear twist to 12, left outweard back-knuckle to face front',
					'Right front kick to behind',
					'Left back kick to front'
				]
			},
			{
				name: 'Piercing Lance',
				attack: 'Low right knife thrust',
				startIn: 'Natural stance with hands up facing self',
				class: 'Black Belt',
				learnedDate: new Date('7/27/21'),
				notes: [
					'Left neutral bow to 12, right downward parry',
					'Left grab right wrist, wrap elbow to elbow',
					'Right reverse step-through to 12, right back elbow to spine',
					'Right grab right wrist',
					'Right step to 9, left outward handsword to neck',
					'Left grab face',
					'Right reverse shuffle to 9, drop right elbow on left knee',
					'Both hands grab right hand',
					'Left reverse step-through to 9',
					'Outward strike to face with knife',
					'Left hand switch grip, brace elbow against knee',
					'Right heelpalm to elbow (they roll over)',
					'Pin with right knee'
				]
			},
			{
				name: 'Heavenly Ascent',
				attack: 'Front two-hand choke',
				startIn: 'Natural stance',
				class: 'Black Belt',
				learnedDate: new Date('7/13/21'),
				notes: [
					'Right step to 12 neutral bow, clasp hands and lift',
					'Right back-knuckle to face',
					'Left hammering claw to face',
					'Right half-fist to neck'
				]
			},
			{
				name: 'Squeezing the Peach',
				attack: 'Bear hug from 6, arms pinned',
				startIn: 'Natural stance',
				class: 'Black Belt',
				learnedDate: new Date('8/14/21'),
				notes: [
					'Left cat stance, left grab groin, right pin arms',
					'Step to 12 concave stance, left pin arms',
					'Right leg back scoop',
					'Right back buckle, right obscure back elbow'
				]
			},
			{
				name: 'Snaking Talon',
				attack: 'Left straight punch, right straight punch',
				startIn: 'Natural stance',
				class: 'Black Belt',
				learnedDate: new Date('10/9/21'),
				notes: [
					'Step to 6 right neutral bow, right inward parry',
					'Right open hand extended outward block, grab right',
					'Right front kick',
					'Right pull to left',
					'Left rear scoop, right back kick'
				]
			},
			{
				name: 'Begging hands',
				attack: 'Two hand straight wrist grab',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right turn up, left turn up, left leg step to 6',
					'Right pull left hand, left pull right hand, right front kick to groin',
					'Left front kick to chin',
					'Right downward heelpalm to left shoulder, left downward heelpalm to right shoulder'
				]
			},
			{
				name: 'Brushing the storm',
				attack: 'Right overhead club from 3',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right heelpalm to face, left inward parry to right arm, right leg step to 12',
					'Right inward elbow to solar plexus, left leg step-through to 9',
					'Right underhand heelpalm to groin, right leg step-through to 1:30',
					'Right pull right thigh, left push right hip',
					'Left front scoop kick to groin',
					'Right side kick to left knee'
				]
			},
			{
				name: 'Buckling branch',
				attack: 'Left front kick',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right inside downward palm down block to right leg, left downward block to right leg, right leg step to 4:30',
					'Right front scoop kick to groin',
					'Left front kick right knee'
				]
			},
			{
				name: 'Calming the storm',
				attack: 'Right roundhouse club',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right vertical punch to face, left extended outward block to right wrist, right leg step to 12',
					'Right inward handsword to right shoulder, left middle knuckle to solar plexus',
					"Right outward back-knuckle to left ribs, left waiter's hand to right wrist"
				]
			},
			{
				name: 'Capturing the storm',
				attack: 'Right overhead club',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right and left upward block to right wrist, left leg step to 10:30',
					'Right and left grab right wrist',
					'Right line 3 to right foot, right leg step-through to 10:30',
					'Right line 1 to right wrist'
				]
			},
			{
				name: 'Circles of protection',
				attack: 'Right looping roundhouse punch',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right upward parry to right arm',
					'Left heelpalm to face, neutral bow',
					'Right underhand heelpalm to groin, left pull right arm',
					'Left outward back-knuckle to face'
				]
			},
			{
				name: 'Circling the horizon',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Circling wing',
				attack: 'Two hand choke from behind',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Right arm pin right hand',
					'Left leg step to 1:30',
					'Right hold right hand, left fingerspear to eyes, turn to 7:30',
					'Right upward elbow to head, left hold left arm',
					'Right underhand hammerfist to groin, left cover own right shoulder'
				]
			},
			{
				name: 'Conquering shield',
				attack: 'Right straight lapel grab',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right inward block to left arm, left pin right hand',
					'Right downward elbow to left arm, right front kick to right knee',
					'Right upward elbow to face, right overhead claw to face'
				]
			},
			{
				name: 'Crashing wings',
				attack: 'Low bear hug from 6, arms free',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right fingerspear, left fingerspear',
					'Right downward elbow to right arm, left downward elbow to left arm',
					'Left upward elbow to face, right cover own right shoulder, left leg v-step to 6',
					'Left pull neck, right hammerfist to groin',
					'Right rear stomp to face'
				]
			},
			{
				name: 'Cross of death',
				attack: 'Cross choke from 12',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right vertical punch to face',
					'Right pin right arm and left arm, left middle knuckle to solar plexus',
					'Right inward block to right arm and left arm, left pin right arm and left arm, right leg half step to 12',
					"Right vertical punch to left kidney, left waiter's hand to left arm, left leg step-through to 4:30",
					'Right vertical punch to head, right push left arm'
				]
			},
			{
				name: 'Crossed twigs',
				attack: 'Two hand wrist grab from behind',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right grab right wrist, left grab left wrist',
					'Right pull right, left pull left, left leg step to 1:30',
					'Right outward elbow to face, left to own back',
					'Right inward overhead elbow to spine',
					'Right hold spine, left hold spine, left knee to solar plexus'
				]
			},
			{
				name: 'Crossing talon',
				attack: 'Right wrist cross grab',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Left pin right hand, left leg step to 1:30',
					'Right hold right, left outward elbow to ribs',
					'Left inward overhead elbow to spine',
					'Left pin head, right knee to face'
				]
			},
			{
				name: 'Dance of darkness',
				attack: 'Right front kick, right straight punch',
				startIn: 'Right fighting stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right downward block to right leg, right leg step to 6',
					'Left inward parry to right arm, right outward parry to right arm',
					'Right inward claw to face, right leg step-through to 12',
					'Right outward back-knuckle to right ribs, left vertical punch to spine, left leg step-through to 12',
					'Right outward back-knuckle to face, left grab collar',
					'Right two-finger poke to right eye',
					'Left two-finger poke to left eye, left leg front sweep right leg'
				]
			},
			{
				name: 'Dance of death',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: new Date('03/28/2021'),
				notes: []
			},
			{
				name: 'Defensive cross',
				attack: 'Right front kick',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right and left cross block to right leg, left leg step to 6',
					'Right and left grab right leg, right leg step-through to 6',
					'Right outward back-knuckle to face, left downward claw to face and grab face',
					'Right front kick to groin, right lifting stiff-arm back-knuckle punch to face'
				]
			},
			{
				name: 'Defying the storm',
				attack: 'Right roundhouse club',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right inward block to right arm, left inward block to right arm, right leg half step to 12',
					'Right inward elbow to solar plexus and grab right shoulder, left grab right wrist',
					'Left pull right wrist, right leg step-through to 6',
					'Right knee to solar plexus, right inward overhead elbow to spine'
				]
			},
			{
				name: 'Delayed sword',
				attack: 'Left straight lapel grab',
				startIn: 'Natural stance',
				class: 'Black Belt',
				learnedDate: new Date('9/11/21'),
				notes: [
					'Step to 6 right neutral bow, right inward block to right arm',
					'Right front kick to groin',
					'Right outward handsword to neck'
				]
			},
			{
				name: 'Desperate falcons',
				attack: 'Two hand straight wrist grab',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Left strike right hand on own right',
					'Left stack on own right, left leg step to 12',
					'Left outward back-knuckle to face, right vertical punch to right ribs',
					'Right vertical punch and inward elbow to face, left check right arm, right leg step-through to 12',
					'Right hammerfist to right iliac crest',
					'Left leg step to own right leg, right leg buckle left knee',
					'Right leg buckle right knee'
				]
			},
			{
				name: 'Destructive fans',
				attack: 'Right straight punch from 9',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right outward parry to right arm, left leg step to 6',
					'Right hammerfist to solar plexus, left grab right arm',
					'Right overhead claw to face, left leg front sweep right leg',
					'Right leg rear sweep right leg',
					'Right vertical punch to face forward bow',
					'Right front stomp solar plexus'
				]
			},
			{
				name: 'Destructive kneel',
				attack: 'Deep right straight punch',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right outward parry to right wrist, right leg step to 6, left knee to right knee',
					'Right grab right wrist, left upward heelpalm to right elbow',
					'Right inward claw to face, left outward back-knuckle to right ribs, right knee to left heel',
					'Right outward back-knuckle to right ribs, left vertical punch to spine'
				]
			},
			{
				name: 'Destructive twins',
				attack: 'Two-hand choke from 12',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right straight punch to groin, left straight punch to face, right leg step to 12',
					'Left horizontal forearm block to right arm',
					'Right inward slice to eyes and horizontal forearm block to left arm, right leg step to 1:30',
					'Left outward block to left arm and two-finger poke to eyes',
					'Right inward horizontal heelpalm to left elbow, left leg step to 4:30',
					'Right side kick to left ribs'
				]
			},
			{
				name: 'Dominating circles',
				attack: 'Right cross shoulder grab, offset to 3',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Evading the storm',
				attack: 'Right overhead club',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Right upward block to right arm, left inward parry to right arm, left leg step to 9',
					'Right grab right wrist, right roundhouse kick to groin',
					'Left uppercut to right ribs',
					'Left grab right shoulder, left knee to right thigh',
					'Right knee stomp on right heel'
				]
			},
			{
				name: 'Falcons of force',
				attack: 'Two person shoulder grab from behind',
				startIn: 'Natural stance',
				class: 'Unknown',
				learnedDate: null,
				notes: [
					'Right outward handsword to neck, left pin right, right leg step to 1:30',
					'Right inward slice to eyes, left outward handsword to neck, right leg step to 10:30',
					'Right inward block to right arm, left step to 10:30',
					'Right front kick to groin',
					'Right back kick to groin'
				]
			},
			{
				name: 'Falling Falcon',
				attack: 'Left straight lapel grab',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right inward block to right arm, left pin right hand, right leg step to 10:30',
					'Right push right arm, turn to 6',
					'Right grab right wrist, left inward horizontal heelpalm to right elbow',
					'Left knee to right elbow, left side kick to face',
					'Left grab right wrist, right inward horizontal heelpalm to right elbow',
					'Right knee to right elbow, right heel kick to right ribs, right looping overhead kick to solar plexus'
				]
			},
			{
				name: 'Five Swords',
				attack: 'Right roundhouse punch',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right inward block to right arm, right leg step to 12',
					'Right outward handsword to neck',
					'Left heelpalm to face, forward bow',
					'Right uppercut to solar plexus, left cover to own right shoulder',
					'Left outward handsword to neck, right inward handsword to neck'
				]
			},
			{
				name: 'Flashing Wings',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Left inward block to right arm, left leg step to 12',
					'Right inward elbow to right ribs, left cover to own right shoulder',
					'Right outward elbow to right ribs',
					'Right outward handsword to neck, left inward handsword to neck',
					'Right punching chop to face'
				]
			},
			{
				name: 'Flight to Freedom',
				attack: 'Denied right hammerlock from behind',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Left outward elbow to face, right grab right wrist, left leg step to 6',
					'Left leg step to 1:30',
					'Left pull right wrist, right back kick to groin',
					'Right grab right wrist, left inward horizontal heelpalm to right elbow, left front kick left knee'
				]
			},
			{
				name: 'Glancing Spear',
				attack: 'Left straight wrist grab',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Left strike right hand on own right',
					'Right grab right wrist, right leg step-through to 6',
					'Left outward elbow to left ribs',
					"Left waiter's hand to right arm",
					'Right fingerspear to face, left pull right arm',
					'Left hold right arm, left leg front sweep right leg to 3',
					'Right leg rear sweep right leg',
					'Right looping overhead kick to solar plexus'
				]
			},
			{
				name: 'Grip of Death',
				attack: 'Attempted right headlock from behind',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right hammerfist to groin, left hammerfist to right kidney, right leg step-through to 9',
					'Left grab and pull face',
					'Right heelpalm to chin',
					'Right front kick to tailbone'
				]
			},
			{
				name: 'Leap of Death',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right outward parry to right wrist, right leg step to 6',
					'Right grab right wrist, left inward horizontal heelpalm to right elbow and outward back-knuckle to right ribs',
					'Left inward block to right arm',
					'Right heelpalm to head, left heelpalm to head',
					'Right pull chin, left pull chin',
					'Right inward handsword to neck',
					'Left push head, left knee to right shoulder',
					'Left leg leap to 9, right front kick to head'
				]
			},
			{
				name: 'Leaping Crane',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right inward middle knuckle to right ribs, left inward parry to right arm, left leg leap to 9',
					'Right side kick to right knee',
					'Right outward back-knuckle to right ribs',
					'Right inward elbow to right jaw, left inward horizontal heelpalm to left jaw'
				]
			},
			{
				name: 'Locked Wing',
				attack: 'Right hammerlock from behind',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Left outward elbow to face, right grab right wrist, left leg step to 6',
					'Left arm wrap right arm and pop elbow',
					'Left arm flex right elbow, right leg step-through to 4:30',
					'Right inward handsword to neck, right knee to face'
				]
			},
			{
				name: 'Locking Horns',
				attack: 'Guillotine choke from 12',
				startIn: 'Bent at the waist',
				class: 'Black Belt prep',
				learnedDate: new Date('12/14/21'),
				notes: [
					'Step to 12 right neutral bow, right ridgehand to groin, left outward handsword to right knee',
					'Right vertical obscure upward elbow to chin',
					'Right inward elbow to left jaw, left inward horizontal heelpalm to right jaw',
					'Extension',
					'Step to left front twist, hammerfist to groin',
					'Full right stomp to right foot',
					'Full left stomp to left foot'
				]
			},
			{
				name: 'Obstructing the Storm',
				attack: 'Right overhead club',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Parting Wings',
				attack: 'Attempted two-hand shove from 12',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right open hand extended outward block to left arm, left open hand extended outward block to right arm, right leg step to 6',
					'Right punching chop to left ribs, left cover to own right shoulder',
					'Left outward handsword to neck',
					'Right middle knuckle to solar plexus, left pull down arms'
				]
			},
			{
				name: 'Protecting Fans',
				attack: 'Left straight punch, right straight punch',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Left inward parry to left arm, left leg step to 10:30',
					'Right open hand extended outward block to right arm',
					'Right grab right wrist, left two-finger poke to eyes, right front kick to groin',
					'Right inward elbow to solar plexus, left grab right arm',
					'Right outward slice to eyes, right front scoop kick to groin',
					'Right two-finger poke to right eye, left push to right shoulder'
				]
			},
			{
				name: 'Raining claw',
				attack: 'Right uppercut',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Right horizontal forearm block to right arm, left leg step to 6',
					'Left downward claw to face',
					'Right vertical back-knuckle punch to face'
				]
			},
			{
				name: 'Raking mace',
				attack: 'Two hand lapel grab',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right middle knuckle to solar plexus, left pin right hand and left hand, right leg step to 12',
					'Left outward handsword to neck, forward bow',
					'Right hammerfist to face',
					'Right outward handsword to neck'
				]
			},
			{
				name: 'Repeating mace',
				attack: 'Attempted left center push',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					"Left waiter's hand to left wrist, left leg step to 3",
					'Right middle knuckle to left ribs and outward back-knuckle to left ribs',
					'Right looping overhead kick to left knee',
					'Extension',
					'Right outward back-knuckle to face',
					'Left thrusting sweep kick to left leg, land in front twist',
					'Unwind left heelpalm to face',
					'Right spinning back kick to groin',
					'Right buckle left leg',
					'Right stomp right knee',
					'Left rear cross stomp to groin',
					'Right stomp right ankle'
				]
			},
			{
				name: 'Reversing mace',
				attack: 'Baited left straight punch',
				startIn: 'Right fighting stance, right baiting',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Right inward block to left arm, left step to 3',
					"Right outward back-knuckle to left ribs, left waiter's hand to left arm",
					'Right looping overhead kick to left knee'
				]
			},
			{
				name: 'Scraping hoof',
				attack: 'Attempted full nelson',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right vertical punch to face, left vertical punch to face, left leg step to 9',
					'Right arm pin right arm, left arm pin left arm',
					'Right rear kick left knee, right scrape right knee'
				]
			},
			{
				name: 'Shield and mace',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'Unknown',
				learnedDate: null,
				notes: [
					'Right outward block to right arm, left inward parry to right arm, left leg step to 10:30',
					'Right hammerfist to right iliac crest, left check right arm',
					'Right inward reverse handsword to neck and outward handsword to right knee, left pull right arm',
					'Right side kick to left knee'
				]
			},
			{
				name: 'Sleeper',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Left inward block to right arm, left leg step to 12',
					'Right inward diagonal inner wrist to neck',
					'Right and left hold neck, right leg v-step to 1:30',
					'Right and left pull neck, left leg step to 6',
					'Right vertical punch to face'
				]
			},
			{
				name: 'Snapping twig',
				attack: 'Left straight center push',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: new Date('02/13/2021'),
				notes: []
			},
			{
				name: 'Spiraling twig',
				attack: 'High bear hug from 6, arms free',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right inward middle knuckle to right, left inward middle knuckle to left, right leg step to 3',
					'Right arm pin right arm, left arm pin left arm',
					'Right and left grab right',
					'Left leg step to 1:30',
					'Right leg step-through to 1:30',
					'Right front kick to solar plexus',
					'Right lifting stiff-arm back-knuckle punch to face'
				]
			},
			{
				name: "Striking serpent's head",
				attack: 'Bear hug from 12, arms free',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Left hooking back-knuckle to head, right leg half step to 6',
					'Left grab hair and pull, right half fist to neck'
				]
			},
			{
				name: 'Swinging pendulum',
				attack: 'Right roundhouse kick',
				startIn: 'Right fighting stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: []
			},
			{
				name: 'The backbreaker',
				attack: 'Right straight punch from 3',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right outward parry to right arm and two-finger poke to right eye, left inward parry to right arm, right leg step to 12',
					'Right grab right shoulder, right leg step to 1:30',
					'Left grab left shoulder, left leg step-through to 3',
					'Right leg step-through to 1:30, right knee to spine',
					'Right and left pull right and left shoulder',
					'Right grab chin, left grab hair',
					'Right downward handsword to upper lip',
					'Right overhead claw to face, left overhead claw to face',
					'Right outward back-knuckle to right collarbone, left outward back-knuckle to left collarbone',
					'Right downward heelpalm to right shoulder, left downward heelpalm to left shoulder, left leg step-through to 1:30',
					'Right side heel to head',
					'Right rear stomp to right collarbone'
				]
			},
			{
				name: 'Thrusting salute',
				attack: 'Right front kick',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Right inside downward palm down block to right leg, left downward block to right leg, right leg step to 4:30',
					'Right front kick to groin',
					'Right heelpalm to chin'
				]
			},
			{
				name: 'Thrusting wedge',
				attack: 'Attempted two hand choke from 12',
				startIn: 'Natural stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right and left outward claw to face, right leg step to 12',
					'Right pull left hand, left pull right hand',
					'Right upward elbow to face',
					'Right overhead claw to face'
				]
			},
			{
				name: 'Thundering hammers',
				attack: 'Right straight punch',
				startIn: 'Natural stance',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right inward block to right arm, left step to 10:30',
					'Right horizontal forearm to right kidney, left leg step to 12',
					'Right check right arm, left hammerfist to right kidney, left leg pin right knee',
					'Right hammerfist to neck, left check right arm, right leg pin right knee'
				]
			},
			{
				name: 'Triggered salute',
				attack: 'Left straight shoulder shove',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Twirling wings',
				attack: 'Two hand shoulder grab from behind',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Right inward elbow to solar plexus, left outward block to left arm, left leg step to 6',
					'Right check left arm, left inward elbow to solar plexus'
				]
			},
			{
				name: 'Unwinding pendulum',
				attack: 'Right front kick, right straight punch',
				startIn: 'Right fighting stance',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Wings of silk',
				attack: 'Upper arms held from behind (yoke grab)',
				startIn: 'Natural stance',
				class: 'Beginner',
				learnedDate: null,
				notes: [
					'Left pinch left thigh, left rear stomp left foot',
					'Right pull out of right arm, right leg rear scoop groin',
					'Right leg close kneel to 9',
					'Right uppercut to left elbow, left leg step-through to 9'
				]
			}
		]
	};
 * 
 * 
 */
