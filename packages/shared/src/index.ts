export type PrintAiPlan = 'free' | 'pro';
export type PrintAiFeature = 'basicImageTo3D' | 'multiViewReconstruction' | 'advancedColorAnalysis' | 'automaticOrientation';

export interface SubscriptionEntitlements {
  plan: PrintAiPlan;
  features: Record<PrintAiFeature, boolean>;
  maxPrinters: number;
}
