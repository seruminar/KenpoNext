export type Technique = {
	name: string;
	attack: string;
	sequence: number;
	video: string;
	startIn: string;
	belt: string;
	class: 'Beginner' | 'Intermediate' | 'Black Belt prep' | 'Black Belt' | 'Unknown' | 'West LA';
	learnedDate: Date;
	notes: string[];
};
