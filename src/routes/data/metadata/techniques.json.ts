import type { RequestEvent, EndpointOutput } from '@sveltejs/kit';
import type { Technique } from '../../../types/data/objectTypes/Technique';
import type { MetadataResponse } from '../../../types/data/MetadataResponse';
import type { MaybePromise } from '@sveltejs/kit/types/helper';

export function get(
	event: RequestEvent
): MaybePromise<EndpointOutput<MetadataResponse<Technique>>> {
	return {
		body: {
			name: {
				name: 'Name',
				header: true,
				filterable: true
			},
			attack: {
				name: 'Attack',
				header: false,
				filterable: true
			},
			belt: {
				name: 'Belt',
				header: true,
				filterable: true
			},
			sequence: {
				name: '#',
				header: true,
				filterable: false
			},
			startIn: {
				name: 'Start in',
				header: false,
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
			video: {
				name: 'Video',
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
}
