import type { RequestHandler } from '@sveltejs/kit/';
import type { DataResponse } from '../../types/data/DataResponse';
import type { Technique } from '../../types/data/objectTypes/Technique';

/*

{
  name: '',
  attack: '',
  startIn: 'Natural stance',
  class: 'West LA',
  learnedDate: new Date('3/8/22'),
  notes: [
    '',
    '',
    ''
  ]
},

*/
export const get: RequestHandler<DataResponse<Technique>> = async () => {
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
};
