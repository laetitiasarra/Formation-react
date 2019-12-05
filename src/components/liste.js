import React from 'react';
class MaListe extends React.Component {
    render() {
      const titre=this.props.titre;
      const data=this.props.numbers.map(n=> <li key={n} > {`${titre} ${n}`}</li>);
      return (
      <>
        <h2> {titre}  </h2>
        <ul>  {data} </ul>
      </>

      );
    }
  }

  export default MaListe;