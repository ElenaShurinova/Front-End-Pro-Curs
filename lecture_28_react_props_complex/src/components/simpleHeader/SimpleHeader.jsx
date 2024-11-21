function SimpleHeader({ customStyles={} ,headerText}) {
  return <h1 style={customStyles}>
    {headerText} </h1>;
}



export default SimpleHeader;