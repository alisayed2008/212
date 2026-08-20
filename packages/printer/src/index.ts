export interface PrinterCapabilities { buildVolume: { xMm: number; yMm: number; zMm: number }; supportedMaterials: string[]; extruderCount: number; colorSlotCount: number; supportsMultiColor: boolean; supportsPauseResume: boolean; supportsProgressTelemetry: boolean; supportedFileTypes: Array<'gcode' | '3mf'>; }
export interface PrinterStatus { state: 'offline' | 'idle' | 'connecting' | 'ready' | 'printing' | 'paused' | 'error'; beginnerMessage: string; technicalDetails?: string; }
export interface PrinterAdapter {
  id: string;
  displayName: string;
  connect(input: unknown): Promise<{ printerId: string; status: PrinterStatus }>;
  disconnect(printerId: string): Promise<void>;
  getStatus(printerId: string): Promise<PrinterStatus>;
  getCapabilities(printerId: string): Promise<PrinterCapabilities>;
  sendPrintJob(input: unknown): Promise<{ printJobId: string; accepted: boolean }>;
  pause(printJobId: string): Promise<void>;
  resume(printJobId: string): Promise<void>;
  cancel(printJobId: string): Promise<void>;
  getProgress(printJobId: string): Promise<{ progress: number; message: string }>;
}
