// rrd imports
import { Form, NavLink } from "react-router-dom"
import PropTypes from 'prop-types';

// library
import { TrashIcon } from '@heroicons/react/24/solid'

// assets
import  logoMark from "../assets/logoMark.svg"; 

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink
        to="/"
        aria-label="Go to home"
      >
        <img src={logoMark} alt="" height={30} />
        <span>HomeBudget</span>
      </NavLink>
      {
        userName && (
          <Form
            method="post"
            action="logout"
            onSubmit={(event) => {
              if (!confirm("Delete user and all data?")) {
                event.preventDefault()
              }
            }}
          >
            <button type="submit" className="btn btn--warning">
              <span>Delete User</span>
              <TrashIcon width={20} />
            </button>

          </Form>
        )
      }
    </nav>
  )
}




Nav.propTypes = {
  userName: PropTypes.string,
}
  
  
  

export default Nav




