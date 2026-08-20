export interface ProviderHealth { available: boolean; degraded?: boolean; message?: string; }
export interface ImageUnderstandingProvider {
  id: string;
  describeImage(input: { imageUri: string; userId: string; projectId: string }): Promise<{ suggestedProjectName: string; description: string; confidence: number }>;
  healthCheck(): Promise<ProviderHealth>;
}
export interface ImageTo3DProvider {
  id: string;
  generateModel(input: { projectId: string; userId: string; sourceImages: Array<{ uri: string; view?: string }>; printMode: 'single_color' | 'multi_color'; detailStyle: 'smooth_color' | 'geometry_details'; targetDimensions: { heightMm?: number; widthMm?: number; depthMm?: number; lockProportions: boolean } }): Promise<{ modelUri: string; format: 'glb' | 'stl' | 'obj' | '3mf'; warnings: string[]; generationMetadata: Record<string, unknown> }>;
  healthCheck(): Promise<ProviderHealth>;
}
