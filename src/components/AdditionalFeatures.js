import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { addFeature } from '../actions'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.additionalFeatures.length ? (
        <ol type="1">
          {props.store.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeatures);
