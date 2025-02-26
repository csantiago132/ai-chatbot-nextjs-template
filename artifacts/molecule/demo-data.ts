import { MOLECULE_DEMO } from '@/artifacts/molecule/constants';
import { DocumentArtifactKind } from '@/lib/enums';

const predictedProperties = {
  '[GHS] Acute Toxicity': { prob: 83, confidence: 1.0 },
  '[GHS] Carcinogenicity': { prob: 98, confidence: 1.0 },
  '[GHS] DART': { prob: 99, confidence: 1.0 },
  '[GHS] Eye Irritation': { prob: 12, confidence: 0.5 },
  '[GHS] Skin Corrosion/Irritation': { prob: 14, confidence: 0.375 },
  '[GHS] Skin Sensitization': { prob: 58, confidence: 0.25 },
  '[GHS] STOT SE: Cardiovascular Toxicity': { prob: 85, confidence: 0.625 },
  '[GHS] STOT SE: Liver Toxicity': { prob: 96, confidence: 1.0 },
  '[GHS] STOT SE: Neurological Toxicity': { prob: 99, confidence: 1.0 },
  'Cellular Activity': { prob: 47, confidence: 1.0 },
  'Ecological Activity': { prob: 1, confidence: 1.0 },
  'Endocrine Activity': { prob: 100, confidence: 1.0 },
  'Enzyme Activity': { prob: 99, confidence: 1.0 },
  'Immune Activity': { prob: 98, confidence: 1.0 },
  'Metabolic Activity': { prob: 37, confidence: 1.0 },
  'Stress Response': { prob: 67, confidence: 1.0 },
  Mutagenicity: { prob: 84, confidence: 0.875 },
};

const pdbDataObject = {
  fileId: 'pdb:1A50',
};

export const pbdPayloadJsonString: string = JSON.stringify(
  pdbDataObject,
  null,
  2,
);

export const createMoleculeDemo = (): string => {
  return `create a document with title "${MOLECULE_DEMO} ${new Date().toISOString()}"`;
};

export const predictedPropertiesJsonString: string = JSON.stringify(
  predictedProperties,
  null,
  2,
);

export const documentDemoParts = [
  {
    type: DocumentArtifactKind.PREDICTED_PROPERTIES,
    data: predictedProperties,
  },
  { type: DocumentArtifactKind.PBD_Data, data: pdbDataObject },
];

export const chatDemoParts: Array<{
  type: 'text';
  text: string;
}> = [
  { type: 'text', text: predictedPropertiesJsonString },
  { type: 'text', text: pbdPayloadJsonString },
];
