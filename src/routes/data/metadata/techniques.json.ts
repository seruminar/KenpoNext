import type { RequestHandler } from '@sveltejs/kit';
import type { Technique } from '../../../types/data/objectTypes/Technique';
import type { MetadataResponse } from '../../../types/data/MetadataResponse';

export const get: RequestHandler<
	Record<string, string>,
	Record<string, string>,
	MetadataResponse<Technique>
> = async () => {
	return {
		body: {
			name: {
				name: 'Name',
				filterable: true
			},
			attack: {
				name: 'Attack',
				filterable: true
			},
			belt: {
				name: 'Belt',
				filterable: true
			},
			sequence: {
				name: 'Belt sequence',
				filterable: false
			},
			startIn: {
				name: 'Start in',
				filterable: true
			},
			class: {
				name: 'Class',
				filterable: true
			},
			learnedDate: {
				name: 'Learned',
				filterable: false
			},
			notes: {
				name: 'Notes',
				filterable: false
			}
		}
	};
};
