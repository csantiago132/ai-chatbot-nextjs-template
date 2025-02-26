import { MOLECULE_DEMO } from '@/artifacts/molecule/constants';
import { DocumentArtifactKind } from '@/lib/enums';

export const demoPbdData = `${MOLECULE_DEMO}
\`\`\`md
HEADER    PROTEIN BINDING                      01-JAN-20   6XYZ
TITLE     STRUCTURE OF PROTEIN XYZ
ATOM      1  N   ALA A   1      11.804  18.255  17.872  1.00 36.88           N
ATOM      2  CA  ALA A   1      11.804  17.364  16.715  1.00 37.78           C
ATOM      3  C   ALA A   1      10.877  16.181  16.946  1.00 34.62           C
ATOM      4  O   ALA A   1      10.431  15.933  18.060  1.00 30.65           O
ATOM      5  CB  ALA A   1      13.232  16.884  16.460  1.00 38.34           C
ATOM      6  N   GLY A   2       8.928  15.328  15.930  1.00 32.33           N
ATOM      7  CA  GLY A   2       8.558  14.120  16.599  1.00 30.52           C
ATOM      8  C   GLY A   2       7.255  14.194  17.344  1.00 27.39           C
ATOM      9  O   GLY A   2       6.672  13.159  17.667  1.00 26.01           O
ATOM     10  N   ASP A   3       6.781  15.350  17.737  1.00 24.17           N
ATOM     11  CA  ASP A   3       5.577  15.533  18.503  1.00 22.03           C
HETATM  610  O   HOH A  77      20.857  40.179  26.620  1.00 35.55           O
HETATM  611  O   HOH A  78      21.897  26.590  16.130  1.00 51.69           O
\`\`\
`;

export const createMoleculeDemo = (): string => {
  return `create a document with title "${MOLECULE_DEMO} ${new Date().toISOString()}"`;
};

export const predictedProperties: string = JSON.stringify(
  {
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
  },
  null,
  2,
);

export const documentDemoParts = [
  {
    type: DocumentArtifactKind.PREDICTED_PROPERTIES,
    data: predictedProperties,
  },
  { type: DocumentArtifactKind.PBD_Data, data: demoPbdData },
];

export const chatDemoParts: Array<{ type: 'text'; text: string }> = [
  { type: 'text', text: predictedProperties },
  { type: 'text', text: demoPbdData },
];
