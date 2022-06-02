import { height } from "@mui/system";
import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import "./DashBoard.css";

function DashBoard() {
  return (
    <>
      <div className="DropDown-Div">
        <select className="DropDown_Dashboard-1" name="status" id="cards" style={{width:"100px" , height:"30px"}}>
          <option className="Batch-Name" value="Batch Name">
            Batch Name
          </option>
          <option value="inProgress">Absconded</option>
          <option value="pending">Terminated</option>
        </select>
      </div>
      <div className="dashBoard">
        <div>
          <Card
          style={{height: "317px"}}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                // style={{ zIndex: "1" }}
              >
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
          style={{height: "317px"}}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                // style={{ zIndex: "1" }}
              >
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
          style={{height: "317px"}}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                // style={{ zIndex: "1" }}
              >
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="BigCard">
          <Card style={{height:"414px"}}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                // style={{ zIndex: "1" }}
              >
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card
          style={{height:"414px"}}
          >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                // style={{ zIndex: "1" }}
              >
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
