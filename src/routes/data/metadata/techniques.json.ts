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
				header: true,
				filterable: true
			},
			attack: {
				name: 'Attack',
				header: true,
				filterable: true
			},
			belt: {
				name: 'Belt',
				header: true,
				filterable: true
			},
			sequence: {
				name: 'Belt sequence',
				header: true,
				filterable: false
			},
			startIn: {
				name: 'Start in',
				header: true,
				filterable: true
			},
			class: {
				name: 'Class',
				header: true,
				filterable: true
			},
			learnedDate: {
				name: 'Learned',
				header: false,
				filterable: false
			},
			notes: {
				name: 'Notes',
				header: false,
				filterable: false
			}
		}
	};
};
