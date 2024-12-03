import PropTypes from 'prop-types';
// import "react-responsive-modal/styles.css";
import "./VerCandidatosModal.css";

export function VerCandidatosModal({ candidates }) {
  return (
      <>
        <h2 className="text-2xl font-bold mb-4">Candidatos</h2>
        <ul className="list-disc p-10">
          {candidates.length > 0 ? (
            candidates.map((candidate, index) => (
              <li key={index} className="mb-2">{candidate}</li>
            ))
          ) : (
            <li>Nenhum candidato ainda.</li>
          )}
        </ul>
      </>
  );
}

VerCandidatosModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.string).isRequired,
};