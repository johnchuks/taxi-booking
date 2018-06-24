import { connect } from "react-redux";
import Home from '../components/Home';
import { setName } from "../modules/home";

const mapStateToProps = (state) => ({
    title: state.home.title
})
export default connect(mapStateToProps, { setName })(Home);
 