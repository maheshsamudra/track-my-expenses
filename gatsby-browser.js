import "./src/styles/theme/index.scss"
import "./src/styles/base.scss"

import React from "react"
import PropTypes from "prop-types"


export const wrapRootElement = ({ element }) => (
   <>{element}</>
)

wrapRootElement.propTypes = {
   element: PropTypes.isRequired,
}
