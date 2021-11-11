import React from 'react';
import { withRouter } from 'react-router-dom';
import studioBag from '../../assets/reusable-eco-friendly-tote-bag (1).jpg';
import './main.section.styles.scss';

const MainSection = ({ history }) => {
  return (
    <div className="main-section-container">
      <div className="main-section-middle">
        <div className="ms-m-image">
          <img src={studioBag} alt="studio bag" />
        </div>
        <div className="ms-mdescription">
          <h2>Designed for fashion.crafted for sport</h2>
          <p>
            We make products that effortlessly transition from day to night.
            from the board room to the fitness studio, and everywhere in
            between, each nomads piece is thoughtfully created to be the perfect
            balance of from and function.
          </p>
          <button
            className="button is-button"
            id="shop-now"
            onClick={() => history.push('/product/1')}
          >
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MainSection);
