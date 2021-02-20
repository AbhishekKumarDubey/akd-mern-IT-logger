import { useEffect } from 'react';
import { connect } from 'react-redux';

import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { loading, technicians } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading && technicians && technicians.length > 0 ? (
            technicians.map(tech => <TechItem tech={tech} key={tech.id} />)
          ) : (
            <h4>No technician available!</h4>
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
