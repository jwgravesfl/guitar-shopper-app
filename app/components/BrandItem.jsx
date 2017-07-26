export default ({ brand }) => {
  return (
    <div className="list-group-item min-content user-item">
      <div className="media">
        <div className="media-left media-middle icon-container">
        </div>
        <NavLink
          className="media-body"
          activeClassName="active"
          to={`/brands/${brand.id}`}>
          <h4 className="media-heading tucked">
            <span placeholder="Brand...">{brand.name}</span>
          </h4>
          <h5 className="tucked">
            <span>{brand.email}</span>
          </h5>
          <h5 className="tucked">
            <span>{brand.phone}</span>
          </h5>
          <h5 className="tucked">
            <span>{brand.address}</span>
          </h5>
          <h5 className="tucked">
            <span>{brand.city}, {brand.state}</span>
          </h5>
          <p className="tucked">
            <span>{brand.description}</span>
          </p>
        </NavLink>
      </div>
    </div>
  )
}
