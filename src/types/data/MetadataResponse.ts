import type { PropertyMetadata } from './PropertyMetadata';

export type MetadataResponse<ObjectType> = {
	[P in keyof ObjectType]: PropertyMetadata;
};
