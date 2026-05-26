const Setup = ({ onSelectSymbol }) => {
  return (
    <div className="setup">
      <h2>Choisissez votre pion</h2>
      <div className="setup-buttons">
        <button onClick={() => onSelectSymbol('X')}>X (Croix)</button>
        <button onClick={() => onSelectSymbol('O')}>O (Rond)</button>
      </div>
    </div>
  );
};

export default Setup;