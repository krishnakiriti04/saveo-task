import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Map from "./Map"


function Body() {
    const [location,setLocation] = useState("");
    const [lng,setLng] = useState("");
    const [lat,setLat] = useState("");
    const [cordinates,setCordinates] = useState([]);
    const [show,setShow] = useState(false);

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const data = {
            location,lat,lng
        }
        setCordinates([...cordinates,data])
        setLocation("");
        setLng("");
        setLat("");
    }

    return (
      <div className="body__wrap">
        <div className="body__header">
          <div className="body__inputs">
            <form onSubmit={handleFormSubmit}>
              <Form.Row className="body__formElements">
                <Col>
                  <Form.Group controlId="formBasicLocation">
                    <Form.Label className="body__formlabel">Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Location" value={location} onChange={(e)=>setLocation(e.target.value)} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicLatitude">
                    <Form.Label className="body__formlabel">Latitude</Form.Label>
                    <Form.Control type="number" placeholder="Enter Latitude" value={lat} onChange={(e)=>setLat(e.target.value)} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formBasicLongitude">
                    <Form.Label className="body__formlabel">Longitude</Form.Label>
                    <Form.Control type="number" placeholder="Enter Longitude" value={lng} onChange={(e)=>setLng(e.target.value)} />
                  </Form.Group>
                </Col>
                
                <Col>
                  <button className="body__formBtn" type="submit">
                    Submit
                  </button>
                </Col>                
              </Form.Row>
            </form>
          </div>
        </div>
        <div className="body__body">
        <div className="col-6">
            <div className="body__list">
            <h4>ALL CO-ORDINATES</h4>
            <div>
                {cordinates.length>0 && cordinates.map((val,ind)=>{
                        return (<div className="body__coordinates" key={ind}>
                            <h6>{ind+1}</h6>
                            <h6>{val.location}</h6>
                            <h6>{val.lat}</h6>
                            <h6>{val.lng}</h6>
                        </div>)
                    })
                 
                }
            </div>
            </div>
          <button className="body__showBtn" onClick={()=>setShow(true)}>Show Route</button>
          </div>
          <div className="col-6">
          <Map cordinates={cordinates} show={show}/>
          </div>
        </div>
      </div>
    );
}

export default Body;
