import React from "react";
import "./Admin.css";

import HomeIcon from "@material-ui/icons/Home";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import AppsIcon from "@material-ui/icons/Apps";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Admin = () => {
  return (
    <div className="admin__container">
      <div className="admin__sidenav">
        <div className="admin__icon">
          <HomeIcon /> Overviews
        </div>
        <div className="admin__icon">
          <PermIdentityIcon /> Customers
        </div>

        <div className="admin__icon">
          <AppsIcon /> Menus
        </div>

        <div className="admin__icon">
          <SettingsIcon className="ui__icon"/> Settings
        </div>
        <div className="admin__icon">
          <ExitToAppIcon /> Sign Out
        </div>
      </div>

      <div className="admin__mainsection">
        <div className="adminsection__header">
          <h2 className="admin__header">Service Requests</h2>
          <div className="filter__icon"></div>
        </div>

        <div className="admin__requests__count">
          <div className="count__values one">
            2873 <span>Total orders</span>
          </div>
          <div className="count__values two">
            4281 <span>Total Delivered</span>
          </div>
          <div className="count__values three">
            536 <span>Pending Orders</span>
          </div>
          <div className="count__values four">
            901 <span>Orders Hold</span>
          </div>

          <button className="add__neworders">Add New Orders</button>
        </div>

        {/* name, phone, email, address, date booked, service */}

        <div className="listing__table">
          <table>
            <tr className="table__headers">
              <th>client</th>
              <th>date</th>
              <th>type</th>
              <th>email</th>
              <th>phone</th>
              <th>status</th>
            </tr>

            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
            <tr className="for__details">
              <td>Oluwashola</td>
              <td>27-10-2021</td>
              <td>Vaccination</td>
              <td>temitayo@gmail.com</td>
              <td>08167943849</td>
              <td id="status">completed</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
