import React from 'react'
import Repoitems from './Repoitems'

const Repos = ({repos}) => {
  return repos.map(repo => <Repoitems repo={repo} key={repo.id}/>)
}

// Repos.propTypes = {
//     repos: PropTypes.array.isRequired,
// }

export default Repos
