import { connect } from 'react-redux';
import { saveMyMovie } from '../actions';
import { removeMyMovie } from '../actions';
import ListToggle from '../components/ListToggle';

const mapDispatchToProps = (dispatch) => {
    return {
        saveMyMovie: (txt) => dispatch(saveMyMovie(txt)),
        removeMyMovie: (txt) => dispatch(removeMyMovie(txt))
    }
}
  
export default connect(null, mapDispatchToProps)(ListToggle);
