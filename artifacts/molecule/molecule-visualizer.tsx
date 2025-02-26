import { memo, useEffect, useRef, type FC } from 'react';
import isEqual from 'lodash/isEqual';

interface Atom {
  atomId: number;
  atomName: string;
  residue: string;
  chain: string;
  residueId: number;
  x: number;
  y: number;
  z: number;
  occupancy: number;
  temperatureFactor: number;
  element: string;
}

interface Header {
  proteinBinding: string;
  date: string;
  code: string;
}

interface PdbData {
  header: Header;
  title: string;
  atoms: Atom[];
}

interface MoleculeViewerProps {
  pdbData: Record<string, unknown>;
  size?: 'small' | 'large';
}

const PureMoleculeViewer: FC<MoleculeViewerProps> = ({ pdbData }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    // @ts-ignore as its being imported directly on the HTML file
    const viewer = $3Dmol.createViewer(containerRef.current, {
      backgroundColor: 'ghostwhite',
    });

    // @ts-ignore as its being imported directly on the HTML file
    $3Dmol.download(
      'pdb:1MO8',
      viewer,
      { multimodel: true, frames: true },
      function () {
        viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
        viewer.render();
      },
    );
  }, [pdbData]);

  return (
    <div
      ref={containerRef}
      style={{ width: '400px', height: '600px', position: 'relative' }}
    />
  );
};

export const MoleculeViewer = memo(PureMoleculeViewer, (prevProps, nextProps) =>
  isEqual(prevProps.pdbData, nextProps.pdbData),
);
