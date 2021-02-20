import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { loading, technicians } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    technicians?.length > 1 &&
    technicians.map(tech => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};
const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
