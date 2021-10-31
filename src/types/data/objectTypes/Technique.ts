export type Technique = {
	name: string;
	attack: string;
	startIn: string;
	class: 'Beginner' | 'Intermediate' | 'Black Belt prep' | 'Black Belt' | 'Unknown';
	learnedDate: Date;
	notes: string[];
};
