export interface PrintAiProjectManifest { format: 'printai.project'; formatVersion: 1; appVersion: string; project: { id: string; name: string; createdAt: string; updatedAt: string }; printMode: 'single_color' | 'multi_color'; detailStyle: 'smooth_color' | 'geometry_details'; }
export const PRINTAI_PROJECT_EXTENSION = '.printai';
