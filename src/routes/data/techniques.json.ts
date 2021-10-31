import type { RequestHandler } from '@sveltejs/kit';
import type { DataResponse } from '../../types/data/DataResponse';
import type { Technique } from '../../types/data/objectTypes/Technique';

export const get: RequestHandler<
	Record<string, any>,
	Record<string, any>,
	DataResponse<Technique>
> = async () => {
	return {
		body: [
			{
				name: 'Snaking Talon',
				attack: 'Left straight punch, right straight punch',
				startIn: 'Natural stance with arms free',
				class: 'Black Belt',
				learnedDate: null,
				notes: ['Right inward parry', 'Right outward parry']
			},
			{
				name: 'Begging hands',
				attack: 'Two hand straight wrist grab',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Circling wing',
				attack: 'Two hand choke from behind',
				startIn: 'Natural stance with arms free',
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
				name: 'Clutching feathers',
				attack: 'Straight right lapel grab / hair grab',
				startIn: 'Natural stance with arms free',
				class: 'Unknown',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Conquering shield',
				attack: 'Straight right lapel grab',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
				class: 'Intermediate',
				learnedDate: new Date('03/28/2021'),
				notes: []
			},
			{
				name: 'Defensive cross',
				attack: 'Right front kick',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				attack: 'Straight left lapel grab',
				startIn: 'Natural stance with arms free',
				class: 'Black Belt',
				learnedDate: null,
				notes: [
					'Right inward block to right arm, left leg step to 6',
					'Right front kick to groin',
					'Right outward handsword to neck'
				]
			},
			{
				name: 'Desperate falcons',
				attack: 'Two hand straight wrist grab',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Evading the storm',
				attack: 'Right overhead club',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				name: 'Falling falcon',
				attack: 'Left straight lapel grab',
				startIn: 'Natural stance with arms free',
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
				name: 'Five swords',
				attack: 'Right roundhouse punch',
				startIn: 'Natural stance with arms free',
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
				name: 'Flashing wings',
				attack: 'Right straight punch',
				startIn: 'Natural stance with arms free',
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
				name: 'Flight to freedom',
				attack: 'Denied right hammerlock from behind',
				startIn: 'Natural stance with arms free',
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
				name: 'Glancing spear',
				attack: 'Straight left wrist grab',
				startIn: 'Natural stance with arms free',
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
				name: 'Grip of death',
				attack: 'Attempted right headlock from behind',
				startIn: 'Natural stance with arms free',
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
				name: 'Gripping talon',
				attack: 'Straight right wrist grab',
				startIn: 'Natural stance with arms free',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right strike left hand on own left',
					'Right underhand hammerfist to groin, left grab left wrist',
					'Right outward back-knuckle to left ribs, left leg step to 12',
					'Right inward horizontal forearm to neck, right leg buckle left knee'
				]
			},
			{
				name: 'Leap of death',
				attack: 'Right straight punch',
				startIn: 'Natural stance with arms free',
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
				name: 'Leaping crane',
				attack: 'Right straight punch',
				startIn: 'Natural stance with arms free',
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
				name: 'Locked wing',
				attack: 'Right hammerlock from behind',
				startIn: 'Natural stance with arms free',
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
				name: 'Locking horns',
				attack: 'Guillotine choke from 12',
				startIn: 'Bent at the waist',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right lifting reverse handsword to groin, left pushdown block to right thigh, right leg step to 12',
					'Right obscured upward elbow to chin',
					'Right inward elbow to left jaw, left inward horizontal heelpalm to right jaw'
				]
			},
			{
				name: 'Mace of aggression',
				attack: 'Two hand lapel grab',
				startIn: 'Natural stance with arms free',
				class: 'Unknown',
				learnedDate: null,
				notes: [
					'Right hammerfist to face, left pin right hand and left hand, right leg step to 12',
					'Right outward elbow to solar plexus'
				]
			},
			{
				name: 'Obstructing the storm',
				attack: 'Right overhead club',
				startIn: 'Natural stance with arms free',
				class: 'Intermediate',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Parting wings',
				attack: 'Attempted two-hand shove from 12',
				startIn: 'Natural stance with arms free',
				class: 'Intermediate',
				learnedDate: null,
				notes: [
					'Right open palm extended outward block to left arm, left open palm extended outward block to right arm, right leg step to 6',
					'Right punching chop to left ribs, left cover to own right shoulder',
					'Left outward handsword to neck',
					'Right middle knuckle to solar plexus, left pull down arms'
				]
			},
			{
				name: 'Protecting fans',
				attack: 'Left straight punch, right straight punch',
				startIn: 'Natural stance with arms free',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Left inward parry to left arm, left leg step to 10:30',
					'Right open palm extended outward block to right arm',
					'Right grab right wrist, left two-finger poke to eyes, right front kick to groin',
					'Right inward elbow to solar plexus, left grab right arm',
					'Right outward slice to eyes, right front scoop kick to groin',
					'Right two-finger poke to right eye, left push to right shoulder'
				]
			},
			{
				name: 'Raining claw',
				attack: 'Right uppercut',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					"Left waiter's hand to left wrist, left leg step to 3",
					'Right middle knuckle to left ribs and outward back-knuckle to left ribs',
					'Right looping overhead kick to left knee'
				]
			},
			{
				name: 'Returning storm',
				attack: 'Right roundhouse club, right backhand club',
				startIn: 'Natural stance with arms free',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Left leg step to 7:30',
					'Right inward block to right arm, left inward block to right arm, left leg step-through to 1:30',
					'Right pull right wrist, left inward block to right arm, left leg step to 12',
					'Right lifting stiff-arm back-knuckle punch to face, left grab right arm, right front kick to solar plexus'
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				name: 'Shielding hammer',
				attack: 'Left hooking punch',
				startIn: 'Natural stance with arms free',
				class: 'Beginner',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Sleeper',
				attack: 'Right straight punch',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
				class: 'Black Belt prep',
				learnedDate: new Date('02/13/2021'),
				notes: []
			},
			{
				name: 'Spiraling twig',
				attack: 'High bear hug from 6, arms free',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				name: 'Thrusting prongs',
				attack: 'Bear hug from 12, arms pinned',
				startIn: 'Natural stance with arms free',
				class: 'Black Belt prep',
				learnedDate: null,
				notes: [
					'Right prong to left hip, left prong to right hip, right leg step to 6',
					'Left u-check to right arm',
					'Right back elbow to left arm, right knee to groin',
					'Right inward elbow to face'
				]
			},
			{
				name: 'Thrusting salute',
				attack: 'Right front kick',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
				attack: 'Straight left shoulder shove',
				startIn: 'Natural stance with arms free',
				class: 'Beginner',
				learnedDate: null,
				notes: []
			},
			{
				name: 'Twirling wings',
				attack: 'Two hand shoulder grab from behind',
				startIn: 'Natural stance with arms free',
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
				startIn: 'Natural stance with arms free',
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
