import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const DetailsItem = ({ details }) => {
  return (
    <div>
      <h1 className="animate__animated animate__fadeInDown">
        Details of <b>{details.name}</b>
      </h1>

      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            style={{ width: "400px" }}
            className="card-img-top animate__animated animate__fadeInLeft "
            src={details.image_path}
            alt="Card image cap"
          />
        </div>
        <div className="col-md-6 animate__animated animate__fadeInRight">
          <h2 className="mb-3">
            <b>General Information</b>
          </h2>
          <p>
            <b>Country:</b> {details.country}
          </p>
          <p>
            <b>Network:</b> {details.network}
          </p>
          <p>
            <b>Start Date:</b> {details.start_date}
          </p>
          <p>
            <b>End Date:</b> {details.end_date ? details.end_date : "--"}
          </p>
          <p>
            <b>Rating:</b> {details.rating} / 10
          </p>
          <div className="mb-3">
            <span className="star-rating">
              <b>Star:</b>
              {Array.from(
                { length: Math.floor(details.rating) },
                (_, index) => (
                  <FontAwesomeIcon
                    style={{ color: "#ffe234" }}
                    key={index}
                    icon={faStar}
                  />
                )
              )}
            </span>
          </div>
          <p style={{ textAlign: "justify" }}>
            <b>Description:</b> {details.description}
          </p>
        </div>
      </div>
    </div>
  );
};
