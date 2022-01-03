import React, { useEffect, useCallback } from "react";
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";
import { connect } from 'react-redux';
import { fetchStands } from '../actions/index';
import { useStaticQuery, graphql } from "gatsby" // to query for image data
import Img from "gatsby-image";

export const StandsList = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "1_1.png" }) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const stand = {
    id: 1,
  };

  const backImg = "";

  return (
    <div className="stands-list container__inner">
      <div className="box" key={stand.id}>
        <div className={backImg ? "box__inner box__inner_flip" : "box__inner"}>
          <figure className="box__image box__image_front">
            <Img fluid={data.file.childImageSharp.fluid} />
          </figure>
          <figure className="box__image box__image_back">{backImg}</figure>
        </div>
      </div>
    </div>
  );
}

// function mapStateToProps(state) {

//   if (!state.stands.items.length) {
//     return {stands: []};
//   }

//   const { type, mark, view, country, shape, turn, items } = state.stands;

//   return {
//     stands: sortStands(type, mark, view, country, shape, turn, items)
//   };
// }


// export default connect(mapStateToProps, { fetchStands })(StandsList);
