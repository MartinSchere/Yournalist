import React, { useState } from "react";

export interface SourceProps {
  sourceId: string;
  sourceName: string;
  onSelect: (sourceId: string) => void;
}

const Source: React.FunctionComponent<SourceProps> = ({
  sourceId,
  sourceName,
  onSelect,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className={isSelected ? "source selected" : "source"}
      onClick={() => {
        onSelect(sourceId);
        setIsSelected(!isSelected);
      }}
    >
      <h5 className="source-title">{sourceName}</h5>
    </div>
  );
};

export default Source;
