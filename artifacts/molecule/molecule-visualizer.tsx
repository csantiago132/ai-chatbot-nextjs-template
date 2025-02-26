import { memo, useEffect, useRef, type FC, CSSProperties } from 'react';
import { get, isEqual } from 'lodash-es';

interface MoleculeViewerProps {
  className?: string;
  pdbData: string | unknown;
  size?: 'small' | 'large';
  style?: CSSProperties;
}

const PureMoleculeViewer: FC<MoleculeViewerProps> = (props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { pdbData } = props;

  useEffect(() => {
    if (!containerRef.current || typeof pdbData !== 'string') return;

    // @ts-ignore as its being imported directly on the HTML file
    const viewer = $3Dmol.createViewer(containerRef.current, {
      backgroundColor: 'ghostwhite',
    });

    // @ts-ignore as its being imported directly on the HTML file
    $3Dmol.download(
      pdbData,
      viewer,
      { multimodel: true, frames: true },
      function () {
        viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
        viewer.zoom(1.2, 1000);
        viewer.render();
      },
    );
  }, [pdbData]);

  return (
    <div
      ref={containerRef}
      className={props.className}
      style={{
        ...get(props, ['style'], {
          width: '350px',
          height: '560px',
        }),
        position: 'relative',
      }}
    />
  );
};

export const MoleculeViewer = memo(PureMoleculeViewer, (prevProps, nextProps) =>
  isEqual(prevProps.pdbData, nextProps.pdbData),
);
